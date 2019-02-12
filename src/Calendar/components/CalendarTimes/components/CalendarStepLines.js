import React from "react";
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from "../constants";
import { makeClass } from "../../../utils";
import "./CalendarStepLines.scss";

const CalendarStepLines = ({ totalStepsPerBlock, stepMinutes }) => {
  const extraBorderHeight = STEP_BORDER_WIDTH / totalStepsPerBlock;
  const stepHeight = STEP_HEIGHTS[stepMinutes];
  const stepHeightWithBorder = `${stepHeight + extraBorderHeight}px`;

  const times = [];
  for (let i = 0; i < 24 * totalStepsPerBlock; i += 1) {
    times.push(
      <div
        className={makeClass("times__step-line")}
        key={`timeBlock${i}`}
        style={{
          height: stepHeightWithBorder
        }}
        role="button"
      />
    );
  }

  return <div className={makeClass("times__step-lines")}>{times}</div>;
};

export default CalendarStepLines;
