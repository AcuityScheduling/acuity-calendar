import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { EVENT_TYPE } from '../../types';
import { makeClass, resetEventFormat } from '../../utils';
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

export const handleCenterClass = makeClass('step-grid__event-handle-center');
export const extendHandleClass = makeClass('step-grid__event-handle');

const Event = ({
  children,
  className,
  event,
  isSelectable,
  onSelectEvent,
  ...restProps
}) => {
  const wrapper = useRef(null);
  const topExtender = useRef(null);
  const [dragHandleCenterHeight, setDragHandleCenterHeight] = useState(0);
  const [dragHandleCenterTop, setDragHandleCenterTop] = useState(0);

  // Set the height of the inner handler for drag and drop
  useEffect(() => {
    if (wrapper.current !== null && topExtender.current !== null) {
      const wrapperHeight = wrapper.current.clientHeight;
      const extenderHeight = topExtender.current.clientHeight;
      const height = `${wrapperHeight - extenderHeight * 2}px`;
      const top = `${extenderHeight}px`;
      if (dragHandleCenterHeight !== height) {
        setDragHandleCenterHeight(height);
      }
      if (dragHandleCenterTop !== top) {
        setDragHandleCenterTop(top);
      }
    }
  });

  return (
    <div
      {...restProps}
      className={getEventContainerClass(className)}
      role="button"
      ref={wrapper}
      onClick={e => {
        e.stopPropagation();
        if (!isSelectable) return false;
        onSelectEvent(resetEventFormat(event));
      }}
    >
      <div
        className={`${extendHandleClass} ${makeClass(
          'step-grid__event-handle-top'
        )}`}
        ref={topExtender}
      />
      <div
        className={handleCenterClass}
        style={{
          height: dragHandleCenterHeight,
          top: dragHandleCenterTop,
        }}
      />
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
      <div
        className={`${extendHandleClass} ${makeClass(
          'step-grid__event-handle-bottom'
        )}`}
      />
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
