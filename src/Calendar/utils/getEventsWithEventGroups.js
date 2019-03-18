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

  const selectedCalendarEvents = Object.keys(newEvents).reduce(
    (accumulator, groupId) => {
      const datesWithEvents = Object.keys(newEvents[groupId]);
      datesWithEvents.forEach(date => {
        accumulator[date] = getSortedEvents([
          ...get(accumulator, date, []),
          ...newEvents[groupId][date],
        ]);
      });
      return accumulator;
    },
    {}
  );
  return selectedCalendarEvents;
};

export default getEventsWithEventGroups;
