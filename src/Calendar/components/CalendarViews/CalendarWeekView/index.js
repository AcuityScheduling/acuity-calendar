import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styles from "./index.module.css";
// import useElementScroll from "../../useElementScroll";
import { getDayNames } from "../../../utils";

const CalendarWeekView = ({ eventOverlap, selectedDate, firstDay }) => {
  const dayNames = getDayNames({ firstDay });
  const wrapperEl = useRef(null);
  const timesEl = useRef(null);
  const daysHeaderEl = useRef(null);

  const adjustPositions = e => {
    timesEl.current.style.left = `${e.target.scrollLeft}px`;
    daysHeaderEl.current.style.top = `${e.target.scrollTop}px`;
  };

  useEffect(() => {
    wrapperEl.current.addEventListener("scroll", adjustPositions);
    return () => {
      wrapperEl.current.removeEventListener("scroll", adjustPositions);
    };
  });

  const renderTimes = () => {
    const times = [];
    for (let i = 0; i < 24; i += 1) {
      times.push(
        <div className={styles.time} key={`dayTime${i}`}>
          {moment()
            .hour(i)
            .format("ha")}
        </div>
      );
    }
    return times;
  };

  return (
    <div className={styles.wrapper} ref={wrapperEl}>
      <div className={`${styles.column} ${styles.times_column}`} ref={timesEl}>
        <div className={styles.times}>{renderTimes()}</div>
      </div>
      <div className={styles.days_wrapper} ref={daysHeaderEl}>
        <div className={styles.corner}>
          <h2>C</h2>
        </div>
        {dayNames.map(dayName => {
          return (
            <div
              className={styles.column}
              key={`weekView${dayName}`}
              style={{
                minWidth: `${100 / 7}%`,
                width: "200px"
              }}
            >
              <h2 className={styles.header}>{dayName}</h2>
            </div>
          );
        })}
      </div>
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
