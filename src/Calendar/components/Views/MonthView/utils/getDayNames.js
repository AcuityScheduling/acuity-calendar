import moment from "moment";

/**
 * Get an array of all the days of the week - moment will give them to us 0 indexed on Sunday
 * We could get them locale specific with moment, but we NEED to pass "firstDay" everywhere
 * else, so we'll stay conventional and require passing "firstDay" to get the order right
 *
 * @param {Object} params - the first day of the week Sunday = 0
 * @param {0|1|2|3|4|5|6} params.firstDay - the first day of the week Sunday = 0
 * @param {'dd'|'ddd'|'dddd'} params.format - the format to return the day of the week - this
 *                                            uses the formating for moment even though that's
 *                                            not what the moment api does
 */
const getDayNames = ({ firstDay = 0, format = "dddd" }) => {
  const formatMap = {
    dd: "weekdaysMin",
    ddd: "weekdaysShort",
    dddd: "weekdays"
  };

  const days = moment[formatMap[format]]();
  const addToEnd = days.slice(0, firstDay);
  const daysWithFrontRemoved = days.slice(firstDay);

  return [].concat(daysWithFrontRemoved, addToEnd);
};

export default getDayNames;