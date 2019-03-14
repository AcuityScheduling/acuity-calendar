import React from 'react';

import { storiesOf } from '@storybook/react';

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
        renderHeader={{
          [CALENDAR_VIEWS.calendar]: ({ groupId }) => {
            return MOCKED_CALENDARS.find(calendar => calendar.id === groupId)
              .name;
          },
        }}
      />
    );
  });
