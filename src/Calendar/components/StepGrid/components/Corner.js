import React from "react";
import "./Corner.scss";
import { makeClass } from "../../../utils";

const Corner = React.forwardRef((props, ref) => {
  return (
    <div className={makeClass("step-grid__corner")} ref={ref}>
      <h2>Calender Timer</h2>
    </div>
  );
});

export default Corner;
