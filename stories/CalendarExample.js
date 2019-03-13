import React, { Fragment, useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { MOCKED_EVENTS, MOCKED_CALENDARS } from '../src/Calendar/mocks';
import Calendar from '../src/Calendar';

const calendarWrapperStyles = `
  .acuity-calendar__step-grid { 
    height: 700px;
  }
  .acuity-calendar__step-grid__event {
      font-size: 14px;
  }
  .acuity-calendar__month { 
    height: 800px;
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

  const getEventColor = groupId => {
    return MOCKED_CALENDARS.find(calendar => {
      return calendar.id === groupId;
    }).color;
  };

  return (
    <Fragment>
      <style>{calendarWrapperStyles}</style>
      <Calendar
        events={events}
        {...props}
        renderEvent={event => {
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
        }}
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
          props.onSelectMonthDate(results);
          console.log(results.date);
        }}
        onSelectEvent={results => {
          props.onSelectEvent(results);
          console.log('CLICK', results);
        }}
        // When clicking and dragging to create a new event on a stepgrid view
        onSelectRangeEnd={results => {
          props.onSelectRangeEnd(results);
          console.log('SELECTING RANGE', results);
        }}
        onCurrentTimeChange={currentTime => {
          props.onCurrentTimeChange(currentTime);
          console.log('CURRENT TIME CHANGE', currentTime);
        }}
        // A callback fired when a date selection is made
        onSelectSlot={results => {
          props.onSelectSlot(results);
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
  onSelectMonthDate: () => null,
  onSelectEvent: () => null,
  onSelectRangeEnd: () => null,
  onCurrentTimeChange: () => null,
  onSelectSlot: () => null,
};

CalendarExample.propTypes = {
  onCurrentTimeChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectMonthDate: PropTypes.func,
  onSelectMoreEvents: PropTypes.func,
  onSelectRangeEnd: PropTypes.func,
  onSelectSlot: PropTypes.func,
};

export default CalendarExample;
