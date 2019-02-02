import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import { getDayNames, cellWidth } from "../../../utils";

const CalendarWeekView = ({ eventOverlap, selectedDate, firstDay }) => {
  const dayNames = getDayNames({ firstDay });

  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>C</div>
      {dayNames.map(dayName => {
        return (
          <div
            className={styles.column}
            key={`weekView${dayName}`}
            style={cellWidth}
          >
            <h2 className={styles["day-header"]}>{dayName}</h2>
          </div>
        );
      })}
    </div>
  );
};

CalendarWeekView.defaultProps = {
  eventOverlap: false
};

CalendarWeekView.propTypes = {
  eventOverlap: PropTypes.bool
};

export default CalendarWeekView;
