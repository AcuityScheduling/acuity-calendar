import React from "react";
import styles from "./CalendarDay.module.css";

const CalendarDay = ({ date }) => (
  <div
    className={styles.column}
    key={`weekView${date.day()}`}
    style={{
      minWidth: `${100 / 7}%`,
      width: "200px"
    }}
  >
    <h2 className={styles.header}>{date.format("dddd, MMM D")}</h2>
  </div>
);

export default CalendarDay;
