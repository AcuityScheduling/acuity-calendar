import React from 'react';
import PropTypes from 'prop-types';
import { DraggableCore } from 'react-draggable';
import { makeClass } from '../../../utils';

export const extendHandleClass = makeClass('step-grid__event-handle');

const EventExtend = ({ children }) => {
  return (
    <DraggableCore
      handle={`.${extendHandleClass}`}
      onDrag={() => {
        console.log('DRAGGING');
      }}
    >
      <span>{children()}</span>
    </DraggableCore>
  );
};

EventExtend.propTypes = {
  children: PropTypes.func.isRequired,
};

export default EventExtend;
