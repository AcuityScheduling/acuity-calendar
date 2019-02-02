import React from "react";
import PropTypes from "prop-types";
import styles from "./CalendarMonthCell.module.css";
import CalendarEvent from "../../../CalendarEvent";
import { EVENT_TYPE, MOMENT_TYPE } from "../../../../types";
import { cellWidth } from "../utils";

const CalendarMonthCell = ({ date, events, isInRange }) => {
  const eventsForCell = events.reduce((accumulator, event) => {
    if (event.start.isSame(date, "day") || event.end.isSame(date, "day")) {
      return [...accumulator, event];
    }
    return accumulator;
  }, []);

  return (
    <div className={styles.cell} style={cellWidth}>
      <h2>{date.date()}</h2>
      {eventsForCell.length > 0 &&
        events.map(event => <CalendarEvent event={event} />)}
    </div>
  );
};

CalendarMonthCell.propTypes = {
  date: MOMENT_TYPE.isRequired,
  events: PropTypes.arrayOf(EVENT_TYPE).isRequired,
  isInRange: PropTypes.bool.isRequired
};

export default CalendarMonthCell;
