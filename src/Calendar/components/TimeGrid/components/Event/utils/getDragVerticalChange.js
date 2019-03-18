import getMinutesMoved from './getMinutesMoved';

/**
 * Get the total amount of change when dragging an event vertically. Can be used in both
 * moving an event vertically and extending an event
 *
 * @param {Object} params
 * @param {number} params.selectMinutes
 * @param {moment} params.originalStart
 * @param {moment} params.originalEnd
 * @param {number} params.selectMinutesHeight
 */
const getDragVerticalChange = ({
  pixelsMoved,
  selectMinutes,
  originalStart,
  originalEnd,
  selectMinutesHeight,
}) => {
  if (!pixelsMoved) return 0;
  let minutesMoved = getMinutesMoved({
    originalStart,
    originalEnd,
    pixelsMoved: pixelsMoved,
    selectMinutes,
    selectMinutesHeight,
  });

  const positionsMoved = minutesMoved / selectMinutes;
  return selectMinutesHeight * positionsMoved;
};

export default getDragVerticalChange;
