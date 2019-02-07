import get from "lodash/get";
import getTopOffset from "./getTopOffset";
import { STEP_HEIGHTS } from "../components/CalendarViews/CalendarDaysView/constants";

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
 * Get the offset position (top) of the event for day view
 * and the height of the event
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {5|10|15|20|25|30|60} params.stepMinutes
 */
const getEventLocation = ({ event, stepMinutes }) => {
  const stepHeight = STEP_HEIGHTS[stepMinutes];
  const pixelsPerMinute = stepHeight / stepMinutes;

  const duration = event.end.clone().diff(event.start, "minutes");

  return {
    height: duration * pixelsPerMinute,
    top: getTopOffset({ stepMinutes, date: event.start })
  };
};

/**
 * Get all the events keyed by date for easy lookup - and add some
 * details that are needed when displaying - we're doing it all here
 * so we don't have to do more than one loop
 *
 * @param {Object[]} events
 * @returns {Object}
 */
const getMungedEvents = ({ events, stepMinutes }) => {
  // Sort the events by start time - this is necessary for
  // a lot of logic later. If the events are not sorted everything
  // is going to get all funky
  const sortedEvents = events.sort((a, b) => {
    if (a.start.isAfter(b.start)) return 1;
    if (a.start.isBefore(b.start)) return -1;
    return 0;
  });

  let currentColumn = 1;
  return sortedEvents.reduce((eventsByDate, event, index) => {
    const eventLocation = getEventLocation({ event, stepMinutes });
    const eventColumn = getEventColumn({
      event,
      lastEvent: index !== 0 ? events[index - 1] : null,
      currentColumn
    });
    if (eventColumn !== currentColumn) {
      currentColumn = eventColumn;
    }

    const newEvent = Object.assign(event, eventLocation, {
      column: eventColumn
    });

    const eventsThisDay = get(
      eventsByDate,
      event.start.format("YYYY-MM-DD"),
      []
    );
    eventsThisDay.push(newEvent);
    eventsByDate[event.start.format("YYYY-MM-DD")] = eventsThisDay;

    return eventsByDate;
  }, {});
};

export default getMungedEvents;
