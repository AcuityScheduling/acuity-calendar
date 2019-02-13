import React from "react";
import moment from "moment";
import { STEP_BORDER_WIDTH } from "../constants";
import { makeClass } from "../../../utils";
import "./TimeColumn.scss";

const TimeColumn = React.forwardRef(({ blockHeight }, ref) => {
  const renderTimes = () => {
    const times = [];
    for (let i = 0; i < 24; i += 1) {
      times.push(
        <div
          className={makeClass("step-grid__time-label")}
          key={`dayTime${i}`}
          style={{
            height: `${blockHeight + STEP_BORDER_WIDTH}px`
          }}
        >
          {moment()
            .hour(i)
            .format("ha")}
        </div>
      );
    }
    return times;
  };

  return (
    <div className={makeClass("step-grid__time-column")} ref={ref}>
      {renderTimes()}
    </div>
  );
});

export default TimeColumn;
