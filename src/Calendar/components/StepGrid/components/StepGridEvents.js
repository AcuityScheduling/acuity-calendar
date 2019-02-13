import React, { useMemo } from "react";
import PropTypes from "prop-types";
import EventDragDrop from "../../Event/components/EventDragDrop";
import Event from "../../Event";
import { getEventColumns } from "../utils";
import { makeClass } from "../../../utils";
import { EVENT_TYPE, STEP_MINUTES_TYPE } from "../../../types";

const StepGridEvents = ({
  events,
  stepMinutes,
  selectMinutes,
  onSelectEvent,
  renderEvent
}) => {
  const eventsWithColumns = useMemo(() => getEventColumns(events), [events]);

  return Object.keys(eventsWithColumns).map(column => {
    const thisColumnEvents = eventsWithColumns[column];
    return (
      <div className={makeClass("step-grid__event-column")} key={column}>
        {thisColumnEvents.map(event => {
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
                    height: `${event.height}px`
                  }}
                  onSelectEvent={onSelectEvent}
                >
                  {renderEvent}
                </Event>
              )}
            </EventDragDrop>
          );
        })}
      </div>
    );
  });
};

StepGridEvents.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE).isRequired,
  stepMinutes: STEP_MINUTES_TYPE,
  onSelectEvent: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE,
  renderEvent: PropTypes.func.isRequired
};

export default StepGridEvents;
