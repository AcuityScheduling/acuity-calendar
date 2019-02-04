import React from "react";
import styles from "./CalendarCorner.module.css";

const CalendarCorner = React.forwardRef((props, ref) => {
  return (
    <div className={styles.wrapper} ref={ref}>
      <h2>C</h2>
    </div>
  );
});

export default CalendarCorner;
