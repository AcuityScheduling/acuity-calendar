// eslint-disable-next-line no-unused-vars
import moment from "moment";
import { CALENDAR_VIEWS } from "../../Calendar/constants";
import { getWeekList } from "../../Calendar/components/Views/WeekView/utils";

const { month, week, calendar } = CALENDAR_VIEWS;

/**
 * Get the title to return for the range of the currently selected date
 * in the calendar toolbar
 *
 * @param {Object} params
 * @param {moment} params.date
 * @param {string} params.view
 * @param {0|1|2|3|4|5|6} params.firstDay
 */
const getRangeTitle = ({ date, view, firstDay }) => {
  const weekList = getWeekList({ firstDay, date });

  const viewMap = {
    [month]: date.format("MMMM YYYY"),
    [week]: `Week of ${weekList[0].format("MMMM D, YYYY")}`,
    [calendar]: date.format("MMMM D, YYYY")
  };

  return viewMap[view];
};

export default getRangeTitle;
