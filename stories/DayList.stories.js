import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { DayList } from '../src';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';

export const basicExample = () => {
  return (
    <DayList
      totalDays={number('totalDays', 7)}
      firstDay={number('firstDay', 0)}
      events={MOCKED_EVENTS}
    />
  );
};

export default {
  title: 'DayList',
  component: DayList,
  decorators: [withKnobs],
};
