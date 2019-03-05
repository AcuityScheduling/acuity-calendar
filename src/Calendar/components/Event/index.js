import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { EVENT_TYPE } from '../../types';
import { makeClass, resetEventFormat } from '../../utils';
import './index.scss';
import { getDisplayTime } from '../StepGrid/utils';

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
  const wrapperRef = useRef(null);
  const extenderRef = useRef(null);
  const [dragHandleCenterHeight, setDragHandleCenterHeight] = useState(0);

  // Set the height of the inner handler for drag and drop
  useEffect(() => {
    if (wrapperRef.current !== null && extenderRef.current !== null) {
      const wrapperHeight = wrapperRef.current.clientHeight;
      const extenderHeight = extenderRef.current.clientHeight;
      const height = `${wrapperHeight - extenderHeight}px`;
      if (dragHandleCenterHeight !== height) {
        setDragHandleCenterHeight(height);
      }
    }
  });

  return (
    <div
      {...restProps}
      className={getEventContainerClass(className)}
      role="button"
      ref={wrapperRef}
      onClick={e => {
        e.stopPropagation();
        if (!isSelectable) return false;
        onSelectEvent(resetEventFormat(event));
      }}
    >
      <div
        className={handleCenterClass}
        style={{
          height: dragHandleCenterHeight,
        }}
      />
      {children ? (
        children(event)
      ) : (
        <div className={makeClass('step-grid__event-details-wrapper')}>
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
        ref={extenderRef}
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
