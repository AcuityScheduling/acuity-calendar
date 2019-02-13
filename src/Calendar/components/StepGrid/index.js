import React from "react";
import PropTypes from "prop-types";
import TimeColumn from "./components/TimeColumn";
import Corner from "./components/Corner";
import StepLines from "./components/StepLines";
import CurrentTimeIndicator from "./components/CurrentTimeIndicator";
import { STEP_HEIGHTS } from "./constants";
import { useCalendarSticky, useCurrentTime } from "./utils";
import { MOMENT_TYPE, FIRST_DAY_TYPE, STEP_MINUTES_TYPE } from "../../types";
import { makeClass } from "../../utils";
import "./index.scss";

const StepGrid = ({
  selectedDate,
  firstDay,
  stepMinutes,
  onSelectEvent,
  onSelectSlot,
  selectMinutes,
  renderHeader,
  renderColumns,
  renderCorner
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
    <div className={makeClass("step-grid")} ref={wrapperRef}>
      <Corner
        currentTime={currentTime}
        renderCorner={renderCorner}
        ref={cornerRef}
      />
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

      <div className={makeClass("step-grid__header")} ref={headerRef}>
        {renderHeader()}
      </div>
      <div className={makeClass("step-grid__columns")}>
        {renderColumns({ currentTime })}
      </div>
    </div>
  );
};

StepGrid.defaultProps = {
  eventOverlap: false,
  renderCorner: null
};

StepGrid.propTypes = {
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  renderHeader: PropTypes.func.isRequired,
  renderColumns: PropTypes.func.isRequired,
  renderCorner: PropTypes.func
};

export default StepGrid;
