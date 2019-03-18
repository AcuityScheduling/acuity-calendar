import get from 'lodash.get';
import moment from 'moment';
import getSortedEvents from './getSortedEvents';
import { getTopOffset } from '../components/TimeGrid/utils';
import {
  STEP_HEIGHTS,
  STEP_BORDER_WIDTH,
} from '../components/TimeGrid/constants';

/**
 * Get all the events keyed by date for easy lookup - and add some
 * details that are needed when displaying - we're doing it all here
 * so we don't have to do more than one loop
 *
 * @param {Object} params
 * @param {Object[]} params.events
 * @param {number} params.stepMinutes
 * @param {number} params.stepHeight
 * @returns {Object}
 */
const getMungedEvents = ({
  events,
  stepMinutes = false,
  stepHeight = false,
}) => {
  const expandedEvents = expandAllDayEvents(events);
  const sortedEvents = getSortedEvents(expandedEvents);

  return sortedEvents.reduce((eventsKeyed, event, index) => {
    // If there are no step minutes that means we're getting
    // munged data for something OTHER than TimeGrid
    if (!stepMinutes) {
      return setNestedObject({ eventsKeyed, event });
    }
    const newEvent = addEventLocation({
      event,
      stepMinutes,
      stepHeight,
    });

    // We're turning the event array into a nested object with the group id
    // and the date as separate keys so we can access the events quickly by key
    return setNestedObject({ eventsKeyed, event: newEvent });
  }, {});
};

/**
 * If an event spans multiple days we need to turn that into multiple events so the
 * event can show up on each day. We're also going to turn string start and ends
 * to a moment object in here, so we can loop through them once
 *
 * @param {array} events
 */
const expandAllDayEvents = events => {
  return events.reduce((accumulator, event) => {
    const padding = {};
    if (event.paddingTopStart) {
      padding.paddingTopStart = moment(event.paddingTopStart).seconds(0);
    }
    if (event.paddingBottomEnd) {
      padding.paddingBottomEnd = moment(event.paddingBottomEnd).seconds(0);
    }
    // Turn event strings into moment objects
    const newEvent = Object.assign({}, event, {
      start: moment(event.start).seconds(0),
      end: moment(event.end).seconds(0),
      ...padding,
    });

    const totalDays = Math.abs(
      newEvent.start
        .clone()
        .startOf('day')
        // If the day ends at 12am we don't want that to count as a new day
        // so we're going to subtract a second just to make sure
        .diff(newEvent.end.clone().subtract(1, 'seconds'), 'days')
    );

    accumulator = [...accumulator, newEvent];

    // If the start IS the same as the end we're done, just add the one new event
    if (totalDays === 0) return accumulator;

    // If the start is not the same as the end we need to return multiple events
    // Because the next one will be the next day
    for (let i = 1; i <= totalDays; i += 1) {
      const nextEvent = Object.assign({}, newEvent);
      nextEvent.start = newEvent.start
        .clone()
        .add(i, 'days')
        .startOf('day');
      if (newEvent.end.isSame(nextEvent.start, 'day')) {
        nextEvent.end = newEvent.end;
      } else {
        nextEvent.end = nextEvent.start.clone().endOf('day');
      }
      accumulator = [...accumulator, nextEvent];
    }
    return accumulator;
  }, []);
};

/**
 * Get the offset position (top) of the event for day view
 * and the height of the event
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {5|10|15|20|25|30|60} params.stepMinutes
 */
const addEventLocation = ({ event, stepMinutes, stepHeight }) => {
  const pixelsPerMinute =
    (stepHeight || STEP_HEIGHTS[stepMinutes]) / stepMinutes;
  const totalDayHeight = pixelsPerMinute * 60 * 24;

  const duration = event.end.clone().diff(event.start, 'minutes');
  const borderHeightAdjustment = (duration / 60) * STEP_BORDER_WIDTH;
  const eventTopOffset = getTopOffset({
    stepMinutes,
    date: event.start,
    stepHeight,
  });

  const maxHeight = totalDayHeight - eventTopOffset + STEP_BORDER_WIDTH * 24;
  let height = duration * pixelsPerMinute + borderHeightAdjustment;
  if (height > maxHeight) {
    height = maxHeight;
  }

  const padding = getEventPadding({ event, pixelsPerMinute });

  const location = {
    height,
    top: eventTopOffset,
    paddingTopHeight: padding.topHeight,
    paddingBottomHeight: padding.bottomHeight,
  };

  return Object.assign(event, location);
};

/**
 * Get the height of the event's padding
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {number} params.pixelsPerMinute
 */
const getEventPadding = ({ event, pixelsPerMinute }) => {
  let topHeight = 0;
  if (event.paddingTopStart) {
    const paddingTopDuration = event.paddingTopStart
      .clone()
      .diff(event.start, 'minutes');
    const borderHeightAdjustmentPadding =
      (paddingTopDuration / 60) * STEP_BORDER_WIDTH;
    topHeight = Math.abs(
      paddingTopDuration * pixelsPerMinute + borderHeightAdjustmentPadding
    );
  }
  let bottomHeight = 0;
  if (event.paddingBottomEnd) {
    const paddingBottomDuration = event.paddingBottomEnd
      .clone()
      .diff(event.end, 'minutes');
    const borderHeightAdjustmentPadding =
      (paddingBottomDuration / 60) * STEP_BORDER_WIDTH;
    bottomHeight = Math.abs(
      paddingBottomDuration * pixelsPerMinute + borderHeightAdjustmentPadding
    );
  }

  return {
    topHeight,
    bottomHeight,
  };
};

/**
 * This function creates the special function with all the nested objects. It should look like this:
 *
 * {
 *   5(this is the group_id):  {
 *    2019-01-02: [
 *       {
 *         start: moment(),
 *         end: moment(),
 *         title: 'My New event'
 *       },
 *       {
 *         start: moment(),
 *         end: moment(),
 *         title: 'My New event'
 *       }
 *    ]
 *   }
 * }
 *
 * @param {Object} params
 * @param {Object} params.eventsKeyed - the last set of events in their keyed form
 * @param {Object} params.event - the new event with location
 */
const setNestedObject = ({ eventsKeyed, event }) => {
  const newEventsKeyed = Object.assign({}, eventsKeyed);

  const thisDate = event.start.format('YYYY-MM-DD');
  const eventsForDate = get(eventsKeyed, `${event.group_id}.${thisDate}`, []);
  eventsForDate.push(event);

  const dates = get(eventsKeyed, `${event.group_id}`, {});
  dates[thisDate] = eventsForDate;

  newEventsKeyed[event.group_id] = dates;

  return newEventsKeyed;
};

export default getMungedEvents;
