import React from "react";
import PropTypes from "prop-types";
import styles from "./CalendarDay.module.css";
import { EVENT_TYPE, MOMENT_TYPE, STEP_MINUTES_TYPE } from "../../../../types";
import { STEP_HEIGHTS } from "../constants";
// import { getMinutesSinceMidnight } from "../utils";

const CalendarDay = ({ events, date, totalStepsPerBlock, stepMinutes }) => {
  const borderWidth = 1;
  // We need to remove the height added by borders to get everything to line
  // up correctly
  const extraBorderHeight =
    (totalStepsPerBlock * borderWidth - borderWidth) / totalStepsPerBlock;

  const renderTimeBlocks = () => {
    const times = [];
    for (let i = 0; i < 24 * totalStepsPerBlock; i += 1) {
      const timeBlockTime = date
        .clone()
        .startOf("day")
        .add(stepMinutes * i, "minutes");
      times.push(
        <div
          className={styles.time_block}
          key={`timeBlock${i}${date.date()}`}
          style={{
            height: `${STEP_HEIGHTS[stepMinutes] - extraBorderHeight}px`
          }}
        >
          {timeBlockTime.format("h:mma")}
        </div>
      );
    }
    return times;
  };

  // const renderEvents = () => {
  //   return events.map(event => {
  //     const minutesSinceMidnight = getMinutesSinceMidnight(event.start);

  //     return false;
  //   });
  // };

  return (
    <div
      className={styles.column}
      key={`weekView${date.day()}`}
      style={{
        minWidth: `${100 / 7}%`
      }}
    >
      {/* {renderEvents()} */}
      {renderTimeBlocks()}
    </div>
  );
};

CalendarDay.propTypes = {
  totalStepsPerBlock: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(EVENT_TYPE).isRequired,
  date: MOMENT_TYPE.isRequired,
  stepMinutes: STEP_MINUTES_TYPE
};

export default CalendarDay;
