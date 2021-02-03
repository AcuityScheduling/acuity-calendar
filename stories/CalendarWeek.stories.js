import React, { useCallback } from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { CalendarWeek } from '../src';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';
import { format } from 'date-fns';

export const basicExample = () => {
  return (
    <CalendarWeek firstDay={number('firstDay', 0)} events={MOCKED_EVENTS} />
  );
};

export const WithCustomHeaderRender = () => {
  const renderHeader = useCallback(({ date, events }) => {
    const key = format(date, 'yyyy-MM-dd');
    const numberOfEvents = Object.values(events?.[key] || []).reduce(
      (num, arr) => num + arr.length,
      0
    );
    return (
      <header key={key}>
        {key}
        <br />
        {numberOfEvents} appointments
      </header>
    );
  }, []);

  return (
    <CalendarWeek
      firstDay={number('firstDay', 0)}
      events={MOCKED_EVENTS}
      renderHeader={renderHeader}
    />
  );
};

export default {
  title: 'CalendarWeek',
  component: CalendarWeek,
  decorators: [withKnobs],
};
