import React, { useCallback } from 'react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import moment from 'moment';

import { DayGrid } from '../src';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';

export const AsAWeeklyView = () => {
  const weekStartsOn = select(
    'first day of week',
    {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    },
    0
  );
  const numberOfDays = number('number of days in grid', 7);
  const numberOColumns = number('number of columns', 7);

  const grid = {
    firstDate: moment().day(weekStartsOn),
    lastDate: moment()
      .day(weekStartsOn)
      .add(numberOfDays, 'days'),
    totalColumns: numberOColumns,
  };

  const renderCell = useCallback(
    ({ events }) => (
      <div>
        {events.map(event => (
          <div
            key={event.id}
            style={{
              display: 'flex',
              padding: '30px 8px 0px 0',
              alignItems: 'flex-start',
              boxSizing: 'border-box',
              fontSize: '12px',
            }}
          >
            <small
              style={{ fontSize: '10px', color: 'gray', marginRight: '5px' }}
              children={event.start.format('HH:mm')}
            />{' '}
            {event.title}
          </div>
        ))}
      </div>
    ),
    []
  );
  return <DayGrid grid={grid} events={MOCKED_EVENTS} renderCell={renderCell} />;
};

export const AsAMonthView = () => {
  const weekStartsOn = select(
    'first day of week',
    {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    },
    1
  );

  const numberOfDays = number('numberOfDays', 31);
  const numberOColumns = number('numberOColumns', 7);

  const grid = {
    firstDate: moment().day(weekStartsOn),
    lastDate: moment()
      .day(weekStartsOn)
      .add(numberOfDays, 'days'),
    totalColumns: numberOColumns,
  };

  return <DayGrid grid={grid} events={MOCKED_EVENTS} />;
};

export default {
  title: 'DayGrid',
  component: DayGrid,
  decorators: [withKnobs],
};
