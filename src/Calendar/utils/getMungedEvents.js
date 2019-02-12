import get from "lodash/get";
import moment from "moment";
import { getTopOffset } from "../components/CalendarTimes/utils";
import { STEP_HEIGHTS } from "../components/CalendarTimes/constants";

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

  let currentColumn = 1;
  return sortedEvents.reduce((eventsKeyed, event, index) => {
    let newEvent = event;
    newEvent = addEventLocation({
      event: newEvent,
      stepMinutes
    });

    const eventColumn = getEventColumn({
      event,
      lastEvent: index !== 0 ? sortedEvents[index - 1] : null,
      currentColumn
    });
    if (eventColumn !== currentColumn) {
      currentColumn = eventColumn;
    }

    return setNestedObject({ eventsKeyed, event: newEvent, eventColumn });
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
 * Add a column key for each event to say which
 * column it should belong in in its respective day
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {Object} params.lastEvent
 * @param {number} params.currentColumn
 */
const getEventColumn = ({ event, lastEvent, currentColumn }) => {
  // If first event OR this event is on a different day then
  // the last event start at column 1 again
  if (!lastEvent || !event.start.isSame(lastEvent.start, "day")) return 1;

  // These come in sorted by start date, so we only need to check if the start
  // of this event is BEFORE the last event. If it is it needs a new column
  // otherwise we're still in column 1
  if (event.start.isBefore(lastEvent.end)) {
    return currentColumn + 1;
  }

  return 1;
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
 * @param {number} params.eventColumn - the column this event will appear in
 */
const setNestedObject = ({ eventsKeyed, event, eventColumn }) => {
  const newEventsKeyed = Object.assign({}, eventsKeyed);

  const thisDate = event.start.format("YYYY-MM-DD");

  const eventsForColumn = get(
    eventsKeyed,
    `${event.calendar_id}.${thisDate}.column_${eventColumn}`,
    []
  );
  eventsForColumn.push(event);

  const columns = get(eventsKeyed, `${event.calendar_id}.${thisDate}`, {});
  columns[`column_${eventColumn}`] = eventsForColumn;

  const dates = get(eventsKeyed, `${event.calendar_id}`, {});
  dates[thisDate] = columns;

  newEventsKeyed[event.calendar_id] = dates;

  return newEventsKeyed;
};

export default getMungedEvents;
