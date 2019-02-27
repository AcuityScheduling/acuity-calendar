// eslint-disable-next-line no-unused-vars
import moment from 'moment';
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from '../constants';

/**
 * Get how far from the top the event is
 *
 * @param {Object} params
 * @param {number} params.stepMinutes
 * @param {moment} params.date
 */
const getTopOffset = ({ stepMinutes, date }) => {
  const stepHeight = STEP_HEIGHTS[stepMinutes];
  const pixelsPerMinute = stepHeight / stepMinutes;

  const minutesSinceMidnight = getMinutesSinceMidnight(date);

  return (
    minutesSinceMidnight * pixelsPerMinute + date.hour() * STEP_BORDER_WIDTH
  );
};

/**
 * How many minutes since midnight
 *
 * @param {moment} time
 */
const getMinutesSinceMidnight = time => {
  const hour = time.get('hour');
  const minute = time.get('minute');
  return hour * 60 + minute;
};

export default getTopOffset;
