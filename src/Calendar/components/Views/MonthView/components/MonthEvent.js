import React from 'react';
import PropTypes from 'prop-types';
import EventWrapper from '../../../EventWrapper';
import { EVENT_TYPE } from '../../../../types';
import { makeClass } from '../../../../utils';

const MonthEvent = ({ event, onSelect, children, ...restProps }) => {
  return (
    <EventWrapper
      event={event}
      onSelect={onSelect}
      eventClass={makeClass('month__event')}
      {...restProps}
    >
      {children ? children(event) : <div>LOVE IT</div>}
    </EventWrapper>
  );
};

MonthEvent.defaultProps = {
  onSelect: () => null,
  children: null,
};

MonthEvent.propTypes = {
  children: PropTypes.func,
  event: EVENT_TYPE.isRequired,
  onSelect: PropTypes.func,
};

export default MonthEvent;
