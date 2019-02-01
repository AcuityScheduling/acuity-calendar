import moment from "moment";
import { CALENDAR_VIEWS } from "../constants";

const { month, week, day } = CALENDAR_VIEWS;

const getRangeTitle = ({ date, view }) => {
  const viewMap = {
    [month]: moment(date).format("MMMM YYYY"),
    [week]: `Week of ${moment(date).format("MMMM D, YYYY")}`,
    [day]: moment(date).format("MMMM D, YYYY")
  };

  return viewMap[view];
};

export default getRangeTitle;
