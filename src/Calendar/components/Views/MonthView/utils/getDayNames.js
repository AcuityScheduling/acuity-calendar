import moment from 'moment';

/**
 * Get an array of all the days of the week - moment will give them to us 0 indexed on Sunday
 * We could get them locale specific with moment, but we NEED to pass "firstDay" everywhere
 * else, so we'll stay conventional and require passing "firstDay" to get the order right
 *
 * @param {0|1|2|3|4|5|6} firstDay - the first day of the week Sunday = 0
 *                                            uses the formating for moment even though that's
 *                                            not what the moment api does
 */
const getDayNames = ({ firstDay = 0 }) => {
  const weekdays = {};
  weekdays.full = correctOrder({ days: moment.weekdays(), firstDay });
  weekdays.min = correctOrder({ days: moment.weekdaysMin(), firstDay });
  weekdays.short = correctOrder({ days: moment.weekdaysShort(), firstDay });

  return weekdays;
};

const correctOrder = ({ days, firstDay }) => {
  const addToEnd = days.slice(0, firstDay);
  const daysWithFrontRemoved = days.slice(firstDay);

  return [].concat(daysWithFrontRemoved, addToEnd);
};

export default getDayNames;
