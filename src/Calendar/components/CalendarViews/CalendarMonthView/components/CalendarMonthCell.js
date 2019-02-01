import React from "react";
import CalendarEvent from "../../../CalendarEvent";

const CalendarMonthCell = ({ date, events }) => {
  return (
    <div>
      <h2>{date}</h2>
      {events.length > 0 &&
        events.map(event => <CalendarEvent event={event} />)}
    </div>
  );
};

export default CalendarMonthCell;
