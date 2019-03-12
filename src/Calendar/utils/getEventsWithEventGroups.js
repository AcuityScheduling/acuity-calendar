import get from 'lodash/get';
import getSortedEvents from './getSortedEvents';

/**
 * Flatten the object of munged events to ONLY selected calendar events
 *
 * @param {Object} params
 * @param {Object} params.mungedEvents - These events need to be keyed all fun for this function to work
 * @param {array} params.eventGroups - An array of event groups
 */
const getEventsWithEventGroups = ({ mungedEvents, eventGroups }) => {
  const newEvents = Object.assign({}, mungedEvents);
  Object.keys(newEvents).forEach(calendarId => {
    if (!eventGroups.includes(Number(calendarId))) {
      delete newEvents[calendarId];
    }
  });

  const selectedCalendarEvents = Object.keys(newEvents).reduce(
    (accumulator, calendarId) => {
      const datesWithEvents = Object.keys(newEvents[calendarId]);
      datesWithEvents.forEach(date => {
        accumulator[date] = getSortedEvents([
          ...get(accumulator, date, []),
          ...newEvents[calendarId][date],
        ]);
      });
      return accumulator;
    },
    {}
  );
  return selectedCalendarEvents;
};

export default getEventsWithEventGroups;
