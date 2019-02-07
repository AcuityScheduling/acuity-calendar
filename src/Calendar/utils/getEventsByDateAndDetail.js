import get from "lodash/get";
import getTopOffset from "./getTopOffset";
import { STEP_HEIGHTS } from "../components/CalendarViews/CalendarDaysView/constants";

/**
 * Add a column key for each event to say which
 * column it should belong in in its respective day
 *
 * @param {array} eventsForDay - all events for a given day
 */
const getEventColumn = ({ event, lastEvent, currentColumn }) => {
  // let column = 1;
  // let columnEnd = "";
  // return eventsForDay.reduce((accumulator, event, index) => {
  //   if (index === 0) {
  //     const newEvent = addColumnToEvent({ event, column });
  //     columnEnd = event.end;
  //     return [newEvent];
  //   }
  //   if (event.start.isBefore(columnEnd)) {
  //     columnEnd = event.end;
  //     column += 1;
  //     const newEvent = addColumnToEvent({ event, column });
  //     accumulator.push(newEvent);
  //     return accumulator;
  //   }
  //   columnEnd = event.end;
  //   const newEvent = addColumnToEvent({ event, column: 1 });
  //   accumulator.push(newEvent);
  //   return accumulator;
  // }, []);
  return {
    column: 1
  };
};

export const getEventLocation = ({ event, stepMinutes }) => {
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
const getEventsByDateAndDetails = ({ events, stepMinutes }) => {
  let currentColumn = 1;

  return events.reduce((eventsByDate, event, index) => {
    const eventLocation = getEventLocation({ event, stepMinutes });
    const eventColumn = getEventColumn({
      event,
      lastEvent: events[index - 1],
      currentColumn
    });
    if (eventColumn !== currentColumn) {
      currentColumn = eventColumn;
    }
    const newEvent = Object.assign(event, eventLocation, eventColumn);

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

export default getEventsByDateAndDetails;
