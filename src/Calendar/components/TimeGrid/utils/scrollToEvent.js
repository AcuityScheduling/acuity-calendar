import get from 'lodash.get';

const getFirstEventStart = ({ mungedEvents, selectedDate }) => {
  const firstEvent = Object.keys(mungedEvents).reduce(
    (accumulator, groupId) => {
      const eventArray =
        mungedEvents[groupId][selectedDate.format('YYYY-MM-DD')];

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

// The time that we're scrolling to when going to month/week view. Will
// scroll to make the first event in view on selected date only if it's
// before 9am or scroll to 9am
const scrollToEvent = ({ mungedEvents, selectedDate }) => {
  const firstEventStart = getFirstEventStart({ mungedEvents, selectedDate });

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
