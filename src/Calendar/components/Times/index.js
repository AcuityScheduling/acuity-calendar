import React from "react";
import PropTypes from "prop-types";
import TimeColumn from "./components/TimeColumn";
import Corner from "./components/Corner";
import StepLines from "./components/StepLines";
import CurrentTimeIndicator from "./components/CurrentTimeIndicator";
import { STEP_HEIGHTS } from "./constants";
import { useCalendarSticky, useCurrentTime } from "./utils";
import {
  CALENDAR_VIEW_TYPE,
  MOMENT_TYPE,
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  CALENDAR_TYPE
} from "../../types";
import { makeClass } from "../../utils";
import "./index.scss";

const Times = ({
  view,
  selectedDate,
  calendars,
  selectedCalendars,
  firstDay,
  events,
  stepMinutes,
  onSelectEvent,
  onSelectSlot,
  selectMinutes,
  renderHeader,
  renderColumns
}) => {
  const {
    wrapperRef,
    timeColumnRef,
    headerRef,
    cornerRef,
    timeIndicatorRef
  } = useCalendarSticky();
  const currentTime = useCurrentTime();

  const totalStepsPerBlock = 60 / stepMinutes;

  return (
    <div className={makeClass("times")} ref={wrapperRef}>
      <Corner ref={cornerRef} />
      <CurrentTimeIndicator
        ref={timeIndicatorRef}
        stepMinutes={stepMinutes}
        currentTime={currentTime}
      />
      <TimeColumn
        blockHeight={totalStepsPerBlock * STEP_HEIGHTS[stepMinutes]}
        ref={timeColumnRef}
      />
      <StepLines
        totalStepsPerBlock={totalStepsPerBlock}
        stepMinutes={stepMinutes}
      />

      <div className={makeClass("times__header")} ref={headerRef}>
        {renderHeader()}
      </div>
      <div className={makeClass("times__columns")}>
        {renderColumns({ currentTime })}
      </div>
    </div>
  );
};

Times.defaultProps = {
  eventOverlap: false
};

Times.propTypes = {
  view: CALENDAR_VIEW_TYPE.isRequired,
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  calendars: PropTypes.arrayOf(CALENDAR_TYPE).isRequired,
  selectedCalendars: PropTypes.arrayOf(PropTypes.number).isRequired,
  renderHeader: PropTypes.func.isRequired,
  renderColumns: PropTypes.func.isRequired
};

export default Times;
