import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DraggableCore } from 'react-draggable';
import { extendHandleClass } from '..';
import { EVENT_TYPE } from '../../../types';

const EventExtend = ({ children, onExtend, onExtendEnd, event }) => {
  const [isExtending, setIsExtending] = useState(false);

  return (
    <DraggableCore
      handle={`.${extendHandleClass}`}
      onDrag={() => {
        setIsExtending(true);
        onExtend();
        console.log('DRAGGING');
      }}
      onStop={() => {
        if (!isExtending) return false;
        setTimeout(() => setIsExtending(false));
        onExtendEnd(event);
      }}
    >
      <span>{children({ isExtending })}</span>
    </DraggableCore>
  );
};

EventExtend.defaultProps = {
  onExtend: () => null,
};

EventExtend.propTypes = {
  children: PropTypes.func.isRequired,
  event: EVENT_TYPE.isRequired,
  onExtend: PropTypes.func,
  onExtendEnd: PropTypes.func.isRequired,
};

export default EventExtend;
