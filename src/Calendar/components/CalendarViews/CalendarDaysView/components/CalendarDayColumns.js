import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { getWeekList } from "../utils";
import styles from "./CalendarDayColumns.module.css";
import CalendarDay from "./CalendarDay";
import { MOMENT_TYPE, FIRST_DAY_TYPE } from "../../../../types";

const CalendarDayColumns = React.forwardRef(
  ({ selectedDate, firstDay, view }, ref) => {
    let dateList = [selectedDate];
    if (view === "week") {
      dateList = getWeekList({ date: selectedDate, firstDay });
    }
    return (
      <Fragment>
        <div className={styles.header} ref={ref}>
          {dateList.map(date => {
            return (
              <h2
                key={`dayHeader${date.date()}`}
                style={{
                  minWidth: `${100 / 7}%`
                }}
              >
                {date.format("dddd, MMM D")}
              </h2>
            );
          })}
        </div>
        <div className={styles.day_wrapper}>
          {dateList.map(date => {
            return <CalendarDay date={date} key={`timeBlocks${date.date()}`} />;
          })}
        </div>
      </Fragment>
    );
  }
);

CalendarDayColumns.displayName = "CalendarDayColumns";

CalendarDayColumns.defaultProps = {
  view: "day"
};

CalendarDayColumns.propTypes = {
  type: PropTypes.oneOf(["week", "day"]),
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired
};

export default CalendarDayColumns;
