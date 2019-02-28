import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DraggableCore } from 'react-draggable';
import {
  EVENT_TYPE,
  STEP_MINUTES_TYPE,
  COLUMN_WIDTHS_TYPE,
} from '../../../types';
import { makeClass, resetEventFormat } from '../../../utils';
import {
  getSelectMinutesHeight,
  getDragVerticalChange,
  getDraggedEventStartEnd,
} from '../utils';
import { handleCenterClass } from '..';

/**
 * Get classes that we're going to attach to an event while we're
 * dragging it
 *
 * @param {Object} params
 * @param {boolean} params.isDragging
 * @param {boolean} params.wasDragged
 */
const getDraggableClasses = ({ isDragging, wasDragged }) => {
  return makeClass(
    'step-grid__draggable-event',
    isDragging && 'step-grid__dragging-event',
    wasDragged && 'step-grid__dragged-event'
  );
};

/**
 * Get the 'left' position of an event when it is dragged
 *
 * @param {Object} params
 * @param {number} params.columnMoves
 * @param {number[]} params.columnWidths
 * @param {number} params.columnIndex
 */
export const getLeftPosition = ({ columnMoves, columnWidths, columnIndex }) => {
  let left = 0;
  for (let i = 1; i <= Math.abs(columnMoves); i += 1) {
    // Moving left
    if (columnMoves < 0) {
      left = left + columnWidths[columnIndex - i] * -1;
    }
    // Moving right
    if (columnMoves > 0) {
      left = left + columnWidths[columnIndex + i - 1];
    }
  }
  return left;
};

const EventDragDrop = ({
  event,
  stepMinutes,
  selectMinutes,
  columnHeight,
  columnWidths,
  columnIndex,
  onDragEnd,
  children,
}) => {
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [xPosition, setXPosition] = useState(0);
  const [leftChange, setLeftChange] = useState(0);
  const [currentColumnWidth, setCurrentColumnWidth] = useState(
    columnWidths[columnIndex]
  );
  const [isDragging, setIsDragging] = useState(false);
  const [wasDragged, setWasDragged] = useState(false);
  const [currentColumn, setCurrentColumn] = useState(columnIndex);

  const newEvent = Object.assign({}, event);

  const selectMinutesHeight = getSelectMinutesHeight({
    stepMinutes,
    selectMinutes,
  });

  const topChange = getDragVerticalChange({
    event,
    lastY: deltaPosition.y,
    selectMinutes,
    selectMinutesHeight,
  });

  const columnMoves = currentColumn - columnIndex;

  const changeColumn = () => {
    // Make sure the current column width is actually the current column width
    if (currentColumnWidth !== columnWidths[currentColumn]) {
      setCurrentColumnWidth(columnWidths[currentColumn]);
    }

    const leftPosition = getLeftPosition({
      columnMoves,
      columnWidths,
      columnIndex,
    });

    // Make sure the leftChange is up to date with the position
    if (leftPosition !== leftChange) {
      setLeftChange(leftPosition);
    }

    const leftBound = leftPosition;
    const rightBound = leftPosition + currentColumnWidth;

    // Moving Left
    if (xPosition < leftBound && currentColumn !== 0) {
      setNewColumn({ direction: -1, left: leftPosition });
    }
    // Moving Right
    if (xPosition > rightBound && currentColumn !== columnWidths.length - 1) {
      setNewColumn({ direction: 1, left: leftPosition });
    }
  };

  /**
   * Set the state that we changed columns
   *
   * @param {Object} params - 1 is to the right -1 is to the left
   * @param {1|-1} direction - 1 is to the right -1 is to the left
   * @param {number} left - total left pixels we're moving
   */
  const setNewColumn = ({ direction, left }) => {
    setLeftChange(left);
    setCurrentColumnWidth(columnWidths[currentColumn + direction]);
    setCurrentColumn(currentColumn + direction);
  };

  const eventStartEnd = getDraggedEventStartEnd({
    event,
    deltaPosition,
    selectMinutesHeight,
    selectMinutes,
  });

  newEvent.start = eventStartEnd.start.add(columnMoves, 'days');
  newEvent.end = eventStartEnd.end.add(columnMoves, 'days');
  newEvent.top = event.top + topChange;

  changeColumn();

  return (
    <Fragment>
      <DraggableCore
        onDrag={(e, ui) => {
          const { x, y } = deltaPosition;
          setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
          setXPosition(ui.x);
          setIsDragging(true);
        }}
        handle={`.${handleCenterClass}`}
        onStop={(e, ui) => {
          // Check if we hit the onDrag event. If we didn't, this is a click
          if (!isDragging) return false;
          setDeltaPosition({ x: 0, y: 0 });
          setTimeout(() => setIsDragging(false));
          setWasDragged(true);
          onDragEnd(resetEventFormat(newEvent));
        }}
      >
        {React.cloneElement(
          children({
            draggedEvent: newEvent,
            leftChange,
            currentColumnWidth,
            isDragging,
            wasDragged,
            isDndPlaceholder: false,
          }),
          {
            className: getDraggableClasses({ isDragging, wasDragged }),
          }
        )}
      </DraggableCore>
      {isDragging && (
        <div className={makeClass('step-grid__dragging-placeholder-event')}>
          {children({
            draggedEvent: event,
            isDragging,
            topChange: 0,
            isDndPlaceholder: true,
          })}
        </div>
      )}
    </Fragment>
  );
};

EventDragDrop.defaultProps = {
  isDraggable: true,
};

EventDragDrop.propTypes = {
  children: PropTypes.func.isRequired,
  columnHeight: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
  columnWidths: COLUMN_WIDTHS_TYPE.isRequired,
  event: EVENT_TYPE.isRequired,
  isDraggable: PropTypes.bool,
  onDragEnd: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
};

export default EventDragDrop;
