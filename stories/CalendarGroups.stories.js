import React from 'react';
import { withKnobs, array, date } from '@storybook/addon-knobs';
import { CalendarGroups } from '../src';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';

const now = new Date();

export const basicExample = () => {
  return (
    <CalendarGroups
      events={MOCKED_EVENTS}
      eventGroups={MOCKED_EVENTS}
      selectedDate={new Date(date('selectedDate', now))}
    />
  );
};

export const onlyWithNonEmptyGroupsExample = () => {
  const visibleEventGroups = MOCKED_EVENTS.reduce((acc, event) => {
    acc[event.group_id] = parseInt(event.group_id, 10);
    return acc;
  }, {});
  return (
    <CalendarGroups
      events={MOCKED_EVENTS}
      eventGroups={MOCKED_EVENTS}
      selectedDate={new Date(date('selectedDate', now))}
      visibleEventGroups={array(
        'visibleEventGroups',
        Object.values(visibleEventGroups)
      )}
    />
  );
};

export default {
  title: 'CalendarGroups',
  component: CalendarGroups,
  decorators: [withKnobs],
};
