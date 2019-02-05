import React from "react";
import styles from "./CalendarTimeBlocks.module.css";
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from "../constants";
import { getTodayColumnStyles } from "../utils";

const CalendarTimeBlocks = ({
  totalStepsPerBlock,
  stepMinutes,
  date,
  onSelectSlot
}) => {
  // We need to remove the height added by borders to get everything to line
  // up correctly
  const extraBorderHeight =
    (totalStepsPerBlock * STEP_BORDER_WIDTH - STEP_BORDER_WIDTH) /
    totalStepsPerBlock;
  const stepHeight = STEP_HEIGHTS[stepMinutes];
  const stepHeightNoBorder = `${stepHeight - extraBorderHeight}px`;
  const dayDate = date.date();

  const times = [];
  for (let i = 0; i < 24 * totalStepsPerBlock; i += 1) {
    times.push(
      <div
        className={styles.time_block}
        key={`timeBlock${i}${dayDate}`}
        style={{
          height: stepHeightNoBorder,
          ...getTodayColumnStyles(date)
        }}
        role="button"
        onClick={() => {
          onSelectSlot(
            date
              .clone()
              .startOf("day")
              .add(stepMinutes * i, "minutes")
          );
        }}
      >
        {i}
      </div>
    );
  }

  return times;
};

export default CalendarTimeBlocks;
