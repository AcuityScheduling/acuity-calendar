import get from "lodash/get";
import moment from "moment";
import { getTopOffset } from "../components/Times/utils";
import { STEP_HEIGHTS } from "../components/Times/constants";

/**
 * Get all the events keyed by date for easy lookup - and add some
 * details that are needed when displaying - we're doing it all here
 * so we don't have to do more than one loop
 *
 * @param {Object[]} events
 * @returns {Object}
 */
const getMungedEvents = ({ events, stepMinutes }) => {
  const eventsWithDates = getEventsWithDates(events);
  const sortedEvents = getSortedEvents(eventsWithDates);

  return sortedEvents.reduce((eventsKeyed, event, index) => {
    let newEvent = event;
    newEvent = addEventLocation({
      event: newEvent,
      stepMinutes
    });

    return setNestedObject({ eventsKeyed, event: newEvent });
  }, {});
};

/**
 * The events come in with start and end as strings we need them as moment objects
 *
 * @param {Object[]} events
 */
const getEventsWithDates = newEvents => {
  return newEvents.map(event => {
    return Object.assign({}, event, {
      start: moment(new Date(event.start)),
      end: moment(new Date(event.end))
    });
  });
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

  const duration = event.end.clone().diff(event.start, "minutes");

  const location = {
    height: duration * pixelsPerMinute,
    top: getTopOffset({ stepMinutes, date: event.start })
  };

  return Object.assign(event, location);
};

/**
 * This function creates the special function with all the nested objects. It should look like this:
 *
 * {
 *   5(this is the calendar_id):  {
 *    2019-01-02: {
 *     column_1: [
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
 *     ]
 *    }
 *   }
 * }
 *
 * @param {Object} params
 * @param {Object} params.eventsKeyed - the last set of events in their keyed form
 * @param {Object} params.event - the new event with location
 */
const setNestedObject = ({ eventsKeyed, event }) => {
  const newEventsKeyed = Object.assign({}, eventsKeyed);

  const thisDate = event.start.format("YYYY-MM-DD");

  const eventsForDate = get(
    eventsKeyed,
    `${event.calendar_id}.${thisDate}`,
    []
  );
  eventsForDate.push(event);

  const dates = get(eventsKeyed, `${event.calendar_id}`, {});
  dates[thisDate] = eventsForDate;

  newEventsKeyed[event.calendar_id] = dates;

  return newEventsKeyed;
};

export default getMungedEvents;
