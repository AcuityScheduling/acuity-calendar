import React, { useRef, useEffect } from "react";
import CalendarTimeColumn from "./components/CalendarTimeColumn";
import CalendarDayColumns from "./components/CalendarDayColumns";
import CalendarCorner from "./components/CalendarCorner";
import { STEP_HEIGHTS } from "./constants";
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

  let latestKnownScrollY = 0;
  let latestKnownScrollX = 0;
  let ticking = false;

  const update = () => {
    // reset the tick so we can
    // capture the next onScroll
    ticking = false;

    daysHeaderRef.current.style.transform = `translateY(${latestKnownScrollY}px)`;
    timeRef.current.style.transform = `translateX(${latestKnownScrollX}px)`;
    cornerRef.current.style.left = `${latestKnownScrollX}px`;
    cornerRef.current.style.transform = `translateY(${latestKnownScrollY}px)`;
  };

  const onScroll = e => {
    latestKnownScrollY = e.target.scrollTop;
    latestKnownScrollX = e.target.scrollLeft;
    requestTick();
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  };

  useEffect(() => {
    wrapperEl.current.addEventListener("scroll", onScroll, false);
    return () => {
      wrapperEl.current.removeEventListener("scroll", onScroll, false);
    };
  });

  const totalStepsPerBlock = 60 / stepMinutes;

  return (
    <div className={styles.wrapper} ref={wrapperEl}>
      <CalendarCorner ref={cornerRef} />
      <CalendarTimeColumn
        blockHeight={totalStepsPerBlock * STEP_HEIGHTS[stepMinutes]}
        ref={timeRef}
      />
      <CalendarDayColumns
        selectedDate={selectedDate}
        firstDay={firstDay}
        ref={daysHeaderRef}
        view={view}
        events={events}
        totalStepsPerBlock={totalStepsPerBlock}
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
