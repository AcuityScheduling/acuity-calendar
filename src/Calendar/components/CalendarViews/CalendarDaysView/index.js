import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import CalendarTimeColumn from "./components/CalendarTimeColumn";
import CalendarDayColumns from "./components/CalendarDayColumns";
import CalendarCorner from "./components/CalendarCorner";
import CalendarDay from "./components/CalendarDay";
import CalendarStepLines from "./components/CalendarStepLines";
import { STEP_HEIGHTS } from "./constants";
import { getOnScroll } from "./utils";
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
  stepMinutes,
  onSelectEvent,
  onSelectSlot,
  selectMinutes
}) => {
  const wrapperEl = useRef(null);
  const timeColumnRef = useRef(null);
  const daysHeaderRef = useRef(null);
  const cornerRef = useRef(null);

  const onScroll = getOnScroll({ daysHeaderRef, timeColumnRef, cornerRef });

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
      <div className={styles.current_time_indicator} />
      <CalendarTimeColumn
        blockHeight={totalStepsPerBlock * STEP_HEIGHTS[stepMinutes]}
        ref={timeColumnRef}
      />
      <CalendarStepLines
        totalStepsPerBlock={totalStepsPerBlock}
        stepMinutes={stepMinutes}
      />
      <CalendarDayColumns
        selectedDate={selectedDate}
        firstDay={firstDay}
        ref={daysHeaderRef}
        view={view}
        events={events}
        renderCalendarDays={({ date, eventsForDay }) => (
          <CalendarDay
            events={eventsForDay}
            date={date}
            key={`timeBlocks${date.date()}`}
            totalStepsPerBlock={totalStepsPerBlock}
            stepMinutes={stepMinutes}
            selectMinutes={selectMinutes}
            onSelectEvent={onSelectEvent}
            onSelectSlot={onSelectSlot}
          />
        )}
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
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired
};

export default CalendarDaysView;
