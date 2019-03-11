import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { DraggableCore } from 'react-draggable';
import { EVENT_TYPE } from '../../../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case 'moveUp':
      return {
        ...state,
        rowMoves: state.rowMoves - 1,
        vertChange: state.vertChange - action.vertChange,
      };
    case 'moveRight':
      return {
        ...state,
        columnMoves: state.columnMoves + 1,
        horizChange: state.horizChange + action.horizChange,
      };
    case 'moveDown':
      return {
        ...state,
        rowMoves: state.rowMoves + 1,
        vertChange: state.vertChange + action.vertChange,
      };
    case 'moveLeft':
      return {
        ...state,
        columnMoves: state.columnMoves - 1,
        horizChange: state.horizChange - action.horizChange,
      };
    case 'startDragging':
      const { vertChange } = state;
      return {
        ...state,
        isDragging: true,
        position: action.position,
        vertChange: vertChange === 0 ? action.initialVertChange : vertChange,
      };
    case 'stopDragging':
      return { ...state, isDragging: false };
    default:
      throw new Error('Dispatch action not recognized');
  }
};

const initialState = {
  rowMoves: 0,
  columnMoves: 0,
  isDragging: false,
  position: { x: 0, y: 0 },
  vertChange: 0,
  horizChange: 0,
};

const MonthDragDrop = ({ children, cellDimensions, event, topEventOffset }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { width, height } = cellDimensions;
  const { x, y } = state.position;
  const { columnMoves, rowMoves, isDragging, vertChange, horizChange } = state;

  if (y < height * rowMoves) {
    dispatch({ type: 'moveUp', vertChange: height });
  }

  if (x > width * (columnMoves + 1)) {
    dispatch({ type: 'moveRight', horizChange: width });
  }

  if (y > height * (rowMoves + 1)) {
    dispatch({ type: 'moveDown', vertChange: height });
  }

  if (x < width * columnMoves) {
    dispatch({ type: 'moveLeft', horizChange: width });
  }

  console.log('vertChange: ', vertChange);
  console.log('horizChange: ', horizChange);
  return (
    <DraggableCore
      onDrag={(e, ui) => {
        dispatch({
          type: 'startDragging',
          position: { x: ui.x, y: ui.y },
          initialVertChange: topEventOffset,
        });
        // onDrag(e, ui);
      }}
      onStop={(e, ui) => {
        // Check if we hit the onDrag event. If we didn't, this is a click
        if (!isDragging) return false;
        // setDeltaPosition({ x: 0, y: 0 });
        setTimeout(() => dispatch({ type: 'stopDragging' }));
        // setWasDragged(true);
        // onDragEnd(resetEventFormat(updatedEvent));
      }}
    >
      {children({ draggedEvent: event, vertChange, horizChange })}
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
  // When we start dragging and dropping we want to move the month
  // event up to the first position if it's not there already this top offset
  // is the pixels from the top position we have to move
  topEventOffset: PropTypes.number.isRequired,
};

export default MonthDragDrop;
