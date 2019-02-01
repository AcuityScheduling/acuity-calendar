import moment from "moment";
import { CALENDAR_VIEWS } from "../constants";

/**
 * Get the next date we're navigating to in the calendar depending on the view
 *
 * @param {object} params
 * @param {string} params.view - The calendar view
 * @param {number} params.direction - 1 for next -1 for previous
 * @param {object} params.currentDate - the current date we're using to navigate
 */
const getNavigateDate = ({ view, direction, currentDate }) => {
  const { month, week, day } = CALENDAR_VIEWS;

  const getDate = time => {
    return new Date(moment(currentDate).add(direction, time));
  };

  const viewMap = {
    [month]: getDate("months"),
    [week]: getDate("weeks"),
    [day]: getDate("days")
  };

  return viewMap[view];
};

export default getNavigateDate;
