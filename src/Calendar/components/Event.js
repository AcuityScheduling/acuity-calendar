import React, { useState } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import { EVENT_TYPE } from "../types";
import { makeClass } from "../utils";
import "./Event.scss";
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from "./Times/constants";

const getDisplayTime = event => {
  let startMinutes = `:${event.start.format("mm")}`;
  if (startMinutes !== "00") {
    startMinutes = "";
  }
  const start = `${event.start.format("h")}${startMinutes}`;

  let endMinutes = `:${event.end.format("mm")}`;
  if (endMinutes !== "00") {
    endMinutes = "";
  }
  const end = `${event.end.format("h")}${startMinutes}${event.end.format("a")}`;

  return `${start} - ${end}`;
};

const Event = ({
  event,
  onSelectEvent,
  stepMinutes,
  selectMinutes,
  ...restProps
}) => {
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });

  const onDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  };

  const selectMinutesRatio = stepMinutes / selectMinutes;
  const blockMinutesRatio = 60 / selectMinutes;
  const selectMinutesHeight =
    STEP_HEIGHTS[stepMinutes] / selectMinutesRatio +
    STEP_BORDER_WIDTH / blockMinutesRatio;

  return (
    <Draggable
      onDrag={onDrag}
      grid={[160, selectMinutesHeight]}
      onStop={() => console.log("stopped")}
    >
      <div
        className={makeClass("times__event")}
        role="button"
        onClick={e => {
          e.stopPropagation();
          onSelectEvent(event);
        }}
        {...restProps}
      >
        <span className={makeClass("times__event-title")}>{event.title}</span>
        <span className={makeClass("times__event-time")}>
          {getDisplayTime(event)}
        </span>
      </div>
    </Draggable>
  );
};

Event.propTypes = {
  onSelectEvent: PropTypes.func.isRequired,
  event: EVENT_TYPE.isRequired
};

export default Event;
