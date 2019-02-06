import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CalendarDay.module.css";
import { EVENT_TYPE, MOMENT_TYPE, STEP_MINUTES_TYPE } from "../../../../types";
import CalendarEvent from "../../../CalendarEvent";
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from "../constants";
import { getTodayColumnStyles } from "../utils";

const CalendarDay = ({
  events,
  date,
  totalStepsPerBlock,
  stepMinutes,
  onSelectEvent,
  onSelectSlot,
  selectMinutes
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
        height: `${totalHeight}px`,
        ...getTodayColumnStyles(date)
      }}
      onClick={e => {
        const rect = e.target.getBoundingClientRect();
        const verticalClick = e.clientY - rect.top;

        const stepHeight = STEP_HEIGHTS[stepMinutes];
        const pixelsPerMinute = stepHeight / stepMinutes;
        const minutesFromMidnight = verticalClick / pixelsPerMinute;
        const selectedTime = date
          .clone()
          .startOf("day")
          .add(minutesFromMidnight, "minutes");

        const rounded =
          Math.round(selectedTime.clone().minute() / selectMinutes) *
          selectMinutes;

        const newTime = selectedTime
          .clone()
          .minute(rounded)
          .second(0);

        onSelectSlot(newTime);
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
  onSelectSlot: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE
};

export default CalendarDay;
