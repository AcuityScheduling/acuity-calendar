import React, { useRef, useEffect } from "react";
import CalendarTimeColumn from "./components/CalendarTimeColumn";
import CalendarDayColumns from "./components/CalendarDayColumns";
import CalendarCorner from "./components/CalendarCorner";
import { getStepHeight } from "./utils";
import styles from "./index.module.css";
import {
  CALENDAR_VIEW_TYPE,
  MOMENT_TYPE,
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE
} from "../../../types";

const CalendarDaysView = ({
  view,
  selectedDate,
  firstDay,
  events,
  stepMinutes
}) => {
  const wrapperEl = useRef(null);
  const timeRef = useRef(null);
  const daysHeaderRef = useRef(null);
  const cornerRef = useRef(null);

  const makePositionsSticky = e => {
    timeRef.current.style.left = `${e.target.scrollLeft}px`;
    daysHeaderRef.current.style.top = `${e.target.scrollTop}px`;

    cornerRef.current.style.left = `${e.target.scrollLeft}px`;
    cornerRef.current.style.top = `${e.target.scrollTop}px`;
  };

  useEffect(() => {
    wrapperEl.current.addEventListener("scroll", makePositionsSticky);
    return () => {
      wrapperEl.current.removeEventListener("scroll", makePositionsSticky);
    };
  });

  const stepHeight = getStepHeight(stepMinutes);
  const totalStepsPerBlock = 60 / stepMinutes;

  return (
    <div className={styles.wrapper} ref={wrapperEl}>
      <CalendarCorner ref={cornerRef} />
      <CalendarTimeColumn
        blockHeight={totalStepsPerBlock * stepHeight}
        ref={timeRef}
      />
      <CalendarDayColumns
        selectedDate={selectedDate}
        firstDay={firstDay}
        ref={daysHeaderRef}
        view={view}
        events={events}
        totalStepsPerBlock={totalStepsPerBlock}
        stepHeight={stepHeight}
        stepMinutes={stepMinutes}
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
  firstDay: FIRST_DAY_TYPE.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired
};

export default CalendarDaysView;
