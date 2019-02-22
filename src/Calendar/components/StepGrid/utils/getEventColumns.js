import get from 'lodash/get';

const getEventColumns = events => {
  const newEvents = Object.assign({}, events);
  return Object.keys(events).reduce((accumulator, date) => {
    accumulator[date] = getEventColumnsPerDay(newEvents[date]);
    return accumulator;
  }, newEvents);
};

/**
 * Add the column number as the key to all events in that column
 *
 * @param {array} events
 */
const getEventColumnsPerDay = events => {
  let currentColumn = 1;
  return events.reduce((accumulator, event, index) => {
    const eventColumn = getEventColumn({
      event,
      lastEvent: index !== 0 ? events[index - 1] : null,
      currentColumn,
    });
    const eventsInColumn = get(accumulator, eventColumn, []);
    accumulator[eventColumn] = [...eventsInColumn, event];
    if (eventColumn !== currentColumn) {
      currentColumn = eventColumn;
    }
    return accumulator;
  }, {});
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
  if (!lastEvent || !event.start.isSame(lastEvent.start, 'day')) return 1;

  // These come in sorted by start date, so we only need to check if the start
  // of this event is BEFORE the last event. If it is it needs a new column
  // otherwise we're still in column 1
  if (event.start.isBefore(lastEvent.end)) {
    return currentColumn + 1;
  }

  return 1;
};

export default getEventColumns;
