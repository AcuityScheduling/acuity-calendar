import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import styles from "./CalendarMonthCell.module.css";
import CalendarEvent from "../../../CalendarEvent";
import { MOMENT_TYPE } from "../../../../types";
import { cellWidth } from "../utils";

const CalendarMonthCell = ({ date, events, isInRange }) => {
  const eventsForCell = get(events, date.format("YYYY-MM-DD"), []);

  return (
    <div className={styles.cell} style={cellWidth}>
      <h2>{date.date()}</h2>
      {eventsForCell.length > 0 &&
        eventsForCell.map(event => (
          <CalendarEvent event={event} key={event.id} />
        ))}
    </div>
  );
};

CalendarMonthCell.propTypes = {
  date: MOMENT_TYPE.isRequired,
  events: PropTypes.object.isRequired,
  isInRange: PropTypes.bool.isRequired
};

export default CalendarMonthCell;
