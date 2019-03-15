import getEventColumns from './getEventColumns';
import {
  getMungedEvents,
  getEventsWithSelectedEventGroups,
} from '../../../utils';

const MOCKED_EVENTS = [
  {
    id: 1,
    group_id: 5,
    start: '2019-01-02 12:00:00',
    end: '2019-01-02 12:30:00',
    title: 'My Meeting',
    allDay: false,
  },
  {
    id: 2,
    group_id: 5,
    start: '2019-01-02 19:00:00',
    end: '2019-01-02 19:25:25',
    title: '1:1 with Jordan',
    allDay: false,
  },
  {
    id: 3,
    group_id: 5,
    start: '2019-02-12 09:00:00',
    end: '2019-02-12 09:30:00',
    title: 'Unicorns are pretty',
    allDay: false,
  },
  {
    id: 4,
    group_id: 6,
    start: '2019-03-07 14:00:00',
    end: '2019-03-07 15:00:00',
    title: 'Interview Today',
    allDay: false,
  },
  {
    id: 5,
    group_id: 6,
    start: '2019-02-12 09:15:00',
    end: '2019-02-12 09:30:00',
    title: 'Piano Recital',
    allDay: false,
  },
  {
    id: 6,
    group_id: 6,
    start: '2019-02-12 09:29:00',
    end: '2019-02-12 09:50:00',
    title: 'Band Practice',
    allDay: false,
  },

  {
    id: 7,
    group_id: 6,
    start: '2019-02-12 22:00:00',
    end: '2019-02-12 23:00:00',
    title: "Valentine's Day",
    allDay: false,
  },
  {
    id: 8,
    group_id: 6,
    start: '2019-02-14 10:00:00',
    end: '2019-02-14 16:00:00',
    title: 'Big Group Meeting',
    allDay: false,
  },
];

describe('Add column numbers to events', () => {
  it('has column keys and correct events in each column for two columns', () => {
    const eventsTest = MOCKED_EVENTS.map(event => {
      if (event.id === 3) {
        return {
          ...event,
          start: '2019-02-12 10:45:00',
          end: '2019-02-12 11:15:00',
        };
      }
      return event;
    });
    const mungedEvents = getMungedEvents({
      events: eventsTest,
      stepMinutes: 30,
    });

    const eventsWithSelectedEventGroups = getEventsWithSelectedEventGroups({
      mungedEvents,
      selectedEventGroups: [5, 6],
    });

    const eventsWithColumn = getEventColumns(eventsWithSelectedEventGroups);

    const totalEventsInFirstColumn = eventsWithColumn['2019-02-12'][1].length;
    expect(eventsWithColumn['2019-02-12']).toHaveProperty('1');
    expect(eventsWithColumn['2019-02-12']).toHaveProperty('2');
    expect(eventsWithColumn['2019-02-12'][3]).toBeUndefined();
    expect(totalEventsInFirstColumn).toEqual(3);
  });

  it('has column keys and correct events in each column for three columns', () => {
    const mungedEvents = getMungedEvents({
      events: MOCKED_EVENTS,
      stepMinutes: 30,
    });

    const eventsWithSelectedEventGroups = getEventsWithSelectedEventGroups({
      mungedEvents,
      selectedEventGroups: [5, 6],
    });

    const eventsWithColumn = getEventColumns(eventsWithSelectedEventGroups);

    const totalEventsInFirstColumn = eventsWithColumn['2019-02-12'][1].length;
    expect(eventsWithColumn['2019-02-12']).toHaveProperty('1');
    expect(eventsWithColumn['2019-02-12']).toHaveProperty('2');
    expect(eventsWithColumn['2019-02-12']).toHaveProperty('3');
    expect(eventsWithColumn['2019-02-12'][1].length).toEqual(2);
    expect(totalEventsInFirstColumn).toEqual(2);
  });
});
