import React, { useState } from "react";
import moment from "moment";
import Calendar from "./Calendar";
import { CALENDAR_VIEWS } from "./Calendar/constants";
import { eventsMocked, calendarsMocked } from "./Calendar/utils";

const App = () => {
  const { week } = CALENDAR_VIEWS;
  const [view, setView] = useState(week);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedCalendars, setSelectedCalendars] = useState([]);

  const stepMinutes = 30;

  return (
    <Calendar
      events={eventsMocked}
      view={view}
      calendars={calendarsMocked}
      selectedCalendars={selectedCalendars}
      setSelectedCalendars={setSelectedCalendars}
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
      onSelectSlot={start => console.log(start.toDate())}
      stepMinutes={stepMinutes}
      // What range of minutes is selectable - for new events
      // and for drag and drop
      selectMinutes={15}
    />
  );
};

export default App;
