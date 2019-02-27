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
  changeInY,
  selectMinutes,
  selectMinutesHeight,
}) => {
  let totalMinutes = getTotalMinutesMoved({
    changeInY,
    selectMinutes,
    selectMinutesHeight,
  });
  return (
    !getIsYesterday({ event, totalMinutes }) &&
    !getIsTomorrow({ event, totalMinutes })
  );
};

export default getIsInMoveableRange;
