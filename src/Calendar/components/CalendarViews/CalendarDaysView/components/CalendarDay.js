import React from "react";
import moment from "moment";
import styles from "./CalendarDay.module.css";

const CalendarDay = ({ date }) => {
  const renderTimeBlocks = () => {
    const times = [];
    for (let i = 0; i < 24; i += 1) {
      times.push(
        <div className={styles.time_block} key={`timeBlock${i}${date.date()}`}>
          {moment()
            .hour(i)
            .format("ha")}
        </div>
      );
    }
    return times;
  };

  return (
    <div
      className={styles.column}
      key={`weekView${date.day()}`}
      style={{
        minWidth: `${100 / 7}%`
      }}
    >
      {renderTimeBlocks()}
    </div>
  );
};

export default CalendarDay;
