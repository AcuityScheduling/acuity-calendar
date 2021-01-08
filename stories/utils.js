import { useState } from 'react';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';
import { addMinutes, format, startOfHour } from 'date-fns';

export const useEvents = (initialEvents = MOCKED_EVENTS) => {
  const [events, setEvents] = useState(initialEvents);
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
    console.log('newAlteredEvents: ', newAlteredEvents);

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

export const eventGenerator = ({
  numberOfEvents = 100,
  from = startOfHour(new Date()),
  length = 10,
  spacing = 0,
} = {}) => {
  const dateFormat = 'yyyy-MM-dd HH:mm:ss';
  const events = [];

  let lastDate = from;
  for (let i = 0; i < numberOfEvents; i++) {
    const newEnd = addMinutes(lastDate, length);
    events.push({
      id: i,
      group_id: 5,
      start: format(lastDate, dateFormat),
      end: format(newEnd, dateFormat),
      title: `Group Meeting ${i + 1}`,
      column_id: 'America/Los_Angeles',
    });
    lastDate = addMinutes(newEnd, spacing);
  }

  return events;
};
