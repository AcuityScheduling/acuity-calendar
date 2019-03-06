import React from 'react';
import PropTypes from 'prop-types';
import { makeClass, resetEventFormat } from '../utils';

const getEventContainerClass = className => {
  const eventClass = makeClass('step-grid__event');
  if (className) {
    return `${eventClass} ${className}`;
  }
  return eventClass;
};

const EventWrapper = React.forwardRef(
  (
    { className, event, isSelectable, onSelectEvent, children, ...restProps },
    ref
  ) => (
    <div
      {...restProps}
      className={getEventContainerClass(className)}
      role="button"
      ref={ref}
      onClick={e => {
        e.stopPropagation();
        if (!isSelectable) return false;
        onSelectEvent(resetEventFormat(event));
      }}
    >
      {children}
    </div>
  )
);

EventWrapper.displayName = 'EventWrapper';

EventWrapper.defaultProps = {
  className: '',
  isSelectable: true,
  onSelectEvent: () => null,
};

EventWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  event: PropTypes.object.isRequired,
  isSelectable: PropTypes.bool,
  onSelectEvent: PropTypes.func,
};

export default EventWrapper;
