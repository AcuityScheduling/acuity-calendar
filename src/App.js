import React, { useState } from "react";
import Calendar from "./Calendar";
import { CALENDAR_VIEWS } from "./Calendar/constants";

const events = [
  {
    start: new Date(),
    end: new Date(),
    allDay: false,
    title: "My awesome new event"
  }
];

const App = () => {
  const { week } = CALENDAR_VIEWS;
  const [view, setView] = useState(week);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Calendar
      events={events}
      view={view}
      onViewChange={setView}
      selectedDate={selectedDate}
      onNavigate={setSelectedDate}
      onSelectEvent={event => {
        console.log(`Selected ${event.title}`);
      }}
      onSelecting={({ start, end }) =>
        console.log(`Selecting ${start} - ${end}`)
      }
      // A callback fired when a date selection is made
      onSelectSlot={start =>
        console.log(`Selected a slot for creating event at ${start}`)
      }
    />
  );
};

export default App;
