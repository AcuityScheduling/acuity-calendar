import React, { useState } from "react";
import Draggable from "react-draggable";
import { getSelectMinutesHeight, getDndEventStartEnd } from "../utils";

const EventDragDrop = ({ event, stepMinutes, selectMinutes, children }) => {
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });

  const newEvent = Object.assign({}, event);

  const onDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  };

  const selectMinutesHeight = getSelectMinutesHeight({
    stepMinutes,
    selectMinutes
  });

  const eventStartEnd = getDndEventStartEnd({
    event,
    deltaPosition,
    selectMinutesHeight,
    selectMinutes
  });

  newEvent.start = eventStartEnd.start;
  newEvent.end = eventStartEnd.end;

  return (
    <Draggable
      onDrag={onDrag}
      grid={[160, selectMinutesHeight]}
      onStop={(...stuff) => console.log(stuff)}
    >
      {children(newEvent)}
    </Draggable>
  );
};

export default EventDragDrop;
