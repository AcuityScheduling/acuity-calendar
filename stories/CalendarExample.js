import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';
import Calendar from '../src/Calendar';

const calendarWrapperStyles = `
  .acuity-calendar__step-grid { 
    height: 400px;
  }
`;

const CalendarExample = props => {
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

  return (
    <Fragment>
      <style>{calendarWrapperStyles}</style>
      <Calendar
        events={events}
        {...props}
        onDragEnd={results => {
          props.onDragEnd(results);
          updateEvent(results.event);
          console.log('DRAG END', results);
        }}
        // After extending an event's duration
        onExtendEnd={results => {
          props.onExtendEnd(results);
          updateEvent(results.event);
          console.log('EXTEND', results);
        }}
        onSelectMoreEvents={results => {
          props.onSelectMoreEvents(results);
          console.log('MORE', results);
        }}
        // When clicking on the date in the month view
        onSelectMonthDate={results => {
          console.log(results.date);
        }}
        onSelectEvent={results => {
          console.log('CLICK', results);
        }}
        // When clicking and dragging to create a new event on a stepgrid view
        onSelectRangeEnd={results => {
          console.log('SELECTING RANGE', results);
        }}
        onCurrentTimeChange={currentTime => {
          console.log('CURRENT TIME CHANGE', currentTime);
        }}
        // A callback fired when a date selection is made
        onSelectSlot={results => {
          console.log('SLOT', results);
        }}
      />
    </Fragment>
  );
};

CalendarExample.defaultProps = {
  onDragEnd: () => null,
  onExtendEnd: () => null,
  onSelectMoreEvents: () => null,
};

CalendarExample.propTypes = {
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectMoreEvents: PropTypes.func,
};

export default CalendarExample;
