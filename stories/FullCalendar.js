import React, { useState } from 'react';
import moment from 'moment';
import Calendar from '../src/Calendar';
import Toolbar from '../src/Toolbar';
import { CALENDAR_VIEWS } from '../src/Calendar/constants';
import { MOCKED_CALENDARS, MOCKED_STEP_DETAILS } from '../src/Calendar/mocks';
import EventGroupSelect from '../src/EventGroupSelect';
import { useEvents } from './utils';

const FullCalendar = props => {
  const [view, setView] = useState(CALENDAR_VIEWS.month);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCalendars, setSelectedCalendars] = useState([5, 6]);
  const { events, handlers } = useEvents(props);
  const [stepDetails, setStepDetails] = useState(MOCKED_STEP_DETAILS);

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
        {...handlers}
        // When clicking on the date in the month view
        onSelectMonthDate={({ date }) => {
          setSelectedDate(date);
          setView(CALENDAR_VIEWS.groups);
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
        visibleEventGroups={selectedCalendars}
        renderHeader={{
          [CALENDAR_VIEWS.groups]: ({ groupId }) =>
            MOCKED_CALENDARS.find(calendar => calendar.id === groupId).name,
        }}
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

export default FullCalendar;
