// eslint-disable-next-line no-unused-vars
import moment from 'moment';

/**
 * How many minutes from midnight
 *
 * @param {moment} time
 */
const getMinutesFromMidnight = time => {
  const midnight = time
    .clone()
    .add(1, 'days')
    .startOf('day');

  return midnight.diff(time, 'minutes');
};

export default getMinutesFromMidnight;
