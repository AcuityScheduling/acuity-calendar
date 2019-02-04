import React, { useRef, useEffect } from "react";
import CalendarTimeColumn from "./components/CalendarTimeColumn";
import CalendarDayColumns from "./components/CalendarDayColumns";
import styles from "./index.module.css";
import {
  CALENDAR_VIEW_TYPE,
  MOMENT_TYPE,
  FIRST_DAY_TYPE
} from "../../../types";

const CalendarDaysView = ({ view, selectedDate, firstDay }) => {
  const wrapperEl = useRef(null);
  const timeRef = useRef(null);
  const daysHeaderRef = useRef(null);

  const adjustPositions = e => {
    timeRef.current.style.left = `${e.target.scrollLeft}px`;
    daysHeaderRef.current.style.top = `${e.target.scrollTop}px`;
  };

  useEffect(() => {
    wrapperEl.current.addEventListener("scroll", adjustPositions);
    return () => {
      wrapperEl.current.removeEventListener("scroll", adjustPositions);
    };
  });

  return (
    <div className={styles.wrapper} ref={wrapperEl}>
      <CalendarTimeColumn ref={timeRef} />
      <CalendarDayColumns
        selectedDate={selectedDate}
        firstDay={firstDay}
        ref={daysHeaderRef}
        view={view}
      />
    </div>
  );
};

CalendarDaysView.defaultProps = {
  eventOverlap: false
};

CalendarDaysView.propTypes = {
  view: CALENDAR_VIEW_TYPE.isRequired,
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired
};

export default CalendarDaysView;
