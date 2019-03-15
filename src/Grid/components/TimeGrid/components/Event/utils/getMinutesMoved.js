// eslint-disable-next-line no-unused-vars
import moment from 'moment';

/**
 * Get the minutes moved when limited by not moving from one day to another day
 *
 * @param {Object} params
 * @param {number} params.pixelsMoved - total pixels that the items was moved so far
 * @param {moment} params.originalStart
 * @param {moment} params.originalEnd
 * @param {number} params.selectMinutes
 * @param {number} params.selectMinutesHeight
 */
export const getMinutesMoved = ({
  pixelsMoved,
  originalStart,
  originalEnd,
  selectMinutes,
  selectMinutesHeight,
}) => {
  let minutesMoved = getTotalMinutesMoved({
    pixelsMoved,
    selectMinutes,
    selectMinutesHeight,
  });
  if (getIsYesterday({ originalStart, originalEnd, minutesMoved })) {
    minutesMoved =
      originalStart
        .clone()
        .diff(originalStart.clone().startOf('day'), 'minutes') * -1;
  }
  if (getIsTomorrow({ originalStart, originalEnd, minutesMoved })) {
    minutesMoved = originalStart
      .clone()
      .endOf('day')
      .add(1, 'minutes')
      .diff(originalEnd, 'minutes');
  }
  return minutesMoved;
};

/**
 * Get the total number of minutes we've moved SNAPPED to the nearest selectMinutes
 * selectMinutes defaults to 15 minutes.
 *
 * @param {Object} params
 * @param {number} params.totalMinutes - Total minutes that we've moved so far
 * @param {number} params.selectMinutes
 */
const getTotalMinutesMoved = ({
  pixelsMoved,
  selectMinutes,
  selectMinutesHeight,
}) => {
  if (pixelsMoved === 0) return 0;
  const totalPositionMoves = pixelsMoved / selectMinutesHeight;
  const totalMinutes = totalPositionMoves * selectMinutes;
  // Round to nearest selectMinutes and divide by select minutes to get total positions moved
  return Math.round(totalMinutes / selectMinutes) * selectMinutes;
};

/**
 * With the move is this event starting yesterday?
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {number} params.minutesMoved
 */
const getIsYesterday = ({ originalStart, originalEnd, minutesMoved }) => {
  return originalStart
    .clone()
    .add(minutesMoved, 'minutes')
    .isSame(originalStart.clone().subtract(1, 'days'), 'days');
};

/**
 * With the move is this event starting tomorrow?
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {number} params.minutesMoved
 */
const getIsTomorrow = ({ originalStart, originalEnd, minutesMoved }) => {
  return originalEnd
    .clone()
    .add(minutesMoved, 'minutes')
    .isSame(originalStart.clone().add(1, 'days'), 'days');
};

export default getMinutesMoved;
