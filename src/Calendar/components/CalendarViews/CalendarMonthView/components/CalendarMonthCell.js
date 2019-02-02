import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import styles from "./CalendarMonthCell.module.css";
import CalendarEvent from "../../../CalendarEvent";
import { MOMENT_TYPE } from "../../../../types";
import { cellWidth } from "../utils";

const CalendarMonthCell = ({
  date,
  events,
  isInRange,
  onSelectEvent,
  onSelectSlot
}) => {
  const eventsForCell = get(events, date.format("YYYY-MM-DD"), []);

  return (
    <div
      className={styles.cell}
      style={cellWidth}
      role="button"
      onClick={() => onSelectSlot(date)}
    >
      <h2>{date.date()}</h2>
      {eventsForCell.length > 0 &&
        eventsForCell.map(
          event =>
            isInRange && (
              <CalendarEvent
                event={event}
                key={event.id}
                onSelectEvent={onSelectEvent}
              />
            )
        )}
    </div>
  );
};

CalendarMonthCell.propTypes = {
  date: MOMENT_TYPE.isRequired,
  events: PropTypes.object.isRequired,
  isInRange: PropTypes.bool.isRequired,
  onSelectEvent: PropTypes.func.isRequired
};

export default CalendarMonthCell;
