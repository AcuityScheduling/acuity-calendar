import getMinutesMoved from './getMinutesMoved';

/**
 * Get a new start and end depending on where the event has been dragged to
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {Object} params.deltaPosition - An object with x/y telling how far the event moved
 * @param {number} params.selectMinutesHeight - the height of one movement on grid
 * @param {number} params.selectMinutes - The amount of minutes of one movement on grid
 */
const getDraggedEventStartEnd = ({
  event,
  deltaPosition,
  selectMinutesHeight,
  selectMinutes,
  isDurationOnly = false,
}) => {
  let start = event.start.clone();
  let end = event.end.clone();

  let totalMinutes = getMinutesMoved({
    originalStart: event.start,
    originalEnd: event.end,
    pixelsMoved: deltaPosition.y,
    selectMinutes,
    selectMinutesHeight,
  });

  if (totalMinutes === 0) return { start, end };

  if (!isDurationOnly) {
    start.add(totalMinutes, 'minutes');
  }
  end.add(totalMinutes, 'minutes');

  const padding = {};
  if (event.paddingTopStart) {
    padding.paddingTopStart = event.paddingTopStart
      .clone()
      .add(totalMinutes, 'minutes');
  }

  if (event.paddingBottomEnd) {
    padding.paddingBottomEnd = event.paddingBottomEnd
      .clone()
      .add(totalMinutes, 'minutes');
  }

  const newTimes = {
    start,
    end,
    ...padding,
  };

  return newTimes;
};

export default getDraggedEventStartEnd;
