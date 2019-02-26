import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DraggableCore } from 'react-draggable';
import { extendHandleClass } from '..';
import { EVENT_TYPE } from '../../../types';

const EventExtend = ({ children, onExtendEnd, event }) => {
  const [isExtending, setIsExtending] = useState(false);

  return (
    <DraggableCore
      handle={`.${extendHandleClass}`}
      onDrag={() => {
        setIsExtending(true);
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

EventExtend.propTypes = {
  children: PropTypes.func.isRequired,
  event: EVENT_TYPE.isRequired,
  onExtendEnd: PropTypes.func.isRequired,
};

export default EventExtend;
