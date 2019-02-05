import React from "react";
import PropTypes from "prop-types";
import styles from "./CalendarDay.module.css";
import { EVENT_TYPE, MOMENT_TYPE, STEP_MINUTES_TYPE } from "../../../../types";
import { STEP_HEIGHTS } from "../constants";
import CalendarEvent from "../../../CalendarEvent";

const borderWidth = 1;
const CalendarDay = ({ events, date, totalStepsPerBlock, stepMinutes }) => {
  // We need to remove the height added by borders to get everything to line
  // up correctly
  const extraBorderHeight =
    (totalStepsPerBlock * borderWidth - borderWidth) / totalStepsPerBlock;

  const stepHeight = STEP_HEIGHTS[stepMinutes];
  const stepHeightNoBorder = `${stepHeight - extraBorderHeight}px`;
  const dayDate = date.date();

  const renderTimeBlocks = () => {
    const times = [];
    for (let i = 0; i < 24 * totalStepsPerBlock; i += 1) {
      times.push(
        <div
          className={styles.time_block}
          key={`timeBlock${i}${dayDate}`}
          style={{
            height: stepHeightNoBorder
          }}
        >
          {i}
        </div>
      );
    }
    return times;
  };

  const renderEvents = () => {
    return events.map(event => {
      console.log('event.height: ', event.height);
      return (
        <CalendarEvent
          event={event}
          style={{ top: `${event.top}px`, height: `${event.height}px` }}
        />
      );
    });
  };

  return (
    <div
      className={styles.column}
      key={`weekView${date.day()}`}
      style={{
        minWidth: `${100 / 7}%`
      }}
    >
      {renderEvents()}
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
