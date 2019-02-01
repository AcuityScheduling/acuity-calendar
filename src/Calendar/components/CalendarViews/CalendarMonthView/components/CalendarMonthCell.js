import React from "react";
import styles from "./CalendarMonthCell.module.css";
import CalendarEvent from "../../../CalendarEvent";

const style = {
  width: `${100 / 7}%`
};

const CalendarMonthCell = ({ date, events }) => {
  return (
    <div className={styles.cell} style={style}>
      <h2>{date}</h2>
      {events.length > 0 &&
        events.map(event => <CalendarEvent event={event} />)}
    </div>
  );
};

export default CalendarMonthCell;
