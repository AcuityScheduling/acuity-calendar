import React from 'react';

import CalendarHeatmap from '../src/components/CalendarMonthHeatmap';
import moment from 'moment';
import DayList from '../src/components/DayList';

const getDay = addDays =>
  moment()
    .add(addDays, 'days')
    .format('YYYY-MM-DD');

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

export default { title: 'Calendar Utilities' };

export const monthHeatmap = () => (
  <CalendarHeatmap
    counts={eventCounts}
    onSelectCell={result => console.log(result)}
  />
);

export const dayList = () => <DayList />;
