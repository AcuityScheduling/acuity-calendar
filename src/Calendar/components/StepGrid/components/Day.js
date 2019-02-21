import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { MOMENT_TYPE, STEP_MINUTES_TYPE } from "../../../types";
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from "../constants";
import { getTodayClass } from "../utils";
import "./Day.scss";
import { makeClass } from "../../../utils";
import StepGridEvents from "./StepGridEvents";

const Day = ({
  events,
  stepDetails,
  date,
  stepMinutes,
  onSelectEvent,
  onSelectSlot,
  selectMinutes,
  renderCurrentTimeIndicator,
  renderEvent
}) => {
  const totalHeight = useMemo(() => {
    const totalStepsPerBlock = 60 / stepMinutes;
    const aggregateBorderHeight = totalStepsPerBlock * STEP_BORDER_WIDTH * 24;
    return (
      STEP_HEIGHTS[stepMinutes] * totalStepsPerBlock * 24 +
      (aggregateBorderHeight - 1 * STEP_BORDER_WIDTH * 25)
    );
  }, [stepMinutes]);

  const getClickedTime = e => {
    const rect = e.target.getBoundingClientRect();
    const verticalClick = e.clientY - rect.top;

    const stepHeight = STEP_HEIGHTS[stepMinutes];
    const pixelsPerMinute = stepHeight / stepMinutes;
    const minutesFromMidnight = verticalClick / pixelsPerMinute;
    const selectedTime = date
      .clone()
      .startOf("day")
      .add(minutesFromMidnight, "minutes");

    const rounded =
      Math.round(selectedTime.clone().minute() / selectMinutes) * selectMinutes;

    return selectedTime
      .clone()
      .minute(rounded)
      .second(0);
  };

  const totalColumns = Object.keys(events).length || 1;
  const minWidth = `${totalColumns * 190}px`;

  return (
    <div
      className={`${makeClass("step-grid__column")}${getTodayClass(date)}`}
      key={`weekView${date.day()}`}
      style={{
        height: `${totalHeight}px`,
        minWidth
      }}
      onClick={e => {
        onSelectSlot(getClickedTime(e));
      }}
    >
      {renderCurrentTimeIndicator}
      <StepGridEvents
        stepDetails={stepDetails}
        events={events}
        stepMinutes={stepMinutes}
        selectMinutes={selectMinutes}
        onSelectEvent={onSelectEvent}
        renderEvent={renderEvent}
      />
    </div>
  );
};

Day.defaultProps = {
  renderCurrentTimeIndicator: null,
  renderEvent: null
};

Day.propTypes = {
  events: PropTypes.object.isRequired,
  date: MOMENT_TYPE.isRequired,
  stepMinutes: STEP_MINUTES_TYPE,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE,
  renderCurrentTimeIndicator: PropTypes.node,
  renderEvent: PropTypes.func
};

export default Day;
