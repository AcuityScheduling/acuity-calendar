import React from 'react';
import {
  withKnobs,
  number,
  boolean,
  date,
  object,
} from '@storybook/addon-knobs';
import { CalendarMonthHeatmap } from '../src';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';
import { addDays, endOfMonth, format, startOfMonth } from 'date-fns';

const now = new Date();
const firstDayInMonth = startOfMonth(now);
const lastDayInMonth = endOfMonth(now);

const counts = {};
for (let i = firstDayInMonth; i < lastDayInMonth; i = addDays(i, 1)) {
  // set date weight to be a random member of the set [0, 10, 20, ... 100]
  counts[format(i, 'yyyy-MM-dd')] = Math.floor(Math.random() * 11) * 10;
}

export const basicExample = () => {
  return (
    <CalendarMonthHeatmap
      counts={object('counts', counts)}
      firstDay={number('firstDay', 0)}
      forceSixWeeks={boolean('forceSixWeeks', true)}
      events={MOCKED_EVENTS}
      selectedDate={new Date(date('selectedDate', now))}
    />
  );
};

export default {
  title: 'CalendarMonthHeatmap',
  component: CalendarMonthHeatmap,
  decorators: [withKnobs],
};
