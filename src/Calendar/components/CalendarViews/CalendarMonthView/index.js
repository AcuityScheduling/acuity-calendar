import React from "react";
import { getMonthGrid } from "./utils";
import CalendarMonthCell from "./components/CalendarMonthCell";

const CalendarMonthView = ({ selectedDate }) => {
  const monthGrid = getMonthGrid({ date: selectedDate });

  return monthGrid.map(column => {
    return column.map(day => {
      return <CalendarMonthCell date={day} events={[]} />;
    });
  });
};

export default CalendarMonthView;
