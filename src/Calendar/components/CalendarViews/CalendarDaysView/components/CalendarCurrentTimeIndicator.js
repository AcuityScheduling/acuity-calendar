import React, { useState, useEffect } from "react";
import styles from "./CalendarCurrentTimeIndicator.module.css";
import moment from "moment";
import { getTopOffset } from "../../../../utils";

const CalendarCurrentTimeIndicator = ({ stepMinutes }) => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const timeout = setTimeout(() => setCurrentTime(moment()), 1000 * 60);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div
      className={styles.wrapper}
      style={{
        top: `${getTopOffset({ stepMinutes, date: currentTime }) + 70}px`
      }}
    >
      <span className={styles.time}>{moment().format("h:mma")}</span>
      <div className={styles.line} />
    </div>
  );
};

export default CalendarCurrentTimeIndicator;
