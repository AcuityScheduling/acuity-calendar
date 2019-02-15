import React from "react";
import PropTypes from "prop-types";
import EventDragDrop from "../../Event/components/EventDragDrop";
import Event from "../../Event";
import { STEP_MINUTES_TYPE } from "../../../types";

const StepGridEvents = ({
  events,
  stepMinutes,
  selectMinutes,
  onSelectEvent,
  renderEvent
}) => {
  const totalColumns = Object.keys(events).length;
  const percentWidth = 100 / totalColumns - 1;

  return Object.keys(events).map(column => {
    const thisColumnEvents = events[column];
    return thisColumnEvents.map(event => {
      return (
        <EventDragDrop
          key={event.id}
          event={event}
          stepMinutes={stepMinutes}
          selectMinutes={selectMinutes}
        >
          {draggedEvent => (
            <Event
              event={draggedEvent}
              style={{
                top: `${event.top}px`,
                height: `${event.height}px`,
                width: `${percentWidth}%`,
                left: `${percentWidth * (column - 1)}%`
              }}
              onSelectEvent={onSelectEvent}
            >
              {renderEvent}
            </Event>
          )}
        </EventDragDrop>
      );
    });
  });
};

StepGridEvents.defaultProps = {
  renderEvent: null
};

StepGridEvents.propTypes = {
  events: PropTypes.object.isRequired,
  stepMinutes: STEP_MINUTES_TYPE,
  onSelectEvent: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE,
  renderEvent: PropTypes.func
};

export default StepGridEvents;
