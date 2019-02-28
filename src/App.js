import React, { useState } from 'react';
import Calendar from './Calendar';
import Toolbar from './Toolbar';
import { CALENDAR_VIEWS } from './Calendar/constants';
import {
  MOCKED_EVENTS,
  MOCKED_CALENDARS,
  MOCKED_STEP_DETAILS,
} from './Calendar/mocks';
import EventGroupSelect from './EventGroupSelect';

const App = () => {
  const [view, setView] = useState(CALENDAR_VIEWS.week);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCalendars, setSelectedCalendars] = useState([5, 6]);
  // const [alteredEvents, setAlteredEvents] = useState(MOCKED_EVENTS);

  const firstDay = 0;

  // const updateEvent = event => {
  //   // Find the event key we're going to replace
  //   let alteredEventKey = false;
  //   alteredEvents.some((alteredEvent, index) => {
  //     if (alteredEvent.id === event.id) {
  //       alteredEventKey = index;
  //       return true;
  //     }
  //     return false;
  //   });

  //   const newEvent = {
  //     ...event,
  //     start: event.start.format('YYYY-MM-DD H:mm:ss'),
  //     end: event.end.format('YYYY-MM-DD H:mm:ss'),
  //   };
  //   delete newEvent.height;
  //   delete newEvent.top;

  //   const newAlteredEvents = [...alteredEvents];
  //   newAlteredEvents[alteredEventKey] = newEvent;
  //   console.log('newAlteredEvents: ', newAlteredEvents);

  //   setAlteredEvents([...newAlteredEvents]);
  // };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <EventGroupSelect
        selectedEventGroups={selectedCalendars}
        setSelectedEventGroups={setSelectedCalendars}
        eventGroups={MOCKED_CALENDARS}
      />
      <div style={{ width: '100%' }}>
        <Toolbar
          view={view}
          onViewChange={setView}
          selectedDate={selectedDate}
          onNavigate={setSelectedDate}
          firstDay={firstDay}
        />
        <Calendar
          stepDetails={MOCKED_STEP_DETAILS}
          events={MOCKED_EVENTS}
          view={view}
          selectedDate={selectedDate}
          // After extending an event's duration
          onExtendEnd={event => {
            console.log('event: ', event);
          }}
          onDragEnd={event => {
            console.log('event: ', event);
          }}
          // First day of the week - 0 indexed on Sunday - Sunday = 0, Monday = 1
          firstDay={firstDay}
          onSelectEvent={event => {
            console.log('event: ', event);
          }}
          // When clicking and dragging to create a new event on a stepgrid view
          onSelecting={({ start, end }) =>
            console.log(`Selecting ${start} - ${end}`)
          }
          // A callback fired when a date selection is made
          onSelectSlot={start => console.log('start: ', start)}
          // How many grid lines there are between an hour. 30 means
          // break the hour into 30 minute blocks. 20 means to break it into 20 etc.
          stepMinutes={30}
          // What range of minutes is selectable - for new events
          // and for drag and drop
          selectMinutes={15}
          selectedEventGroups={selectedCalendars}
          renderEventGroupHeader={({ groupId }) =>
            MOCKED_CALENDARS.find(calendar => calendar.id === groupId).name
          }
        />
      </div>
    </div>
  );
};

export default App;
