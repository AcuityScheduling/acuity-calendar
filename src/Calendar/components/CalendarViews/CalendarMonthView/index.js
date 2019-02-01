import React from "react";
import styles from "./index.module.css";
import { getMonthGrid, cellWidth } from "./utils";
import { getDayNames } from "../../../utils";
import { FIRST_DAY_TYPE, MOMENT_TYPE } from "../../../types";
import CalendarMonthCell from "./components/CalendarMonthCell";

const CalendarMonthView = ({ selectedDate, firstDay }) => {
  const monthGrid = getMonthGrid({ date: selectedDate, firstDay });
  const dayNames = getDayNames({ firstDay });

  let countDays = 0;
  let countRows = 0;
  return (
    <div className={styles.wrapper}>
      <div className={styles["day-name-row"]}>
        {dayNames.map(dayName => {
          return (
            <div style={cellWidth} key={dayName}>
              {dayName}
            </div>
          );
        })}
      </div>
      <div className={styles.weekdays}>
        {monthGrid.map(row => {
          countRows += 1;

          return (
            <div className={styles.row} key={`monthColumn${countRows}`}>
              {row.map(day => {
                countDays += 1;
                return (
                  <CalendarMonthCell
                    date={day}
                    events={[]}
                    key={`monthCell${countDays}`}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

CalendarMonthView.propTypes = {
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired
};

export default CalendarMonthView;
