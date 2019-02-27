import {
  getIsYesterday,
  getIsTomorrow,
  getTotalMinutesMoved,
} from './getMinutesMoved';

/**
 * Is the event moved out of the moveable range?
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {number} params.changeInY
 * @param {number} params.selectMinutes
 * @param {number} params.selectMinutesHeight
 */
const getIsInMoveableRange = ({
  event,
  lastY,
  changeInY,
  selectMinutes,
  selectMinutesHeight,
}) => {
  let totalMinutes = getTotalMinutesMoved({
    lastY,
    selectMinutes,
    selectMinutesHeight,
  });
  if (changeInY > 0) {
    return !getIsTomorrow({ event, minutesMoved: totalMinutes });
  }
  if (changeInY < 0) {
    return !getIsYesterday({ event, minutesMoved: totalMinutes });
  }
  return true;
};

export default getIsInMoveableRange;
