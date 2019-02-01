// importing moment for JSDOC only
// eslint-disable-next-line no-unused-vars
import moment from "moment";

// A 7x6 grid (7 days a week and 6 potential weeks) has 42 days we need to know
const totalGridSize = 42;

/**
 * Get an array of the grid for a month based on a given first day and date
 *
 * @param {Object} params
 * @param {moment} params.date - the selected date we want the month grid for
 * @param {0|1|2|3|4|5|6} params.firstDay - the day of the week the month starts on 0 = Sunday
 * @returns {number[]}
 */
const getMonthGrid = ({ date, firstDay = 0 }) => {
  const startOfGrid = getStartOfGrid({ date, firstDay });
  const middleOfGrid = getArrayOfDays(date);
  const endOfGrid = getEndOfGrid(startOfGrid.length + middleOfGrid.length);

  const grid = [].concat(startOfGrid, middleOfGrid, endOfGrid);

  const nestedGrid = [];
  for (let i = 0; i < totalGridSize; i += 7) {
    nestedGrid.push(grid.slice(i, i + 7));
  }
  return nestedGrid;
};

/**
 * Get the start of the array grid. Last months dates, something like: [28, 29, 30, 31]
 *
 * @param {Object} params
 * @param {moment} params.date - the selected date we want the month grid for
 * @param {0|1|2|3|4|5|6} params.firstDay - the day of the week the month starts on 0 = Sunday
 * @returns {number[]}
 */
const getStartOfGrid = ({ date, firstDay }) => {
  const monthStartPadding = getMonthStartPadding({
    firstDateDay: date
      .clone()
      .startOf("month")
      .day(),
    firstDay
  });

  const lastDayOfLastMonth = date
    .clone()
    .subtract(1, "months")
    .endOf("month")
    .date();

  const firstDayOfPadding = lastDayOfLastMonth - monthStartPadding + 1;

  const startOfGrid = [];
  for (let i = firstDayOfPadding; i <= lastDayOfLastMonth; i += 1) {
    startOfGrid.push(i);
  }

  return startOfGrid;
};

/**
 * Get the total padding BEFORE the dates start
 *
 * @param {Object} params
 * @param {0|1|2|3|4|5|6} params.firstDateDay - The day of the first date of the month
 * @param {0|1|2|3|4|5|6} params.firstDay - the day of the week the month starts on 0 = Sunday
 * @returns {number}
 */
const getMonthStartPadding = ({ firstDateDay, firstDay }) => {
  let totalPadding = 0;
  for (let i = firstDay; i < firstDay + 7; i += 1) {
    if (i === firstDateDay || (i > 6 && i === firstDateDay + 7)) {
      return totalPadding;
    }
    totalPadding += 1;
  }
  return totalPadding;
};

/**
 * Get an array like [1, 2, 3, ...] for each day of the month
 *
 * @param {moment} date - the date we want an array of days of the month for
 * @returns {number[]}
 */
export const getArrayOfDays = date => {
  const totalDays = date.daysInMonth();
  const days = [];
  for (let i = 1; i <= totalDays; i += 1) {
    days.push(i);
  }
  return days;
};

/**
 * Get the first days of the next month depending on how many days are left
 *
 * @param {Object} params
 * @param {moment} params.date - the selected date
 * @param {number} params.totalDates - the total amount of dates we have so far
 */
const getEndOfGrid = totalDates => {
  const remainingDates = totalGridSize - totalDates;
  const days = [];
  for (let i = 1; i <= remainingDates; i += 1) {
    days.push(i);
  }
  return days;
};

export default getMonthGrid;
