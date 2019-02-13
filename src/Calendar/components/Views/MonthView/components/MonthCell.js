import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
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
  onSelectSlot
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
              // This wrapper should be reused from the stepgrid
              <div
                key={event.id}
                onClick={e => {
                  e.stopPropagation();
                  onSelectEvent(event);
                }}
                style={{ fontSize: "12px", position: "absolute" }}
              >
                {event.title}
              </div>
            )
        )}
    </div>
  );
};

MonthCell.propTypes = {
  date: MOMENT_TYPE.isRequired,
  events: PropTypes.object.isRequired,
  isInRange: PropTypes.bool.isRequired,
  onSelectEvent: PropTypes.func.isRequired
};

export default MonthCell;
