import React, { useState } from 'react';
import moment from 'moment';
import { MOCKED_EVENTS, MOCKED_CALENDARS } from '../src/Calendar/mocks';

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
    onSelectMoreEvents: results => {
      console.log('MORE', results);
    },
    // When clicking on the date in the month view
    onSelectMonthDate: results => {
      console.log(results.date);
    },
    onSelectEvent: results => {
      console.log('CLICK', results);
    },
    // When clicking and dragging to create a new event on a stepgrid view
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
