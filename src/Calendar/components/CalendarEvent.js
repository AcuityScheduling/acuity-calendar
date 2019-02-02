import React from "react";
import PropTypes from "prop-types";

const CalendarEvent = ({ event, onSelectEvent }) => {
  return (
    <div
      role="button"
      onClick={e => {
        e.stopPropagation();
        onSelectEvent(event);
      }}
    >
      {event.title}
    </div>
  );
};

CalendarEvent.propTypes = {
  onSelectEvent: PropTypes.func.isRequired
};

export default CalendarEvent;
