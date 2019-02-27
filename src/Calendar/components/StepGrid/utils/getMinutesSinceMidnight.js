// eslint-disable-next-line no-unused-vars
import moment from 'moment';

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

export default getMinutesSinceMidnight;
