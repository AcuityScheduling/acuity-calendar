import React from "react";
import PropTypes from "prop-types";
import { EVENT_TYPE } from "../types";
import { makeClass } from "../utils";
import "./CalendarEvent.scss";

const CalendarEvent = ({ event, onSelectEvent, ...restProps }) => {
  return (
    <div
      className={makeClass("times__event")}
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
