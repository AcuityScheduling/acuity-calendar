import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DraggableCore } from 'react-draggable';
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from '../../StepGrid/constants';
import {
  EVENT_TYPE,
  STEP_MINUTES_TYPE,
  COLUMN_WIDTHS_TYPE,
} from '../../../types';
import { makeClass } from '../../../utils';
import { getMinutesMoved, getIsInMoveableRange } from '../utils';
import { handleCenterClass } from '..';

/**
 * Get a new start and end depending on where the event has been dragged to
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {Object} params.deltaPosition - An object with x/y telling how far the event moved
 * @param {number} params.selectMinutesHeight - the height of one movement on grid
 * @param {number} params.selectMinutes - The amount of minutes of one movement on grid
 * @param {number} params.columnMoves - The amount of columns that were dragged passed
 */
const getEventStartEnd = ({
  event,
  deltaPosition,
  selectMinutesHeight,
  selectMinutes,
  columnMoves,
}) => {
  let start = event.start.clone();
  let end = event.end.clone();

  let totalMinutes = getMinutesMoved({
    changeInY: deltaPosition.y,
    event,
    selectMinutes,
    selectMinutesHeight,
  });
  if (totalMinutes === 0) return { start, end };

  start.add(totalMinutes, 'minutes');
  end.add(totalMinutes, 'minutes');

  start.add(columnMoves, 'days');
  end.add(columnMoves, 'days');

  return {
    start,
    end,
  };
};

/**
 * Get the total pixels that we'll need to change the top to for a snap effect
 *
 * @param {Object} params
 * @param {number} params.changeInY - The amount we dragged the event
 * @param {number} params.selectMinutes
 * @param {number} params.selectMinutesHeight
 */
const getTopChange = ({
  changeInY,
  event,
  selectMinutes,
  selectMinutesHeight,
}) => {
  if (!changeInY) return 0;
  let minutesMoved = getMinutesMoved({
    event,
    changeInY,
    selectMinutes,
    selectMinutesHeight,
  });

  const positionsMoved = minutesMoved / selectMinutes;
  return selectMinutesHeight * positionsMoved;
};

/**
 * Get the height of the total amount of select minutues
 *
 * @param {Object} params
 * @param {5|10|15|20|30|60} stepMinutes
 * @param {5|10|15|20|30|60} selectMinutes
 */
const getSelectMinutesHeight = ({ stepMinutes, selectMinutes }) => {
  const selectMinutesRatio = stepMinutes / selectMinutes;
  const blockMinutesRatio = 60 / selectMinutes;
  const selectMinutesHeight =
    STEP_HEIGHTS[stepMinutes] / selectMinutesRatio +
    STEP_BORDER_WIDTH / blockMinutesRatio;

  return selectMinutesHeight;
};

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

  const onDrag = (e, ui) => {
    const { x, y } = deltaPosition;

    if (
      getIsInMoveableRange({
        event,
        changeInY: y,
        selectMinutes,
        selectMinutesHeight,
      })
    ) {
      setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
      setXPosition(ui.x);
      setIsDragging(true);
    }
  };

  const selectMinutesHeight = getSelectMinutesHeight({
    stepMinutes,
    selectMinutes,
  });

  const topChange = getTopChange({
    changeInY: deltaPosition.y,
    event,
    selectMinutes,
    selectMinutesHeight,
  });

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

  const columnMoves = currentColumn - columnIndex;

  // Set column change
  useEffect(() => {
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
  });

  const eventStartEnd = getEventStartEnd({
    event,
    deltaPosition,
    selectMinutesHeight,
    selectMinutes,
    columnMoves,
  });

  newEvent.start = eventStartEnd.start;
  newEvent.end = eventStartEnd.end;

  return (
    <Fragment>
      <DraggableCore
        onDrag={onDrag}
        handle={`.${handleCenterClass}`}
        onStop={(e, ui) => {
          // Check if we hit the onDrag event. If we didn't, this is a click
          if (!isDragging) return false;
          setTimeout(() => setIsDragging(false));
          setWasDragged(true);
          onDragEnd(newEvent);
        }}
      >
        {React.cloneElement(
          children({
            draggedEvent: newEvent,
            topChange,
            leftChange,
            currentColumnWidth,
            isDragging,
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
  columnIndex: PropTypes.number.isRequired,
  columnWidths: COLUMN_WIDTHS_TYPE.isRequired,
  event: EVENT_TYPE.isRequired,
  isDraggable: PropTypes.bool,
  onDragEnd: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
};

export default EventDragDrop;
