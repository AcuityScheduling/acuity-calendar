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

/**
 * Get a new start and end depending on where the event has been dragged to
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {Object} params.deltaPosition - An object with x/y telling how far the event moved
 * @param {number} params.selectMinutesHeight - the height of one movement on grid
 * @param {number} params.selectMinutes - The amount of minutes of one movement on grid
 */
const getEventStartEnd = ({
  event,
  deltaPosition,
  selectMinutesHeight,
  selectMinutes,
}) => {
  let start = event.start.clone();
  let end = event.end.clone();

  const totalMinutes = getMinutesMoved({
    changeInY: deltaPosition.y,
    selectMinutes,
    selectMinutesHeight,
  });
  if (totalMinutes === 0) return { start, end };

  start.add(totalMinutes, 'minutes');
  end.add(totalMinutes, 'minutes');

  return {
    start,
    end,
  };
};

/**
 * Get the total number of minutes we've moved SNAPPED to the nearest selectMinutes
 * selectMinutes defaults to 15 minutes.
 *
 * @param {Object} params
 * @param {number} params.totalMinutes - Total minutes that we've moved so far
 * @param {number} params.selectMinutes
 */
const getMinutesMoved = ({ changeInY, selectMinutes, selectMinutesHeight }) => {
  if (changeInY === 0) return 0;
  const totalPositionMoves = changeInY / selectMinutesHeight;
  const totalMinutes = totalPositionMoves * selectMinutes;
  // Round to nearest selectMinutes and divide by select minutes to get total positions moved
  return Math.round(totalMinutes / selectMinutes) * selectMinutes;
};

/**
 * Get the total pixels that we'll need to change the top to for a snap effect
 *
 * @param {Object} params
 * @param {number} params.changeInY - The amount we dragged the event
 * @param {number} params.selectMinutes
 * @param {number} params.selectMinutesHeight
 */
const getTopChange = ({ changeInY, selectMinutes, selectMinutesHeight }) => {
  if (!changeInY) return 0;
  const minutesMoved = getMinutesMoved({
    changeInY,
    selectMinutes,
    selectMinutesHeight,
  });
  const positionsMoved = minutesMoved / selectMinutes;
  return selectMinutesHeight * positionsMoved;
};

const getSelectMinutesHeight = ({ stepMinutes, selectMinutes }) => {
  const selectMinutesRatio = stepMinutes / selectMinutes;
  const blockMinutesRatio = 60 / selectMinutes;
  const selectMinutesHeight =
    STEP_HEIGHTS[stepMinutes] / selectMinutesRatio +
    STEP_BORDER_WIDTH / blockMinutesRatio;

  return selectMinutesHeight;
};

const getDraggableClasses = ({ isDragging, wasDragged }) => {
  return makeClass(
    'step-grid__draggable-event',
    isDragging && 'step-grid__dragging-event',
    wasDragged && 'step-grid__dragged-event'
  );
};

export const getPosition = ({ columnMoves, columnWidths, columnIndex }) => {
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
    setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
    setXPosition(ui.x);
    setIsDragging(true);
  };

  const selectMinutesHeight = getSelectMinutesHeight({
    stepMinutes,
    selectMinutes,
  });

  const topChange = getTopChange({
    changeInY: deltaPosition.y,
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

    const leftPosition = getPosition({
      columnMoves,
      columnWidths,
      columnIndex,
    });

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
  });

  newEvent.start = eventStartEnd.start;
  newEvent.end = eventStartEnd.end;

  return (
    <Fragment>
      <DraggableCore
        onDrag={onDrag}
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

EventDragDrop.propTypes = {
  children: PropTypes.func.isRequired,
  columnIndex: PropTypes.number.isRequired,
  columnWidths: COLUMN_WIDTHS_TYPE.isRequired,
  event: EVENT_TYPE.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
};

export default EventDragDrop;
