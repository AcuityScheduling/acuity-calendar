import React from "react";
import PropTypes from "prop-types";
import { getEventContainerClass } from "../utils";
import { EVENT_TYPE } from "../../../types";

const EventWrapper = ({
  children,
  className,
  event,
  onSelectEvent,
  ...restProps
}) => {
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
      {children}
    </div>
  );
};

EventWrapper.className = {
  className: ""
};

EventWrapper.defaultProps = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  event: EVENT_TYPE.isRequired,
  onSelectEvent: PropTypes.func.isRequired
};

export default EventWrapper;
