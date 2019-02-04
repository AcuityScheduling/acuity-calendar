import React from "react";
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
      <div className={styles.days_wrapper} ref={ref}>
        {dateList.map(dayDate => {
          return <CalendarDay date={dayDate} />;
        })}
      </div>
    );
  }
);

CalendarDayColumns.defaultProps = {
  view: "day"
};

CalendarDayColumns.propTypes = {
  type: PropTypes.oneOf(["week", "day"]),
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired
};

export default CalendarDayColumns;
