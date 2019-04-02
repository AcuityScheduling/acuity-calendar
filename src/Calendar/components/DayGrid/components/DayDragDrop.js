import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { DraggableCore } from 'react-draggable';
import { EVENT_TYPE } from '../../../types';
import { resetEventFormat } from '../../../utils';
import { STEP_BORDER_WIDTH } from '../../TimeGrid/constants';

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
      return {
        ...state,
        isDragging: false,
        wasDragged: true,
        position: { x: 0, y: 0 },
        vertChange: 0,
        horizChange: 0,
        rowMoves: 0,
        columnMoves: 0,
      };
    default:
      throw new Error('Dispatch action not recognized');
  }
};

const initialState = {
  rowMoves: 0,
  columnMoves: 0,
  isDragging: false,
  wasDragged: false,
  position: { x: 0, y: 0 },
  vertChange: 0,
  horizChange: 0,
};

const updateEvent = ({
  event,
  columnMoves,
  rowMoves,
  columnMovesPerRowChange,
}) => {
  const totalDayMoves = columnMoves + rowMoves * columnMovesPerRowChange;
  const start = event.start.clone().add(totalDayMoves, 'days');
  const end = event.end.clone().add(totalDayMoves, 'days');
  const padding = {};
  if (event.paddingTopStart) {
    padding.paddingTopStart = event.paddingTopStart
      .clone()
      .add(totalDayMoves, 'days');
  }
  if (event.paddingBottomEnd) {
    padding.paddingBottomEnd = event.paddingBottomEnd
      .clone()
      .add(totalDayMoves, 'days');
  }

  return { ...event, start, end, ...padding };
};

const DayDragDrop = ({
  children,
  cellDimensions,
  isDraggable,
  event,
  topEventOffset,
  onDrag,
  onDragEnd,
  columnMovesPerRowChange,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { width, height } = cellDimensions;
  const { x, y } = state.position;
  const { columnMoves, rowMoves, isDragging, vertChange, horizChange } = state;

  if (y < height * rowMoves) {
    dispatch({ type: 'moveUp', vertChange: height });
  }

  if (x > width * (columnMoves + 1)) {
    dispatch({
      type: 'moveRight',
      horizChange: width + STEP_BORDER_WIDTH * columnMoves,
    });
  }

  if (y > height * (rowMoves + 1)) {
    dispatch({ type: 'moveDown', vertChange: height });
  }

  if (x < width * columnMoves) {
    dispatch({ type: 'moveLeft', horizChange: width + STEP_BORDER_WIDTH });
  }

  const draggedEvent = updateEvent({
    event,
    columnMoves,
    rowMoves,
    columnMovesPerRowChange,
  });

  return (
    <DraggableCore
      onDrag={(e, ui) => {
        if (!isDraggable({ event })) return false;
        dispatch({
          type: 'startDragging',
          position: { x: ui.x, y: ui.y },
          initialVertChange: topEventOffset,
        });
        onDrag(e, ui);
      }}
      onStop={(e, ui) => {
        // Check if we hit the onDrag event. If we didn't, this is a click
        if (!isDragging) return false;
        onDragEnd({ e, event: resetEventFormat(draggedEvent) });
        setTimeout(() => dispatch({ type: 'stopDragging' }));
      }}
    >
      {children({ draggedEvent, vertChange, horizChange })}
    </DraggableCore>
  );
};

DayDragDrop.defaultProps = {
  isDraggable: () => true,
  onDrag: () => null,
  onDragEnd: () => null,
};

DayDragDrop.propTypes = {
  cellDimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.func.isRequired,
  columnMovesPerRowChange: PropTypes.number.isRequired,
  event: EVENT_TYPE.isRequired,
  // When we start dragging and dropping we want to move the month
  // event up to the first position if it's not there already this top offset
  // is the pixels from the top position we have to move
  isDraggable: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  topEventOffset: PropTypes.number.isRequired,
};

export default DayDragDrop;
