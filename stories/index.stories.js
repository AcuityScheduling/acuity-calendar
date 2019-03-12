import React, { useState, Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import Calendar from '../src/Calendar';
import { CALENDAR_VIEWS } from '../src/Calendar/constants';

const eventsMocked = [];

// eslint-disable-next-line react/prop-types
const CalendarWrapper = ({ view }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Calendar
      events={eventsMocked}
      view={view}
      selectedDate={selectedDate}
      onNavigate={setSelectedDate}
      onSelectSlot={start => console.log(start)}
    />
  );
};

storiesOf('Calendar Views', module)
  .add('Calendar', () => <CalendarWrapper view={CALENDAR_VIEWS.calendar} />)
  .add('Week', () => <CalendarWrapper view={CALENDAR_VIEWS.week} />)
  .add('Month', () => <CalendarWrapper view={CALENDAR_VIEWS.month} />);

storiesOf('Other').add('month heatmap', () => {
  const events = [
    {
      id: 3,
      group_id: 5,
      start: '2019-02-11 00:00:00',
      end: '2019-02-11 00:00:00',
      weight: 0.7,
    },
    {
      id: 3,
      group_id: 5,
      start: '2019-02-12 00:00:00',
      end: '2019-02-12 00:00:00',
      weight: 0.4,
    },
    {
      id: 3,
      group_id: 5,
      start: '2019-02-13 00:00:00',
      end: '2019-02-13 00:00:00',
      weight: 0.5,
    },
    {
      id: 3,
      group_id: 5,
      start: '2019-02-14 00:00:00',
      end: '2019-02-14 00:00:00',
      weight: 0.8,
    },
  ];
  const styles = `
      .acuity-calendar__month__cell {
        position: relative;
      }
      .acuity-calendar__step-grid__event {
        background: transparent;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
      }
      .acuity-calendar__month__date {
        text-align: center;
        position: relative;
        z-index: 10;
      }
      .heatmap__cell {
        position: absolute;
        top: 10%;
        bottom: 15%;
        left: 4px;
        right: 4px;
        padding: 0px;
        border-radius: 50%;
      }
    `;
  return (
    <Fragment>
      <style>{styles}</style>
      <Calendar
        view={CALENDAR_VIEWS.month}
        selectedEventGroups={[5]}
        events={events}
        renderEvent={event => (
          <div
            className="heatmap__cell"
            style={{
              background: 'rgba(0, 0, 255, ' + event.weight + ')',
            }}
          />
        )}
      />
    </Fragment>
  );
});
