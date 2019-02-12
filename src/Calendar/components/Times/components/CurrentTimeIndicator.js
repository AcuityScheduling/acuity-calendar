import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { makeClass } from "../../../utils";
import { STEP_MINUTES_TYPE, MOMENT_TYPE } from "../../../types";
import { getTopOffset } from "../utils";
import "./CurrentTimeIndicator.scss";

const block = makeClass("times__current-time-indicator");

const CurrentTimeIndicator = React.forwardRef(
  ({ stepMinutes, currentTime, isToday }, ref) => {
    if (!isToday) {
      return (
        <div
          className={block}
          style={{
            top: `${getTopOffset({ stepMinutes, date: currentTime }) + 70}px`
          }}
          ref={ref}
        >
          <span className={`${block}__time`}>{moment().format("h:mma")}</span>
          <div className={`${block}__line`} />
        </div>
      );
    }

    return (
      <div
        className={block}
        style={{
          top: `${getTopOffset({ stepMinutes, date: currentTime })}px`
        }}
      >
        <div className={`${block}__line-today`} />
      </div>
    );
  }
);

CurrentTimeIndicator.defaultProps = {
  isToday: false
};

CurrentTimeIndicator.propTypes = {
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  currentTime: MOMENT_TYPE.isRequired,
  isToday: PropTypes.bool
};

export default CurrentTimeIndicator;
