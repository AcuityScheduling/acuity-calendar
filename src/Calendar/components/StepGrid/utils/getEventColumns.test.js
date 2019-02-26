import getEventColumns from './getEventColumns';
import { MOCKED_EVENTS } from '../../../mocks';
import {
  getMungedEvents,
  getEventsWithSelectedEventGroups,
} from '../../../utils';

describe('Add column numbers to events', () => {
  it('has column keys and correct events in each column', () => {
    const mungedEvents = getMungedEvents({
      events: MOCKED_EVENTS,
      stepMinutes: 30,
    });

    const eventsWithSelectedEventGroups = getEventsWithSelectedEventGroups({
      mungedEvents,
      selectedEventGroups: [5, 6],
    });

    const eventsWithColumn = getEventColumns(eventsWithSelectedEventGroups);

    expect(eventsWithColumn['2019-02-12']).toHaveProperty('1');
    expect(eventsWithColumn['2019-02-12']).toHaveProperty('2');
    expect(eventsWithColumn['2019-02-12']).toHaveProperty('3');
    expect(eventsWithColumn['2019-02-12'][1].length).toEqual(2);
  });
});
