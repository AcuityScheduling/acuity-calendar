import React from "react";
import { CALENDAR_VIEWS } from "../../constants";

const CalendarToolbar = ({ setSelectedDate, setCurrentView, currentView }) => {
  const { month, week, day } = CALENDAR_VIEWS;

  return (
    <div>
      <h1>Toolbar</h1>
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
  );
};

export default CalendarToolbar;
