import React, { Fragment, useState, useEffect } from 'react';
import moment from 'moment';

import { storiesOf } from '@storybook/react';

import { MOCKED_CALENDARS, MOCKED_STEP_DETAILS } from '../src/Calendar/mocks';
import CalendarMonth from '../src/components/CalendarMonth';
import CalendarWeek from '../src/components/CalendarWeek';
import CalendarGroups from '../src/components/CalendarGroups';
import styles from './styles';
import { useEvents } from './utils';
import FullCalendar from '../src/components/FullCalendar';
import { CALENDAR_VIEWS } from '../src/Calendar/constants';

const getEventColor = groupId => {
  return MOCKED_CALENDARS.find(calendar => {
    return calendar.id === groupId;
  }).color;
};

export const renderColorEvent = event => {
  return (
    <div
      style={{
        height: '100%',
        background: getEventColor(event.group_id),
      }}
    >
      {event.title}
      <br /> {moment(event.start).format('H:mma')} -{' '}
      {moment(event.end).format('H:mma')}
    </div>
  );
};

const Month = props => {
  const { events, handlers } = useEvents(props);

  return (
    <Fragment>
      <style>{styles}</style>
      <CalendarMonth events={events} {...handlers} />
    </Fragment>
  );
};

const Week = props => {
  const { events, handlers } = useEvents(props);

  return (
    <Fragment>
      <style>{styles}</style>
      <CalendarWeek
        events={events}
        renderEvent={renderColorEvent}
        {...handlers}
      />
    </Fragment>
  );
};

const Groups = props => {
  const { events, handlers } = useEvents(props);

  return (
    <Fragment>
      <style>{styles}</style>
      <CalendarGroups
        events={events}
        visibleEventGroups={[5, 6, 7]}
        renderEvent={renderColorEvent}
        renderHeader={({ groupId }) => {
          return MOCKED_CALENDARS.find(calendar => calendar.id === groupId)
            .name;
        }}
        {...handlers}
      />
    </Fragment>
  );
};

const Full = props => {
  const { events, handlers } = useEvents(props);
  const [view, setView] = useState(CALENDAR_VIEWS.month);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [stepDetails, setStepDetails] = useState(MOCKED_STEP_DETAILS);

  return (
    <Fragment>
      <style>{styles}</style>
      <FullCalendar
        {...handlers}
        events={events}
        onNavigate={setSelectedDate}
        fetchEventInitialFullRange={{
          start: new Date(moment().subtract(8, 'months')),
          end: new Date(moment().add(8, 'months')),
        }}
        onFetchMoreEvents={range => {
          console.log('range: ', range);
        }}
        onResetEventRange={range => {
          console.log('range: ', range);
        }}
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
        renderGroupsHeader={({ groupId }) => {
          return MOCKED_CALENDARS.find(calendar => calendar.id === groupId)
            .name;
        }}
        renderTimeGridEvent={renderColorEvent}
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
        view={view}
      />
    </Fragment>
  );
};

storiesOf('Calendar Views', module)
  .add('Full Calendar', () => <Full />)
  .add('Month', () => <Month />)
  .add('Week', () => <Week />)
  .add('Groups', () => <Groups />);
