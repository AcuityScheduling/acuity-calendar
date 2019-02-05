import React, { Fragment } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { getWeekList } from "../utils";
import styles from "./CalendarDayColumns.module.css";
import CalendarDay from "./CalendarDay";
import {
  MOMENT_TYPE,
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE
} from "../../../../types";

const CalendarDayColumns = React.forwardRef(
  (
    {
      selectedDate,
      firstDay,
      view,
      events,
      onSelectEvent,
      totalStepsPerBlock,
      stepMinutes,
      onSelectSlot
    },
    ref
  ) => {
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
            const eventsForDay = get(events, date.format("YYYY-MM-DD"), []);
            return (
              <CalendarDay
                events={eventsForDay}
                date={date}
                key={`timeBlocks${date.date()}`}
                totalStepsPerBlock={totalStepsPerBlock}
                stepMinutes={stepMinutes}
                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectSlot}
              />
            );
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
  firstDay: FIRST_DAY_TYPE.isRequired,
  totalStepsPerBlock: PropTypes.number.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired
};

export default CalendarDayColumns;
