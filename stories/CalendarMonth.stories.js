import React, { useCallback } from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { CalendarMonth } from '../src';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';
import { format } from 'date-fns';

export const basicExample = () => {
  return (
    <CalendarMonth firstDay={number('firstDay', 0)} events={MOCKED_EVENTS} />
  );
};

export const WithCustomHeaderRender = () => {
  const renderHeader = useCallback(({ date, events }) => {
    const key = format(date, 'yyyy-MM-dd');
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
