import { useState } from 'react';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';

export const useEvents = props => {
  const [events, setEvents] = useState(MOCKED_EVENTS);
  const updateEvent = event => {
    // Find the event key we're going to replace
    let alteredEventKey = false;
    events.some((alteredEvent, index) => {
      if (alteredEvent.id === event.id) {
        alteredEventKey = index;
        return true;
      }
      return false;
    });

    const newAlteredEvents = [...events];
    newAlteredEvents[alteredEventKey] = event;

    setEvents([...newAlteredEvents]);
  };

  const handlers = {
    onDragEnd: results => {
      updateEvent(results.event);
      console.log('DRAG END', results);
    },
    // After extending an event's duration
    onExtendEnd: results => {
      updateEvent(results.event);
      console.log('EXTEND', results);
    },
    onSelectMore: results => {
      console.log('MORE', results);
    },
    // When clicking on the date in the month view
    onSelectDate: results => {
      console.log(results.date);
    },
    onSelectEvent: results => {
      console.log('CLICK', results);
    },
    // When clicking and dragging to create a new event on a TimeGrid view
    onSelectRangeEnd: results => {
      console.log('SELECTING RANGE', results);
    },
    onCurrentTimeChange: currentTime => {
      console.log('CURRENT TIME CHANGE', currentTime);
    },
    // A callback fired when a date selection is made
    onSelectSlot: results => {
      console.log('SLOT', results);
    },
  };

  return {
    events,
    handlers,
  };
};
