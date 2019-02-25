import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from '../../StepGrid/constants';
import { EVENT_TYPE, STEP_MINUTES_TYPE } from '../../../types';

/**
 * Get a new start and end depending on where the event has been dragged to
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {Object} params.deltaPosition - An object with x/y telling how far the event moved
 * @param {number} params.selectMinutesHeight - the height of one movement on grid
 * @param {number} params.selectMinutes - The amount of minutes of one movement on grid
 */
const getDndEventStartEnd = ({
  event,
  deltaPosition,
  selectMinutesHeight,
  selectMinutes,
}) => {
  let start = event.start.clone();
  let end = event.end.clone();
  if (deltaPosition.y !== 0) {
    const totalPositionMoves = deltaPosition.y / selectMinutesHeight;
    const totalMinutes = totalPositionMoves * selectMinutes;

    start.add(totalMinutes, 'minutes');
    end.add(totalMinutes, 'minutes');
  }
  return {
    start,
    end,
  };
};

const getSelectMinutesHeight = ({ stepMinutes, selectMinutes }) => {
  const selectMinutesRatio = stepMinutes / selectMinutes;
  const blockMinutesRatio = 60 / selectMinutes;
  const selectMinutesHeight =
    STEP_HEIGHTS[stepMinutes] / selectMinutesRatio +
    STEP_BORDER_WIDTH / blockMinutesRatio;

  return selectMinutesHeight;
};

const getColumnWidth = () => 160;

const EventDragDrop = ({ event, stepMinutes, selectMinutes, children }) => {
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const newEvent = Object.assign({}, event);

  const onDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
    setIsDragging(true);
    console.log('isDragging: ', isDragging);
  };

  const selectMinutesHeight = getSelectMinutesHeight({
    stepMinutes,
    selectMinutes,
  });

  const columnWidth = getColumnWidth();

  const eventStartEnd = getDndEventStartEnd({
    event,
    deltaPosition,
    selectMinutesHeight,
    selectMinutes,
  });

  newEvent.start = eventStartEnd.start;
  newEvent.end = eventStartEnd.end;

  return (
    <Draggable
      onDrag={onDrag}
      grid={[columnWidth, selectMinutesHeight]}
      onStop={(e, ui) => {
        setTimeout(() => setIsDragging(false));
        const totalMoves = ui.lastY / selectMinutesHeight;
      }}
    >
      {children({ draggedEvent: newEvent, isDragging })}
    </Draggable>
  );
};

EventDragDrop.propTypes = {
  children: PropTypes.func.isRequired,
  event: EVENT_TYPE.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
};

export default EventDragDrop;
