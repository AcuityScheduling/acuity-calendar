import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { DraggableCore } from 'react-draggable';
import { EVENT_TYPE } from '../../../../types';

const MonthDragDrop = ({ children, cellDimensions, event }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [columnMoves, setColumnMoves] = useState(0);
  const [rowMoves, setRowMoves] = useState(0);

  const { width, height } = cellDimensions;
  const { x, y } = position;

  if (x < width * columnMoves) {
    // moved left
    console.log('left');
    setColumnMoves(columnMoves - 1);
  }

  if (x > width * (columnMoves + 1)) {
    // moved right
    console.log('right');
    setColumnMoves(columnMoves + 1);
  }

  if (y < height * rowMoves) {
    // moved up
    console.log('up');
    setRowMoves(rowMoves - 1);
  }

  if (y > height * (rowMoves + 1)) {
    // Moved down
    console.log('down');
    setRowMoves(rowMoves + 1);
  }

  return (
    <DraggableCore
      onDrag={(e, ui) => {
        setPosition({ x: ui.x, y: ui.y });
        setIsDragging(true);
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
