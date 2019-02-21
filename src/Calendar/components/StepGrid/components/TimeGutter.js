import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { STEP_BORDER_WIDTH, TIME_GUTTER_WIDTH } from "../constants";
import { makeClass } from "../../../utils";
import "./TimeGutter.scss";

const TimeGutter = React.forwardRef(({ blockHeight, width }, ref) => {
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
    <div
      className={makeClass("step-grid__time-gutter")}
      style={{ width }}
      ref={ref}
    >
      {renderTimes()}
    </div>
  );
});

TimeGutter.defaultProps = {
  width: TIME_GUTTER_WIDTH
};

TimeGutter.propTypes = {
  blockHeight: PropTypes.number.isRequired,
  width: PropTypes.number
};

export default TimeGutter;
