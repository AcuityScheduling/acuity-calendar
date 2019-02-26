import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DraggableCore } from 'react-draggable';
import { extendHandleClass } from '..';

const EventExtend = ({ children }) => {
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
      }}
    >
      <span>{children({ isExtending })}</span>
    </DraggableCore>
  );
};

EventExtend.propTypes = {
  children: PropTypes.func.isRequired,
};

export default EventExtend;
