import get from 'lodash.get';
// eslint-disable-next-line no-unused-vars
import moment from 'moment';

/**
 * Get the start time of the first event on a given selectedDate
 *
 * @param {Object} params
 * @param {Object} params.mungedEvents - the events in there munged format
 * @param {moment} params.selectedDate
 * @param {boolean} params.hasGroups - does munged events include groups as the top level key?
 *                                     this will be true for calendarGroups view
 */
const getFirstEventStart = ({ mungedEvents, selectedDate, hasGroups }) => {
  const firstEvent = Object.keys(mungedEvents).reduce(
    (accumulator, firstKey) => {
      let eventArray = mungedEvents[firstKey];
      if (hasGroups) {
        eventArray = mungedEvents[firstKey][selectedDate.format('YYYY-MM-DD')];
      } else {
        if (firstKey !== selectedDate.format('YYYY-MM-DD')) {
          return accumulator;
        }
      }

      if (eventArray) {
        const minEvent = eventArray.reduce((minEvent, event) => {
          if (minEvent === false) {
            return event;
          }
          if (event.top < minEvent.top) {
            return event;
          }
          return minEvent;
        }, false);

        if (accumulator === null || accumulator.top > minEvent.top) {
          return minEvent;
        }
      }

      return accumulator;
    },
    null
  );
  return get(firstEvent, 'start', null);
};

/**
 * The time that we're scrolling to when going to month/week view. Will
 * scroll to make the first event in view on selected date only if it's
 * before 9am or scroll to 9am
 *
 * @param {Object} params
 * @param {Object} params.mungedEvents
 * @param {moment} params.selectedDate
 * @param {boolean} params.hasGroups
 */
const scrollToEvent = ({
  mungedEvents,
  mungedStepDetails,
  selectedDate,
  hasGroups,
}) => {
  let firstEventStart = getFirstEventStart({
    mungedEvents,
    selectedDate,
    hasGroups,
  });
  // If there's no event on the day then try a step detail
  if (!firstEventStart) {
    firstEventStart = getFirstEventStart({
      mungedEvents: mungedStepDetails,
      selectedDate,
      hasGroups,
    });
  }

  // This is the total minutes that we're going to pad our scroll by.
  // I think it's better to give a little padding before the event so
  // It's not so crowded by our scroll. So if our earliest event was 7 am
  // and our firstEventPadding was 60 then it would scroll to 6 am.
  const firstEventPaddingMinutes = 60;

  // Default to 9:00am if there are no events before that time on
  // the selected date
  const defaultScrollTime = selectedDate.clone().set({ hour: 8, minute: 30 });
  if (!firstEventStart) {
    return defaultScrollTime;
  }

  const paddedTime = firstEventStart
    .clone()
    .subtract(firstEventPaddingMinutes, 'minutes');

  // If the padded time made the scroll go to the day before - we can't
  // do that so just go to midnight
  if (!paddedTime.isSame(firstEventStart, 'day')) {
    return firstEventStart.clone().set({ hour: 0, minutes: 0, seconds: 0 });
  }

  return paddedTime;
};

export default scrollToEvent;
