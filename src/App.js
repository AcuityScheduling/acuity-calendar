import React, { useState } from 'react';
import moment from 'moment';
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
  const [view, setView] = useState(CALENDAR_VIEWS.month);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCalendars, setSelectedCalendars] = useState([5, 6]);
  const [events, setEvents] = useState(MOCKED_EVENTS);
  const [stepDetails, setStepDetails] = useState(MOCKED_STEP_DETAILS);

  const updateEvent = event => {
    // Find the event key we're going to replace
    let alteredEventKey = false;
    events.some((alteredEvent, index) => {
      if (alteredEvent.id === event.id) {
        alteredEventKey = index;
        return true;
      }
      return false;
    });

    const newAlteredEvents = [...events];
    newAlteredEvents[alteredEventKey] = event;

    setEvents([...newAlteredEvents]);
  };

  return (
    <div
      style={{
        height: '98vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Toolbar
        view={view}
        onViewChange={setView}
        selectedDate={selectedDate}
        onNavigate={setSelectedDate}
      />
      <EventGroupSelect
        selectedEventGroups={selectedCalendars}
        setSelectedEventGroups={setSelectedCalendars}
        eventGroups={MOCKED_CALENDARS}
      />
      <Calendar
        stepDetails={stepDetails}
        events={events}
        view={view}
        selectedDate={selectedDate}
        // After extending an event's duration
        onExtendEnd={event => {
          updateEvent(event);
          console.log('EXTEND', event);
        }}
        onDragEnd={({ event }) => {
          updateEvent(event);
          console.log('DRAG', event);
        }}
        onSelectMoreEvents={({ events, date }) => {
          console.log('MORE', events);
        }}
        // When clicking on the date in the month view
        onSelectMonthDate={({ date }) => {
          setSelectedDate(date);
          setView(CALENDAR_VIEWS.calendar);
        }}
        onSelectEvent={event => {
          console.log('CLICK', event);
        }}
        // When clicking and dragging to create a new event on a stepgrid view
        onSelectRangeEnd={({ start, end, column }) => {
          console.log('SELECTING RANGE', { start, end, column });
        }}
        onCurrentTimeChange={currentTime => {
          const newStepDetails = stepDetails.map(stepDetail => {
            if (stepDetail.schedulingLimits) {
              const newTime = moment(currentTime);
              const oldStart = moment(new Date(stepDetail.start));
              const minuteChange = newTime.diff(oldStart, 'minutes');
              return {
                ...stepDetail,
                start: newTime.format('YYYY-MM-DD HH:mm:ss'),
                end: moment(stepDetail.end)
                  .clone()
                  .add(minuteChange, 'minutes')
                  .format('YYYY-MM-DD HH:mm:ss'),
              };
            }
            return stepDetail;
          });
          setStepDetails(newStepDetails);
        }}
        // A callback fired when a date selection is made
        onSelectSlot={({ date, column }) => {
          console.log('SLOT', { date, column });
        }}
        visibleEventGroups={selectedCalendars}
        renderEventGroupHeader={({ groupId }) =>
          MOCKED_CALENDARS.find(calendar => calendar.id === groupId).name
        }
        renderStepDetail={stepDetail => {
          if (stepDetail.availability) {
            return <div style={{ background: 'white', height: '100%' }} />;
          }
          if (stepDetail.schedulingLimits) {
            return (
              <div
                style={{
                  height: '100%',
                  width: '30px',
                  opacity: '.13',
                  backgroundImage:
                    'linear-gradient(135deg,#fff 25%,#111 25%,#111 50%,#fff 50%,#fff 75%,#111 75%)',
                  backgroundSize: '8px 8px',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            );
          }
        }}
      />
    </div>
  );
};

export default App;
