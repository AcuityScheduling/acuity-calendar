import React from 'react';
import PropTypes from 'prop-types';
import EventWrapper from '../../EventWrapper';
import { EVENT_TYPE } from '../../../types';
import { makeClass } from '../../../utils';
import './DayEvent.scss';

const getDisplayTime = time => {
  let timeMinutes = `:${time.format('mm')}`;
  if (timeMinutes === ':00') {
    timeMinutes = '';
  }
  return `${time.format('h')}${timeMinutes}${time.format('a')}`;
};

const DayEvent = React.forwardRef(
  ({ event, onSelect, children, ...restProps }, ref) => {
    return (
      <EventWrapper
        event={event}
        onSelect={onSelect}
        eventClass={makeClass('day-grid__event')}
        ref={ref}
        {...restProps}
      >
        {children ? (
          children(event)
        ) : (
          <div className={makeClass('day-grid__event-details')}>
            <div className={makeClass('day-grid__event-time')}>
              {getDisplayTime(event.start)}
            </div>
            <div className={makeClass('day-grid__event-title')}>
              {event.title}
            </div>
          </div>
        )}
      </EventWrapper>
    );
  }
);

DayEvent.defaultProps = {
  onSelect: () => null,
  children: null,
};

DayEvent.propTypes = {
  children: PropTypes.func,
  event: EVENT_TYPE.isRequired,
  onSelect: PropTypes.func,
};

export default DayEvent;
