import React from "react";
import PropTypes from "prop-types";
import styles from "./CalendarCurrentTimeIndicator.module.css";
import moment from "moment";
import { getTopOffset } from "../../../../utils";
import { STEP_MINUTES_TYPE, MOMENT_TYPE } from "../../../../types";

const CalendarCurrentTimeIndicator = React.forwardRef(
  ({ stepMinutes, currentTime, isToday }, ref) => {
    if (!isToday) {
      return (
        <div
          className={`${styles.wrapper} ${styles.full}`}
          style={{
            top: `${getTopOffset({ stepMinutes, date: currentTime }) + 70}px`
          }}
          ref={ref}
        >
          <span className={styles.time}>{moment().format("h:mma")}</span>
          <div className={styles.line} />
        </div>
      );
    }

    return (
      <div
        className={styles.wrapper}
        style={{
          top: `${getTopOffset({ stepMinutes, date: currentTime })}px`
        }}
      >
        <div className={styles.line_today} />
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
