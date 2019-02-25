import get from 'lodash/get';
import moment from 'moment';
import { getTopOffset } from '../components/StepGrid/utils';
import {
  STEP_HEIGHTS,
  STEP_BORDER_WIDTH,
} from '../components/StepGrid/constants';

/**
 * Get all the events keyed by date for easy lookup - and add some
 * details that are needed when displaying - we're doing it all here
 * so we don't have to do more than one loop
 *
 * @param {Object[]} events
 * @returns {Object}
 */
const getMungedEvents = ({ events, stepMinutes }) => {
  const expandedEvents = expandAllDayEvents(events);
  const sortedEvents = getSortedEvents(expandedEvents);

  return sortedEvents.reduce((eventsKeyed, event, index) => {
    const newEvent = addEventLocation({
      event,
      stepMinutes,
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
    // Turn event strings into moment objects
    const newEvent = Object.assign({}, event, {
      start: moment(new Date(event.start)),
      end: moment(new Date(event.end)),
    });

    const totalDays = Math.abs(
      newEvent.start
        .clone()
        .startOf('day')
        .diff(newEvent.end, 'days')
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
 * The events must be sorted by start time for the rest of the logic to work
 *
 * @param {Object[]} events
 */
const getSortedEvents = events => {
  return events.sort((a, b) => {
    if (a.start.isAfter(b.start)) return 1;
    if (a.start.isBefore(b.start)) return -1;
    return 0;
  });
};

/**
 * Get the offset position (top) of the event for day view
 * and the height of the event
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {5|10|15|20|25|30|60} params.stepMinutes
 */
const addEventLocation = ({ event, stepMinutes }) => {
  const stepHeight = STEP_HEIGHTS[stepMinutes];
  const pixelsPerMinute = stepHeight / stepMinutes;
  const totalDayHeight = pixelsPerMinute * 60 * 24;

  const duration = event.end.clone().diff(event.start, 'minutes');
  const borderHeightAdjustment = (duration / 60) * STEP_BORDER_WIDTH;
  const eventTopOffset = getTopOffset({ stepMinutes, date: event.start });

  const maxHeight = totalDayHeight - eventTopOffset + STEP_BORDER_WIDTH * 24;
  let height = duration * pixelsPerMinute + borderHeightAdjustment;
  if (height > maxHeight) {
    height = maxHeight;
  }

  const location = {
    height,
    top: eventTopOffset,
  };

  return Object.assign(event, location);
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
