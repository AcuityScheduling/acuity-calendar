import moment from "moment";
import getMinutesSinceMidnight from "./getMinutesSinceMidnight";
import { STEP_BORDER_WIDTH } from "../constants";

/**
 * Get the styles for the current time indicator - this will place it in the right place
 * and style it
 *
 * @param {Object} params
 * @param {number} params.stepHeight
 * @param {5|10|15|20|25|30|60} params.stepMinutes
 */
export const getCurrentTimeIndicatorStyles = ({ stepHeight, stepMinutes }) => {
  const now = moment();
  const pixelsPerMinute = stepHeight / stepMinutes;
  const minutesSinceMidnight = getMinutesSinceMidnight(now);
  const currentTimePosition =
    minutesSinceMidnight * pixelsPerMinute + now.hour() * STEP_BORDER_WIDTH;

  return {
    position: "absolute",
    top: `${currentTimePosition}px`,
    height: "1px",
    width: "100%"
  };
};

/**
 * Get the styles for the current time indicator for TODAY. This will allow us to
 * style the time indicator on the current day differently than on the rest of the calendar
 *
 * @param {Object} params
 * @param {number} params.stepHeight
 * @param {5|10|15|20|25|30|60} params.stepMinutes
 */
export const getCurrentTimeIndicatorTodayStyles = ({
  stepHeight,
  stepMinutes
}) => {
  const timeIndicatorStyles = getCurrentTimeIndicatorStyles({
    stepHeight,
    stepMinutes
  });

  timeIndicatorStyles.background = "blue";
  timeIndicatorStyles.zIndex = 2;

  return timeIndicatorStyles;
};

export default getCurrentTimeIndicatorTodayStyles;
