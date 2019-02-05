import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CalendarDay.module.css";
import { EVENT_TYPE, MOMENT_TYPE, STEP_MINUTES_TYPE } from "../../../../types";
import CalendarEvent from "../../../CalendarEvent";
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from "../constants";

const CalendarDay = ({
  events,
  date,
  totalStepsPerBlock,
  stepMinutes,
  onSelectEvent,
  onSelectSlot
}) => {
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

  const aggregateBorderHeight = totalStepsPerBlock * STEP_BORDER_WIDTH * 24;

  const totalHeight = useMemo(
    () =>
      STEP_HEIGHTS[stepMinutes] * totalStepsPerBlock * 24 +
      (aggregateBorderHeight - 1 * STEP_BORDER_WIDTH * 25),
    [stepMinutes]
  );

  return (
    <div
      className={styles.column}
      key={`weekView${date.day()}`}
      style={{
        minWidth: `${100 / 7}%`,
        height: `${totalHeight}px`
      }}
    >
      {renderEvents()}
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
