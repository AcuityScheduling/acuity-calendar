/**
 * Get the total number of minutes we've moved SNAPPED to the nearest selectMinutes
 * selectMinutes defaults to 15 minutes.
 *
 * @param {Object} params
 * @param {number} params.totalMinutes - Total minutes that we've moved so far
 * @param {number} params.selectMinutes
 */
const getMinutesMoved = ({ lastY, selectMinutes, selectMinutesHeight }) => {
  if (lastY === 0) return 0;
  const totalPositionMoves = lastY / selectMinutesHeight;
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
    .add(1, 'seconds')
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
    .subtract(1, 'seconds')
    .isSame(event.end.clone().add(1, 'days'), 'days');
};

export default getMinutesMoved;
