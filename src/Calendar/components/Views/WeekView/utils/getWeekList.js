// eslint-disable-next-line no-unused-vars
import moment from "moment";

/**
 * Get all the days that could possibly be used in this week based off of the date
 * that was given
 *
 * @param {Object} params
 * @param {0|1|2|3|4|5|6} params.firstDay - the first day of the week we're using for the calendar
 * @param {moment} params.date - the first day of the week we're using for the calendar
 * @returns {moment[]}
 */
const getPossibleDays = ({ firstDay = 0, date }) => {
  const week = [];
  const lastWeek = date.clone().subtract(6, "days");
  for (let i = 0; i < 13; i += 1) {
    week.push(lastWeek.clone().add(i, "days"));
  }
  return week;
};

/**
 * Get the index for the first day in our array of possible days
 */
export const getFirstDayIndex = ({ firstDay, dateDay }) => {
  if (firstDay === dateDay) {
    return 6;
  }

  let distance = firstDay - (dateDay + 7);
  if (dateDay > firstDay) {
    distance = (dateDay - firstDay) * -1;
  }

  return 6 + distance;
};

/**
 * Get a list of dates based on the first day of the week used for calendars. This will
 * be an array that we can iterate over to display the dates in the week view
 *
 * @param {Object} params
 * @param {0|1|2|3|4|5|6} params.firstDay - the first day of the week we're using for the calendar
 * @param {moment} params.date - the first day of the week we're using for the calendar
 * @returns {moment[]}
 */
const getWeekList = ({ firstDay, date }) => {
  const possibleDays = getPossibleDays({ firstDay, date });
  const firstDayIndex = getFirstDayIndex({
    firstDay,
    dateDay: date.day(),
    possibleDays
  });
  return possibleDays.slice(firstDayIndex, firstDayIndex + 7);
};

export default getWeekList;
