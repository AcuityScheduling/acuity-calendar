import React from 'react';
import PropTypes from 'prop-types';
import { EVENT_TYPE } from '../../types';
import { makeClass } from '../../utils';
import './index.scss';

/**
 * Get the display time for an event.
 *
 * @param {Object} event - The event we're displaying time for
 */
const getDisplayTime = event => {
  let startMinutes = `:${event.start.format('mm')}`;
  if (startMinutes === ':00') {
    startMinutes = '';
  }
  let startMeridiem = '';
  if (event.start.format('a') !== event.end.format('a')) {
    startMeridiem = event.start.format('a');
  }
  const start = `${event.start.format('h')}${startMinutes}${startMeridiem}`;

  let endMinutes = `:${event.end.format('mm')}`;
  if (endMinutes === ':00') {
    endMinutes = '';
  }

  const end = `${event.end.format('h')}${endMinutes}${event.end.format('a')}`;

  return `${start} - ${end}`;
};

const getEventContainerClass = className => {
  const eventClass = makeClass('step-grid__event');
  if (className) {
    return `${eventClass} ${className}`;
  }
  return eventClass;
};

const Event = ({
  children,
  className,
  event,
  isSelectable,
  onSelectEvent,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      className={getEventContainerClass(className)}
      role="button"
      onClick={e => {
        e.stopPropagation();
        if (!isSelectable) return false;
        onSelectEvent(event);
      }}
    >
      {children ? (
        children(event)
      ) : (
        <div className={makeClass('step-grid__event-wrapper')}>
          <span className={makeClass('step-grid__event-title')}>
            {event.title}
          </span>
          <span className={makeClass('step-grid__event-time')}>
            {getDisplayTime(event)}
          </span>
        </div>
      )}
    </div>
  );
};

Event.defaultProps = {
  children: null,
  className: null,
  isSelectable: true,
};

Event.propTypes = {
  children: PropTypes.func,
  className: PropTypes.string,
  event: EVENT_TYPE.isRequired,
  isSelectable: PropTypes.bool,
  onSelectEvent: PropTypes.func.isRequired,
};

export default Event;
