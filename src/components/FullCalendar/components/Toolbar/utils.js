import { getWeekList } from '../../../CalendarWeek/utils';
import { CALENDAR_VIEWS } from '../../../../Calendar/constants';

const { month, week, groups } = CALENDAR_VIEWS;

/**
 * Get the next date we're navigating to in the calendar depending on the view
 *
 * @param {object} params
 * @param {string} params.view - The calendar view
 * @param {number} params.direction - 1 for next -1 for previous
 * @param {moment} params.currentDate - the current date we're using to navigate
 */
export const getNavigateDate = ({ view, direction, currentDate }) => {
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

/**
 * Get the title to return for the range of the currently selected date
 * in the calendar toolbar
 *
 * @param {Object} params
 * @param {moment} params.date
 * @param {string} params.view
 * @param {0|1|2|3|4|5|6} params.firstDay
 */
export const getRangeTitle = ({ date, view, firstDay }) => {
  const weekList = getWeekList({ firstDay, date });

  const viewMap = {
    [month]: date.format('MMMM YYYY'),
    [week]: `Week of ${weekList[0].format('MMMM D, YYYY')}`,
    [groups]: date.format('dddd, MMMM D, YYYY'),
  };

  return viewMap[view];
};
