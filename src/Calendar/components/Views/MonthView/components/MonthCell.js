import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import Event from "../../../Event";
import { MOMENT_TYPE } from "../../../../types";
import { cellWidth, makeClass } from "../../../../utils";

const monthCellStyles = {
  width: cellWidth
};

const MonthCell = ({
  date,
  events,
  isInRange,
  onSelectEvent,
  onSelectSlot,
  renderEvent
}) => {
  const eventsForCell = get(events, date.format("YYYY-MM-DD"), []);

  return (
    <div
      className={makeClass("month__cell")}
      style={monthCellStyles}
      role="button"
      onClick={() => onSelectSlot(date)}
    >
      <h2 className={makeClass("month__date")}>{date.date()}</h2>
      {eventsForCell.length > 0 &&
        eventsForCell.map(
          event =>
            isInRange && (
              <Event
                event={event}
                key={event.id}
                onSelectEvent={onSelectEvent}
              >
                {renderEvent}
              </Event>
            )
        )}
    </div>
  );
};

MonthCell.propTypes = {
  date: MOMENT_TYPE.isRequired,
  events: PropTypes.object.isRequired,
  isInRange: PropTypes.bool.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  renderEvent: PropTypes.func
};

export default MonthCell;
