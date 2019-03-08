import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { DraggableCore } from 'react-draggable';
import { EVENT_TYPE } from '../../../../types';

const MonthDragDrop = ({ children, cellDimensions, event }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  console.log('cellDimensions: ', cellDimensions);
  return (
    <DraggableCore
      onDrag={(e, ui) => {
        setPosition({ x: ui.x, y: ui.y });
        setIsDragging(true);
        console.log('position: ', position);
        // onDrag(e, ui);
      }}
      onStop={(e, ui) => {
        // Check if we hit the onDrag event. If we didn't, this is a click
        if (!isDragging) return false;
        // setDeltaPosition({ x: 0, y: 0 });
        setTimeout(() => setIsDragging(false));
        // setWasDragged(true);
        // onDragEnd(resetEventFormat(updatedEvent));
      }}
    >
      {children({ draggedEvent: event })}
    </DraggableCore>
  );
};

MonthDragDrop.propTypes = {
  cellDimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.func.isRequired,
  event: EVENT_TYPE.isRequired,
};

export default MonthDragDrop;
