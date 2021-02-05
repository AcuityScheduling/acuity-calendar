import React, { useCallback } from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { CalendarMonth } from '../src';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';

export const basicExample = () => {
  return (
    <CalendarMonth firstDay={number('firstDay', 0)} events={MOCKED_EVENTS} />
  );
};

export const WithCustomHeaderRender = () => {
  const renderHeader = useCallback(({ date, events }) => {
    const key = date.format('YYYY-MM-DD');
    return <header key={key}>{key}</header>;
  }, []);

  return (
    <CalendarMonth
      firstDay={number('firstDay', 0)}
      events={MOCKED_EVENTS}
      renderHeader={renderHeader}
    />
  );
};

export default {
  title: 'CalendarMonth',
  component: CalendarMonth,
  decorators: [withKnobs],
};
