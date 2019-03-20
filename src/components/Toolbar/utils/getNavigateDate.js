import { CALENDAR_VIEWS } from '../../../Calendar/constants';

/**
 * Get the next date we're navigating to in the calendar depending on the view
 *
 * @param {object} params
 * @param {string} params.view - The calendar view
 * @param {number} params.direction - 1 for next -1 for previous
 * @param {moment} params.currentDate - the current date we're using to navigate
 */
const getNavigateDate = ({ view, direction, currentDate }) => {
  const { month, week, groups } = CALENDAR_VIEWS;

  const getDate = time => {
    return currentDate.clone().add(direction, time);
  };

  const viewMap = {
    [month]: getDate('months'),
    [week]: getDate('weeks'),
    [groups]: getDate('days'),
  };

  return viewMap[view];
};

export default getNavigateDate;
