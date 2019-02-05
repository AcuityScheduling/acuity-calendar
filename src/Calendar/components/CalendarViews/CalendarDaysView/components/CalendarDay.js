import React from "react";
import PropTypes from "prop-types";
import styles from "./CalendarDay.module.css";
import CalendarTimeBlocks from "./CalendarTimeBlocks";
import { EVENT_TYPE, MOMENT_TYPE, STEP_MINUTES_TYPE } from "../../../../types";
import CalendarEvent from "../../../CalendarEvent";

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

  return (
    <div
      className={styles.column}
      key={`weekView${date.day()}`}
      style={{
        minWidth: `${100 / 7}%`
      }}
    >
      {renderEvents()}
      <CalendarTimeBlocks
        totalStepsPerBlock={totalStepsPerBlock}
        stepMinutes={stepMinutes}
        date={date}
        onSelectSlot={onSelectSlot}
      />
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
