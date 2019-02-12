import React from "react";
import PropTypes from "prop-types";
import CalendarTimeColumn from "./components/CalendarTimeColumn";
import CalendarCorner from "./components/CalendarCorner";
import CalendarStepLines from "./components/CalendarStepLines";
import CalendarCurrentTimeIndicator from "./components/CalendarCurrentTimeIndicator";
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

const CalendarTimes = ({
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
      <CalendarCorner ref={cornerRef} />
      <CalendarCurrentTimeIndicator
        ref={timeIndicatorRef}
        stepMinutes={stepMinutes}
        currentTime={currentTime}
      />
      <CalendarTimeColumn
        blockHeight={totalStepsPerBlock * STEP_HEIGHTS[stepMinutes]}
        ref={timeColumnRef}
      />
      <CalendarStepLines
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

CalendarTimes.defaultProps = {
  eventOverlap: false
};

CalendarTimes.propTypes = {
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

export default CalendarTimes;
