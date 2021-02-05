import React, { useMemo, useState } from 'react';
import { eventGenerator, useEvents } from './utils';
import { withKnobs, number } from '@storybook/addon-knobs';
import { CALENDAR_VIEWS } from '../src/Calendar/constants';
import { MOCKED_CALENDARS, MOCKED_STEP_DETAILS } from '../src/Calendar/mocks';
import FullCalendar from '../src';
import EventGroupSelect from '../src/EventGroupSelect/EventGroupSelect';
import moment from 'moment';

export const EventStressTest = () => {
  const numberOfEvents = number('numberOfEvents', 100);
  const spacing = number('eventSpacing', 0);
  const length = number('eventLength', 10);
  const events = useMemo(() => {
    return eventGenerator({ numberOfEvents, spacing, length });
  }, [numberOfEvents, spacing, length]);

  const { handlers } = useEvents(events);

  const [view, setView] = useState(CALENDAR_VIEWS.month);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [stepDetails, setStepDetails] = useState(MOCKED_STEP_DETAILS);
  const [selectedEventGroups, setSelectedEventGroups] = useState([5, 6, 7]);

  return (
    <React.Fragment>
      <EventGroupSelect
        eventGroups={MOCKED_CALENDARS}
        selectedEventGroups={selectedEventGroups}
        setSelectedEventGroups={setSelectedEventGroups}
      />
      <FullCalendar
        {...handlers}
        events={events}
        eventGroups={MOCKED_CALENDARS}
        onNavigate={setSelectedDate}
        onFetchEvents={results => {
          console.log('FETCH EVENTS', results);
        }}
        scrollToTime={new Date()}
        visibleEventGroups={selectedEventGroups}
        onViewChange={setView}
        onCurrentTimeChange={currentTime => {
          // We need to update some of the step details to stay _under_ the current time
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
        onSelectDate={({ date }) => {
          setSelectedDate(date);
          setView(CALENDAR_VIEWS.groups);
        }}
        //   renderTimeGridEvent={renderColorEvent}
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
        selectedDate={selectedDate}
        stepDetails={stepDetails}
        currentView={view}
        views={['month', 'week', { view: 'groups', displayName: 'Day' }]}
      />
    </React.Fragment>
  );
};

export default { title: 'Stress testing', decorations: [withKnobs] };
