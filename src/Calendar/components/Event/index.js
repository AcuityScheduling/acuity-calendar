import React from "react";
import PropTypes from "prop-types";
import { EVENT_TYPE } from "../../types";
import { makeClass } from "../../utils";
import "./index.scss";
import { getDisplayTime, getEventContainerClass } from "./utils";

const Event = ({ event, onSelectEvent, children, className, ...restProps }) => {
  return (
    <div
      {...restProps}
      className={getEventContainerClass(className)}
      role="button"
      onClick={e => {
        e.stopPropagation();
        onSelectEvent(event);
      }}
    >
      {children ? (
        children(event)
      ) : (
        <div className={makeClass("times__event-wrapper")}>
          <span className={makeClass("times__event-title")}>
            {event.title},{" "}
          </span>
          <span className={makeClass("times__event-time")}>
            {getDisplayTime(event)}
          </span>
        </div>
      )}
    </div>
  );
};

Event.defaultProps = {
  renderEvent: null
};

Event.propTypes = {
  onSelectEvent: PropTypes.func.isRequired,
  event: EVENT_TYPE.isRequired,
  renderEvent: PropTypes.func
};

export default Event;
