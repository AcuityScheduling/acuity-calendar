import moment from "moment";
import { makeClass } from "../../../utils";

/**
 * If the date is today we're going to add an extra class
 *
 * @param {moment} date - the selected date
 */
const getTodayClass = date => {
  if (!date.isSame(moment(), "day")) return "";
  return ` ${makeClass("step-grid__today")}`;
};

export default getTodayClass;
