import React from "react";
import PropTypes from "prop-types";
import { EVENT_TYPE } from "../types";
import { makeClass } from "../utils";
import "./Event.scss";

const Event = ({ event, onSelectEvent, ...restProps }) => {
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

Event.propTypes = {
  onSelectEvent: PropTypes.func.isRequired,
  event: EVENT_TYPE.isRequired
};

export default Event;
