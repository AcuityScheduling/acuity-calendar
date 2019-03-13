import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import Calendar from '../src/Calendar';
import CalendarExample from './CalendarExample';
import { CALENDAR_VIEWS } from '../src/Calendar/constants';
import { MOCKED_CALENDARS } from '../src/Calendar/mocks';

storiesOf('Calendar Views', module)
  .add('Month', () => <CalendarExample view={CALENDAR_VIEWS.month} />)
  .add('Week', () => <CalendarExample view={CALENDAR_VIEWS.week} />)
  .add('Calendar', () => {
    return (
      <CalendarExample
        view={CALENDAR_VIEWS.calendar}
        visibleEventGroups={[5, 6, 7]}
        renderEventGroupHeader={({ groupId }) => {
          return MOCKED_CALENDARS.find(calendar => calendar.id === groupId)
            .name;
        }}
      />
    );
  });

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
