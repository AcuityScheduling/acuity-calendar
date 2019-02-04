import React from "react";
import moment from "moment";
import styles from "./CalendarTimeColumn.module.css";

const CalendarTimeColumn = React.forwardRef((props, ref) => {
  const renderTimes = () => {
    const times = [];
    for (let i = 0; i < 24; i += 1) {
      times.push(
        <div className={styles.hour_label} key={`dayTime${i}`}>
          {moment()
            .hour(i)
            .format("ha")}
        </div>
      );
    }
    return times;
  };

  return (
    <div className={styles.column} ref={ref}>
      <div className={styles.corner}>
        <h2>C</h2>
      </div>
      <div>{renderTimes()}</div>
    </div>
  );
});

export default CalendarTimeColumn;
