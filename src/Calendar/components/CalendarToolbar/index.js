import React from "react";
import PropTypes from "prop-types";
import { getRangeTitle, getNavigateDate } from "../../utils";
import { CALENDAR_VIEWS } from "../../constants";
import { CALENDAR_VIEW_TYPE, MOMENT_TYPE } from "../../types";

const { month, week, day } = CALENDAR_VIEWS;

const CalendarToolbar = ({ view, onViewChange, selectedDate, onNavigate }) => {
  const prevDate = getNavigateDate({
    view,
    direction: -1,
    currentDate: selectedDate
  });

  const nextDate = getNavigateDate({
    view,
    direction: 1,
    currentDate: selectedDate
  });

  return (
    <div>
      <h1>{getRangeTitle({ date: selectedDate, view })}</h1>
      <div>
        <button type="button" onClick={() => onViewChange(month)}>
          Month
        </button>
        <button type="button" onClick={() => onViewChange(week)}>
          Week
        </button>
        <button type="button" onClick={() => onViewChange(day)}>
          Day
        </button>
      </div>
      <div>
        <button type="button" onClick={() => onNavigate(prevDate)}>
          Back
        </button>
        <button type="button" onClick={() => onNavigate(nextDate)}>
          Next
        </button>
      </div>
    </div>
  );
};

CalendarToolbar.propTypes = {
  view: CALENDAR_VIEW_TYPE.isRequired,
  onViewChange: PropTypes.func.isRequired,
  selectedDate: MOMENT_TYPE.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default CalendarToolbar;
