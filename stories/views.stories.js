import React, { Fragment, useState } from 'react';
import moment from 'moment';
import get from 'lodash.get';

import { storiesOf } from '@storybook/react';

import {
  MOCKED_CALENDARS,
  MOCKED_STEP_DETAILS,
  MOCKED_EVENTS,
  MOCK_TIMEZONE_COLUMNS,
} from '../src/Calendar/mocks';
import CalendarMonth from '../src/components/CalendarMonth';
import CalendarWeek from '../src/components/CalendarWeek';
import CalendarGroups from '../src/components/CalendarGroups';
import styles from './styles';
import { useEvents } from './utils';
import FullCalendar from '../src/components/FullCalendar';
import { CALENDAR_VIEWS } from '../src/Calendar/constants';
import EventGroupSelect from '../src/EventGroupSelect';
import TimeGrid from '../src/Calendar/components/TimeGrid/TimeGridWrapper';

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
  const [stepHeight, setStepHeight] = useState(50);

  return (
    <Fragment>
      <style>{styles}</style>
      <button onClick={() => setStepHeight(25)}>Zoom .5</button>
      <button onClick={() => setStepHeight(50)}>Zoom 1</button>
      <button onClick={() => setStepHeight(62.5)}>Zoom 1.25</button>
      <CalendarWeek
        events={events}
        renderEvent={renderColorEvent}
        stepHeight={stepHeight}
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
        eventGroups={MOCKED_CALENDARS}
        visibleEventGroups={[5, 6, 7]}
        renderEvent={renderColorEvent}
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
  const [selectedEventGroups, setSelectedEventGroups] = useState([5]);

  return (
    <Fragment>
      <style>{styles}</style>
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
        // scrollToTime={new Date()}
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
        currentView={view}
        views={['month', 'week', { view: 'groups', displayName: 'Day' }]}
      />
    </Fragment>
  );
};

const CustomView = () => {
  const [view, setView] = useState(CALENDAR_VIEWS.week);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getColumns = week => {
    const columns = [];
    week.forEach(day => {
      MOCK_TIMEZONE_COLUMNS.forEach(timezone => {
        columns.push({
          date: moment(day),
          column_id: timezone,
        });
      });
    });
    return columns;
  };

  return (
    <Fragment>
      <style>{`.acuity-calendar__time-grid { height: 500px }`}</style>
      <FullCalendar
        onViewChange={setView}
        currentView={view}
        onNavigate={setSelectedDate}
        views={[
          'groups',
          {
            view: 'week',
            grid: 'time',
            render: props => (
              <TimeGrid
                {...props}
                renderHeaders={({
                  week,
                  ColumnComponent,
                  events: mungedEvents,
                }) => {
                  const columns = getColumns(week);
                  return columns.map(column => {
                    const dateKey = column.date.format('YYYY-MM-DD');
                    const totalEventColumns = Object.keys(
                      get(mungedEvents, `${column.column_id}.${dateKey}`, {})
                    ).length;
                    return (
                      <ColumnComponent
                        key={`${dateKey}${column.column_id}`}
                        totalEventColumns={totalEventColumns}
                        date={column.date.format()}
                        columnClass="week"
                      >
                        <div className="time-grid__week-header__container">
                          <div className={`time-grid__week-header__date`}>
                            {moment(column.date).format('M/D')}
                          </div>
                          <div className={`time-grid__week-header__day`}>
                            {moment(column.date).format('dddd')}
                          </div>
                          <div style={{ fontSize: '10px' }}>
                            {column.column_id}
                          </div>
                        </div>
                      </ColumnComponent>
                    );
                  });
                }}
                renderColumns={({
                  ColumnComponent,
                  week,
                  events: mungedEvents,
                  stepDetails: mungedStepDetails,
                }) => {
                  const columns = getColumns(week);
                  return columns.map((column, index) => {
                    const dateKey = column.date.format('YYYY-MM-DD');
                    const columnId = `${dateKey}-${column.column_id}`;

                    const eventsForColumn = get(
                      mungedEvents,
                      `${column.column_id}.${dateKey}`,
                      {}
                    );
                    const stepDetailsForColumn = get(
                      mungedStepDetails,
                      `${column.column_id}.${dateKey}`,
                      []
                    );

                    return (
                      <ColumnComponent
                        key={`${column.date.format('YYYY-MM-DD')}${
                          column.column_id
                        }`}
                        eventsForColumn={eventsForColumn}
                        stepDetailsForColumn={stepDetailsForColumn}
                        date={column.date.format()}
                        columnKey={columnId}
                        columnIndex={index}
                        columnId={columnId}
                      />
                    );
                  });
                }}
              />
            ),
          },
        ]}
        events={MOCKED_EVENTS}
        selectedDate={selectedDate}
        stepDetails={MOCKED_STEP_DETAILS}
      />
    </Fragment>
  );
};

storiesOf('Calendar Views', module)
  .add('Full Calendar', () => <Full />)
  .add('Month', () => <Month />)
  .add('Week', () => <Week />)
  .add('Groups', () => <Groups />)
  .add('Custom View', () => <CustomView />);
