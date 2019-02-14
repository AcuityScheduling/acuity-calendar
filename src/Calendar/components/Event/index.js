import React from "react";
import PropTypes from "prop-types";
import { EVENT_TYPE } from "../../types";
import { makeClass } from "../../utils";
import EventWrapper from "./components/EventWrapper";
import { getDisplayTime } from "./utils";
import "./index.scss";

const Event = ({
  event,
  onSelectEvent,
  children,
  className,
  renderEvent,
  ...restProps
}) => {
  return (
    <EventWrapper
      {...restProps}
      className={className}
      event={event}
      onSelectEvent={onSelectEvent}
    >
      {children ? (
        children(event)
      ) : (
        <div className={makeClass("step-grid__event-wrapper")}>
          <span className={makeClass("step-grid__event-title")}>
            {event.title}
          </span>
          <span className={makeClass("step-grid__event-time")}>
            {getDisplayTime(event)}
          </span>
        </div>
      )}
    </EventWrapper>
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
