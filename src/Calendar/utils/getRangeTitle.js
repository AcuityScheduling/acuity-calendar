// eslint-disable-next-line no-unused-vars
import moment from "moment";
import { CALENDAR_VIEWS } from "../constants";

const { month, week, day } = CALENDAR_VIEWS;

/**
 * Get the title to return for the range of the currently selected date
 * in the calendar toolbar
 *
 * @param {Object} params
 * @param {moment} params.date
 * @param {string} params.view
 */
const getRangeTitle = ({ date, view }) => {
  const viewMap = {
    [month]: date.format("MMMM YYYY"),
    [week]: `Week of ${date.format("MMMM D, YYYY")}`,
    [day]: date.format("MMMM D, YYYY")
  };

  return viewMap[view];
};

export default getRangeTitle;
