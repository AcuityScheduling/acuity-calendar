import React from "react";
import "./CalendarCorner.scss";
import { makeClass } from "../../../../utils";

const CalendarCorner = React.forwardRef((props, ref) => {
  return (
    <div className={makeClass("days__corner")} ref={ref}>
      <h2>Calender Timer</h2>
    </div>
  );
});

export default CalendarCorner;
