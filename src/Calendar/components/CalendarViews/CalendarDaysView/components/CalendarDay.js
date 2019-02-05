import React from "react";
import PropTypes from "prop-types";
import styles from "./CalendarDay.module.css";
import { EVENT_TYPE, MOMENT_TYPE, STEP_MINUTES_TYPE } from "../../../../types";
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from "../constants";
import CalendarEvent from "../../../CalendarEvent";

const CalendarDay = ({
  events,
  date,
  totalStepsPerBlock,
  stepMinutes,
  onSelectEvent,
  onSelectSlot
}) => {
  // We need to remove the height added by borders to get everything to line
  // up correctly
  const extraBorderHeight =
    (totalStepsPerBlock * STEP_BORDER_WIDTH - STEP_BORDER_WIDTH) /
    totalStepsPerBlock;

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
          role="button"
          onClick={() => {
            onSelectSlot(
              date
                .clone()
                .startOf("day")
                .add(stepMinutes * i, "minutes")
            );
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
      return (
        <CalendarEvent
          key={event.id}
          event={event}
          style={{ top: `${event.top}px`, height: `${event.height}px` }}
          onSelectEvent={onSelectEvent}
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
  stepMinutes: STEP_MINUTES_TYPE,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired
};

export default CalendarDay;
