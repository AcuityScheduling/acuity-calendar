import React, { Fragment } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { getWeekList, getTodayColumnStyles } from "../utils";
import {
  MOMENT_TYPE,
  FIRST_DAY_TYPE,
  CALENDAR_VIEW_TYPE
} from "../../../types";
import makeClass from "../../../utils/makeClass";

const CalendarDayColumns = React.forwardRef(
  ({ renderCalendarDays, selectedDate, firstDay, view, events }, ref) => {
    let dateList = [selectedDate];
    if (view === "week") {
      dateList = getWeekList({ date: selectedDate, firstDay });
    }
    return (
      <Fragment>
        <div className={makeClass("days__header")} ref={ref}>
          {dateList.map(date => {
            return (
              <h2
                key={`dayHeader${date.date()}`}
                style={{
                  minWidth: `${100 / 7}%`,
                  ...getTodayColumnStyles(date)
                }}
              >
                {date.format("dddd, MMM D")}
              </h2>
            );
          })}
        </div>
        <div className={makeClass("days__columns")}>
          {dateList.map(date => {
            const eventsForDay = get(events, date.format("YYYY-MM-DD"), {});
            return renderCalendarDays({ date, eventsForDay });
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
  events: PropTypes.object.isRequired,
  view: CALENDAR_VIEW_TYPE.isRequired,
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  renderCalendarDays: PropTypes.func.isRequired
};

export default CalendarDayColumns;
