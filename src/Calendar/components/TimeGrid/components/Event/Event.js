import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Event.scss';
import EventWrapper from '../../../EventWrapper';
import { getDisplayTime } from '../../utils';
import { makeClass } from '../../../../utils';
import { EVENT_TYPE } from '../../../../types';
import { extendHandleClass, handleCenterClass } from '../../constants';

const Event = ({
  children,
  className,
  event,
  isSelectable,
  onSelect,
  isExtendable,
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
    <EventWrapper
      ref={wrapperRef}
      event={event}
      onSelect={onSelect}
      isSelectable={isSelectable}
      {...restProps}
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
        <div className={makeClass('time-grid__event-details-wrapper')}>
          <span className={makeClass('time-grid__event-title')}>
            {event.title}
          </span>
          <span className={makeClass('time-grid__event-time')}>
            {getDisplayTime(event)}
          </span>
        </div>
      )}
      <div
        className={`${extendHandleClass} ${isExtendable({ event }) &&
          makeClass('time-grid__event-handle-bottom')}`}
        ref={extenderRef}
      />
    </EventWrapper>
  );
};

Event.defaultProps = {
  children: null,
  className: null,
  isSelectable: true,
  isExtendable: () => true,
};

Event.propTypes = {
  children: PropTypes.func,
  className: PropTypes.string,
  event: EVENT_TYPE.isRequired,
  isExtendable: PropTypes.func,
  isSelectable: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};

export default Event;
