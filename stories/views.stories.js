import React, { Fragment } from 'react';
import moment from 'moment';

import { storiesOf } from '@storybook/react';

import { MOCKED_CALENDARS } from '../src/Grid/mocks';
// import FullCalendar from './FullCalendar';
import CalendarMonth from '../src/components/CalendarMonth';
import CalendarWeek from '../src/components/CalendarWeek';
// import CalendarGroups from '../src/CalendarGroups';
import styles from './styles';
import { useEvents } from './utils';

const getEventColor = groupId => {
  return MOCKED_CALENDARS.find(calendar => {
    return calendar.id === groupId;
  }).color;
};

export const renderColorEvent = event => {
  return (
    <div
      style={{
        height: '100%',
        background: getEventColor(event.group_id),
      }}
    >
      {event.title}
      <br /> {moment(event.start).format('H:mma')} -{' '}
      {moment(event.end).format('H:mma')}
    </div>
  );
};

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

// const Groups = props => {
//   const { events, handlers } = useEvents(props);

//   return (
//     <Fragment>
//       <style>{styles}</style>
//       <CalendarGroups
//         events={events}
//         visibleEventGroups={[5, 6, 7]}
//         renderEvent={renderColorEvent}
//         renderHeader={({ groupId }) => {
//           return MOCKED_CALENDARS.find(calendar => calendar.id === groupId)
//             .name;
//         }}
//         {...handlers}
//       />
//     </Fragment>
//   );
// };

storiesOf('Calendar Views', module)
  // .add('Full Calendar', () => <FullCalendar />)
  .add('Month', () => <Month />)
  .add('Week', () => <Week />);
// .add('Week', () => <Week />)
// .add('Groups', () => <Groups />);
