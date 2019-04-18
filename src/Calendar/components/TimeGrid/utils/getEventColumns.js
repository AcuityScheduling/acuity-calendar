import get from 'lodash.get';

/**
 * Get event columns and add them to the munged events data if the events that are being
 * passed in have an object with the event date as a key
 *
 * @param {Object} events
 */
const getEventColumns = events => {
  const newEvents = Object.assign({}, events);
  const hasColumn = getHasColumn(events);
  if (!hasColumn) {
    return Object.keys(events).reduce((accumulator, date) => {
      return {
        ...accumulator,
        [date]: getEventColumnsPerDay(newEvents[date]),
      };
    }, {});
  } else {
    return Object.keys(events).reduce((accumulator, columnId) => {
      const dateKeyEvents = Object.keys(events[columnId]).reduce(
        (dateEvents, date) => {
          return {
            ...dateEvents,
            [date]: getEventColumnsPerDay(newEvents[columnId][date]),
          };
        },
        {}
      );
      return {
        ...accumulator,
        [columnId]: dateKeyEvents,
      };
    }, {});
  }
};

const getHasColumn = events => {
  if (Array.isArray(Object.keys(events)[0])) {
    return false;
  }
  return true;
};

/**
 * Get event columns and add them to the munged events data if the events that are being
 * passed in have an object with the group id as the key
 *
 * @param {Object} events
 */
export const getEventColumnsByGroup = events => {
  const newEvents = Object.assign({}, events);
  const hasColumn = getHasColumn(events);

  if (!hasColumn) {
    return Object.keys(newEvents).reduce((accumulator, groupId) => {
      Object.keys(newEvents[groupId]).forEach(date => {
        accumulator = {
          ...accumulator,
          [groupId]: {
            ...accumulator[groupId],
            [date]: getEventColumnsPerDay(newEvents[groupId][date]),
          },
        };
      });
      return accumulator;
    }, {});
  } else {
    return Object.keys(newEvents).reduce((accumulator, groupId) => {
      Object.keys(newEvents[groupId]).forEach(columnId => {
        Object.keys(newEvents[groupId][columnId]).forEach(date => {
          accumulator = {
            ...accumulator,
            [groupId]: {
              ...get(accumulator, groupId, {}),
              [columnId]: {
                ...get(accumulator, `${groupId}.${columnId}`, {}),
                [date]: getEventColumnsPerDay(
                  newEvents[groupId][columnId][date]
                ),
              },
            },
          };
        });
      });
      return accumulator;
    }, {});
  }
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
    accumulator = {
      ...accumulator,
      [eventColumn]: [...eventsInColumn, event],
    };
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
