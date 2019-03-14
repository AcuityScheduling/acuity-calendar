import React from 'react';

import { storiesOf } from '@storybook/react';

import CalendarHeatmap from '../src/components/CalendarHeatmap';
import moment from 'moment';

const getDay = addDays => {
  return moment()
    .add(addDays, 'days')
    .format('YYYY-MM-DD');
};
const eventCounts = {
  [getDay(-2)]: 2,
  [getDay(-6)]: 11,
  [getDay(0)]: 3,
  [getDay(1)]: 17,
  [getDay(2)]: 2,
  [getDay(3)]: 9,
  [getDay(5)]: 8,
  [getDay(7)]: 3,
};

storiesOf('Month Calendars', module).add('Heatmap', () => (
  <CalendarHeatmap
    counts={eventCounts}
    selectedDate={new Date()}
    onSelectCell={result => console.log('result: ', result)}
    firstDay={1}
  />
));
