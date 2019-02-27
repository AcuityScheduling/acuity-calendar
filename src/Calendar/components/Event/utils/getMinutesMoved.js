/**
 * Get the minutes moved when limited by not moving from one day to another day
 *
 * @param {Object} params
 * @param {number} params.changeInY
 * @param {Object} params.event
 * @param {number} params.selectMinutes
 * @param {number} params.selectMinutesHeight
 */
const getMinutesMoved = ({
  changeInY,
  event,
  selectMinutes,
  selectMinutesHeight,
}) => {
  let minutesMoved = getTotalMinutesMoved({
    changeInY,
    selectMinutes,
    selectMinutesHeight,
  });
  if (getIsYesterday({ event, minutesMoved })) {
    minutesMoved = minutesMoved + selectMinutes;
  }
  if (getIsTomorrow({ event, minutesMoved })) {
    minutesMoved = minutesMoved - selectMinutes;
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
export const getTotalMinutesMoved = ({
  changeInY,
  selectMinutes,
  selectMinutesHeight,
}) => {
  if (changeInY === 0) return 0;
  const totalPositionMoves = changeInY / selectMinutesHeight;
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
export const getIsYesterday = ({ event, minutesMoved }) => {
  return event.start
    .clone()
    .add(minutesMoved, 'minutes')
    .isSame(event.start.clone().subtract(1, 'days'), 'days');
};

/**
 * With the move is this event starting tomorrow?
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {number} params.minutesMoved
 */
export const getIsTomorrow = ({ event, minutesMoved }) => {
  return event.end
    .clone()
    .add(minutesMoved, 'minutes')
    .isSame(event.end.clone().add(1, 'days'), 'days');
};

export default getMinutesMoved;
