import React from "react";
import PropTypes from "prop-types";
import TimeGutter from "./components/TimeGutter";
import StepLines from "./components/StepLines";
import CurrentTimeIndicator from "./components/CurrentTimeIndicator";
import {
  STEP_HEIGHTS,
  TIME_GUTTER_WIDTH,
  STEP_BORDER_WIDTH
} from "./constants";
import { useCalendarSticky, useCurrentTime, getScrollbarWidth } from "./utils";
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
  timeGutterWidth,
  renderHeader,
  renderColumns,
  renderCorner
}) => {
  const {
    wrapperRef,
    timeColumnRef,
    headerRef,
    cornerRef,
    timeIndicatorRef,
    stepLinesRef
  } = useCalendarSticky();
  const currentTime = useCurrentTime();

  const totalStepsPerBlock = 60 / stepMinutes;
  const scrollbarWidth = getScrollbarWidth();

  return (
    <div className={makeClass("step-grid__wrapper")}>
      <div className={makeClass("step-grid__header-wrapper")}>
        <div
          className={makeClass("step-grid__corner")}
          style={{ width: `${timeGutterWidth}px` }}
          ref={cornerRef}
        >
          {renderCorner && renderCorner({ currentTime })}
        </div>
        <div
          style={{
            width: "100%"
          }}
          className={makeClass("step-grid__header")}
          ref={headerRef}
        >
          {renderHeader()}
        </div>
        <div
          className={makeClass("step-grid__header-scroll-gutter-padding")}
          style={{
            width: `${scrollbarWidth}px`
          }}
        />
        <div
          className={makeClass("step-grid__header-scroll-gutter")}
          style={{ width: `${scrollbarWidth - STEP_BORDER_WIDTH}px` }}
        >
          <div
            className={makeClass("step-grid__header-scroll-gutter-connector")}
          />
        </div>
      </div>
      <div className={makeClass("step-grid")} ref={wrapperRef}>
        <StepLines
          ref={stepLinesRef}
          totalStepsPerBlock={totalStepsPerBlock}
          stepMinutes={stepMinutes}
        />

        <div className={makeClass("step-grid__column-wrapper")}>
          <TimeGutter
            blockHeight={totalStepsPerBlock * STEP_HEIGHTS[stepMinutes]}
            ref={timeColumnRef}
            width={timeGutterWidth}
          />
          <div className={makeClass("step-grid__columns")}>
            <CurrentTimeIndicator
              ref={timeIndicatorRef}
              stepMinutes={stepMinutes}
              currentTime={currentTime}
            />
            {renderColumns({ currentTime })}
          </div>
        </div>
      </div>
    </div>
  );
};

StepGrid.defaultProps = {
  eventOverlap: false,
  renderCorner: null,
  timeGutterWidth: TIME_GUTTER_WIDTH
};

StepGrid.propTypes = {
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  timeGutterWidth: PropTypes.number,
  renderHeader: PropTypes.func.isRequired,
  renderColumns: PropTypes.func.isRequired,
  renderCorner: PropTypes.func
};

export default StepGrid;
