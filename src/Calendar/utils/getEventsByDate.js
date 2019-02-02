import get from "lodash/get";

/**
 * Get all the events keyed by date for easy lookup
 *
 * @param {Object[]} events
 * @returns {Object}
 */
const getEventsByDate = events => {
  return events.reduce((eventsByDate, event) => {
    eventsByDate[event.start.format("YYYY-MM-DD")] = [
      ...get(eventsByDate, event.start.format("YYYY-MM-DD"), []),
      event
    ];
    return eventsByDate;
  }, {});
};

export default getEventsByDate;
