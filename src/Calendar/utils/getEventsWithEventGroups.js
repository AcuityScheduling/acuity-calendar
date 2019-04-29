import get from 'lodash.get';
import getSortedEvents from './getSortedEvents';

/**
 * Flatten the object of munged events to ONLY selected calendar events
 *
 * @param {Object} params
 * @param {Object} params.mungedEvents - These events need to be keyed all fun for this function to work
 * @param {array} params.visibleEventGroups - An array of visible event groups
 */
const getEventsWithEventGroups = ({ mungedEvents, visibleEventGroups }) => {
  const newEvents = Object.assign({}, mungedEvents);
  if (visibleEventGroups) {
    Object.keys(newEvents).forEach(groupId => {
      if (!visibleEventGroups.includes(Number(groupId))) {
        delete newEvents[groupId];
      }
    });
  }

  // Do the events coming have a column_id field? The munged events are going to look
  // different depending on whether they do or not
  const hasColumn = getHasColumn(mungedEvents);

  const selectedCalendarEvents = Object.keys(newEvents).reduce(
    (accumulator, groupId) => {
      if (!hasColumn) {
        const datesWithEvents = Object.keys(newEvents[groupId]);
        datesWithEvents.forEach(date => {
          accumulator[date] = getSortedEvents([
            ...get(accumulator, date, []),
            ...newEvents[groupId][date],
          ]);
        });
      } else {
        const columnsWithDates = Object.keys(newEvents[groupId]);
        columnsWithDates.forEach(columnId => {
          const datesWithEvents = Object.keys(newEvents[groupId][columnId]);
          datesWithEvents.forEach(date => {
            const columnKeyExists = get(accumulator, columnId, false);
            if (!columnKeyExists) {
              accumulator[columnId] = {};
            }
            accumulator[columnId][date] = getSortedEvents([
              ...get(accumulator, `${columnId}.${date}`, []),
              ...newEvents[groupId][columnId][date],
            ]);
          });
        });
      }

      return accumulator;
    },
    {}
  );
  return selectedCalendarEvents;
};

const getHasColumn = mungedEvents => {
  if (Object.keys(mungedEvents).length === 0) {
    return false;
  }
  const groupId = Object.keys(mungedEvents)[0];
  const columnIdOrDate = Object.keys(mungedEvents[groupId])[0];
  // If it is an array that means we got to event columns - which means it does NOT
  // have a column_id
  if (Array.isArray(mungedEvents[groupId][columnIdOrDate])) {
    return false;
  }
  return true;
};

export default getEventsWithEventGroups;
