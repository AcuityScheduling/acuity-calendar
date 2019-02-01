import React from "react";
import { getRangeTitle } from "../../utils";
import { CALENDAR_VIEWS } from "../../constants";

const CalendarToolbar = ({
  selectedDate,
  setSelectedDate,
  currentView,
  setCurrentView
}) => {
  const { month, week, day } = CALENDAR_VIEWS;

  return (
    <div>
      <h1>{getRangeTitle({ date: selectedDate, view: currentView })}</h1>
      <div>
        <button type="button" onClick={() => setCurrentView(month)}>
          Month
        </button>
        <button type="button" onClick={() => setCurrentView(week)}>
          Week
        </button>
        <button type="button" onClick={() => setCurrentView(day)}>
          Day
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setSelectedDate()}>
          Back
        </button>
        <button type="button" onClick={() => setSelectedDate()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CalendarToolbar;
