import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import FullCalendar, {
  CalendarGroups,
  CalendarMonth,
  CalendarMonthHeatmap,
  CalendarWeek,
  DayList,
} from '../src';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';
import { useEvents } from './utils';
import styles from './styles';

const stories = storiesOf('Components', module);

stories.add('CalendarGroups', () => <CalendarGroups />);
stories.add('CalendarMonth', () => {
  const { events, handlers } = useEvents();
  return (
    <React.Fragment>
      <style>{styles}</style>
      <CalendarMonth />
    </React.Fragment>
  );
});
stories.add('CalendarMonthHeatmap', () => <CalendarMonthHeatmap />);
stories.add('CalendarWeek', () => <CalendarWeek />);
stories.add('DayList', () => <DayList />);
stories.add('FullCalendar', () => <FullCalendar />);
