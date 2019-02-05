import React from "react";
import PropTypes from "prop-types";
import styles from "./CalendarEvent.module.css";
import { EVENT_TYPE } from "../types";

const CalendarEvent = ({ event, onSelectEvent, ...restProps }) => {
  return (
    <div
      className={styles.event}
      role="button"
      onClick={e => {
        e.stopPropagation();
        onSelectEvent(event);
      }}
      {...restProps}
    >
      {event.title}
    </div>
  );
};

CalendarEvent.propTypes = {
  onSelectEvent: PropTypes.func.isRequired,
  event: EVENT_TYPE.isRequired
};

export default CalendarEvent;
