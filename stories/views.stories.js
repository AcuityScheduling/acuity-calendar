import React, { Fragment, useState } from 'react';
import moment from 'moment';
import get from 'lodash.get';

import {
  MOCKED_CALENDARS,
  MOCKED_STEP_DETAILS,
  MOCKED_EVENTS,
  MOCK_TIMEZONE_COLUMNS,
} from '../src/Calendar/mocks';

import { useEvents } from './utils';
import FullCalendar, {
  CalendarGroups,
  CalendarWeek,
  CalendarMonth,
} from '../src';
import { CALENDAR_VIEWS } from '../src/Calendar/constants';
import EventGroupSelect from '../src/EventGroupSelect/EventGroupSelect';
import TimeGrid from '../src/Calendar/components/TimeGrid/TimeGridWrapper';

const getEventColor = groupId =>
  MOCKED_CALENDARS.find(calendar => calendar.id === groupId).color;

const renderColorEvent = event => {
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

export const Month = () => {
  const { events, handlers } = useEvents();

  return <CalendarMonth events={events} {...handlers} />;
};

export const Week = () => {
  const { events, handlers } = useEvents();
  const [stepHeight, setStepHeight] = useState(42);

  return (
    <Fragment>
      <button onClick={() => setStepHeight(21)}>Zoom .5</button>
      <button onClick={() => setStepHeight(31.5)}>Zoom .75</button>
      <button onClick={() => setStepHeight(42)}>Zoom 1x</button>
      <button onClick={() => setStepHeight(84)}>Zoom 2x</button>
      <button onClick={() => setStepHeight(126)}>Zoom 3x</button>
      <button onClick={() => setStepHeight(168)}>Zoom 4x</button>
      <CalendarWeek
        events={events}
        renderEvent={renderColorEvent}
        stepHeight={stepHeight}
        stepDetails={MOCKED_STEP_DETAILS}
        {...handlers}
      />
    </Fragment>
  );
};

export const Groups = () => {
  const { events, handlers } = useEvents();

  return (
    <CalendarGroups
      events={events}
      eventGroups={MOCKED_CALENDARS}
      visibleEventGroups={[5, 6, 7]}
      renderEvent={renderColorEvent}
      {...handlers}
    />
  );
};

export const Full = () => {
  const { events, handlers } = useEvents();
  const [view, setView] = useState(CALENDAR_VIEWS.month);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [stepDetails, setStepDetails] = useState(MOCKED_STEP_DETAILS);
  const [selectedEventGroups, setSelectedEventGroups] = useState([5, 6, 7]);

  return (
    <Fragment>
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

export const CustomView = () => {
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

export default { title: 'Views' };
