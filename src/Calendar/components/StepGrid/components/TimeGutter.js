import React from "react";
import moment from "moment";
import { STEP_BORDER_WIDTH } from "../constants";
import { makeClass } from "../../../utils";
import "./TimeGutter.scss";

const TimeGutter = React.forwardRef(({ blockHeight }, ref) => {
  const renderTimes = () => {
    const times = [];
    for (let i = 0; i < 24; i += 1) {
      times.push(
        <div
          className={makeClass("step-grid__time-label-wrapper")}
          key={`dayTime${i}`}
          style={{
            height: `${blockHeight + STEP_BORDER_WIDTH}px`
          }}
        >
          <span
            className={makeClass(
              "step-grid__time-label",
              `step-grid__time-label-${i}`
            )}
          >
            {moment()
              .hour(i)
              .format("ha")}
          </span>
        </div>
      );
    }
    return times;
  };

  return (
    <div className={makeClass("step-grid__time-gutter")} ref={ref}>
      {renderTimes()}
    </div>
  );
});

export default TimeGutter;
