import React from "react";
import PropTypes from "prop-types";
import styles from "./CalendarMonthCell.module.css";
import CalendarEvent from "../../../CalendarEvent";
import { EVENT_TYPE } from "../../../../types";
import { cellWidth } from "../utils";

const CalendarMonthCell = ({ date, events }) => {
  return (
    <div className={styles.cell} style={cellWidth}>
      <h2>{date}</h2>
      {events.length > 0 &&
        events.map(event => <CalendarEvent event={event} />)}
    </div>
  );
};

CalendarMonthCell.propTypes = {
  date: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(EVENT_TYPE).isRequired
};

export default CalendarMonthCell;
