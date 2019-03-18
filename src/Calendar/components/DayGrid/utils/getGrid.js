// eslint-disable-next-line no-unused-vars
import moment from 'moment';

/**
 * Get the grid in array of array form e.g: [ [1,2,3], [4,5,6] ]
 * for mapping over in the day grid
 *
 * @param {Object} params
 * @param {moment} params.firstDate - the first date of the grid
 * @param {moment} params.lastDate - the first date of the grid
 * @param {number} params.totalColumns - the number of columns in the grid
 * @param {boolean} params.allowPartialRows - If false then days on a row without full "totalColumns"
 *                                            will be removed from the grid. e.g: [ [1,2,3], [4] ]
 *                                            in this case the second array would be removed
 * @param {function} params.getExcludedDates - a function that returns true if the date it's on should
 *                                             not be part of the grid
 */
const getGrid = ({
  firstDate,
  lastDate,
  totalColumns = 7,
  allowPartialRows = false,
  getExcludedDates = () => false,
}) => {
  const totalDays = lastDate.diff(firstDate, 'days');
  const grid = [];
  let currentRow = 0;
  let currentColumn = 0;
  for (let i = 0; i <= totalDays; i += 1) {
    if (!grid[currentRow]) {
      grid[currentRow] = [];
    }
    const nextDate = firstDate.clone().add(i, 'days');
    if (!getExcludedDates(nextDate)) {
      grid[currentRow] = [
        ...grid[currentRow],
        firstDate.clone().add(i, 'days'),
      ];
      if (currentColumn + 1 === totalColumns) {
        currentRow += 1;
        currentColumn = 0;
      } else {
        currentColumn += 1;
      }
    }
  }

  if (!allowPartialRows) {
    if (grid[grid.length - 1].length < totalColumns) {
      grid.length = grid.length - 1;
    }
  }

  return grid;
};

export default getGrid;
