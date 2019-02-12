import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { makeClass } from "../../../utils";
import { STEP_MINUTES_TYPE, MOMENT_TYPE } from "../../../types";
import { getTopOffset } from "../utils";
import "./CalendarCurrentTimeIndicator.scss";

const block = makeClass("days__current-time-indicator");

const CalendarCurrentTimeIndicator = React.forwardRef(
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

CalendarCurrentTimeIndicator.defaultProps = {
  isToday: false
};

CalendarCurrentTimeIndicator.propTypes = {
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  currentTime: MOMENT_TYPE.isRequired,
  isToday: PropTypes.bool
};

export default CalendarCurrentTimeIndicator;
