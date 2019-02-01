import React from "react";
import { getRangeTitle, getNavigateDate } from "../../utils";
import { CALENDAR_VIEWS } from "../../constants";

const { month, week, day } = CALENDAR_VIEWS;

const CalendarToolbar = ({ selectedDate, onNavigate, view, onViewChange }) => {
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

export default CalendarToolbar;
