import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';

import { MOCKED_CALENDARS } from '../src/Calendar/mocks';
import CalendarMonth from '../src/CalendarMonth';
import CalendarWeek from '../src/CalendarWeek';
import CalendarGroups from '../src/CalendarGroups';
import styles from './styles';
import { useEvents, renderColorEvent } from './utils';

const Month = props => {
  const { events, handlers } = useEvents(props);

  return (
    <Fragment>
      <style>{styles}</style>
      <CalendarMonth events={events} {...handlers} />
    </Fragment>
  );
};

const Week = props => {
  const { events, handlers } = useEvents(props);

  return (
    <Fragment>
      <style>{styles}</style>
      <CalendarWeek
        events={events}
        renderEvent={renderColorEvent}
        {...handlers}
      />
    </Fragment>
  );
};

const Groups = props => {
  const { events, handlers } = useEvents(props);

  return (
    <Fragment>
      <style>{styles}</style>
      <CalendarGroups
        events={events}
        visibleEventGroups={[5, 6, 7]}
        renderEvent={renderColorEvent}
        renderHeader={({ groupId }) => {
          return MOCKED_CALENDARS.find(calendar => calendar.id === groupId)
            .name;
        }}
        {...handlers}
      />
    </Fragment>
  );
};

storiesOf('Calendar Views', module)
  .add('Month', () => <Month />)
  .add('Week', () => <Week />)
  .add('Calendar', () => <Groups />);