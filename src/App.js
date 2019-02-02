import React, { useState } from "react";
import moment from "moment";
import Calendar from "./Calendar";
import { CALENDAR_VIEWS } from "./Calendar/constants";
import { eventsMocked } from "./Calendar/utils";

const App = () => {
  const { week } = CALENDAR_VIEWS;
  const [view, setView] = useState(week);
  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <Calendar
      events={eventsMocked}
      view={view}
      onViewChange={setView}
      selectedDate={selectedDate}
      onNavigate={setSelectedDate}
      firstDay={0}
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
