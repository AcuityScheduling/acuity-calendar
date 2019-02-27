import getMinutesMoved from './getMinutesMoved';

/**
 * Get the total amount of change when dragging an event vertically. Can be used in both
 * moving an event vertically and extending an event
 *
 * @param {Object} params
 * @param {number} params.selectMinutes
 * @param {Object} params.event
 * @param {number} params.selectMinutesHeight
 */
const getDragVerticalChange = ({
  lastY,
  selectMinutes,
  event,
  selectMinutesHeight,
}) => {
  if (!lastY) return 0;
  let minutesMoved = getMinutesMoved({
    event,
    lastY,
    selectMinutes,
    selectMinutesHeight,
  });

  const positionsMoved = minutesMoved / selectMinutes;
  return selectMinutesHeight * positionsMoved;
};

export default getDragVerticalChange;
