import React from "react";
import styles from "./index.module.css";
import { getMonthGrid } from "./utils";
import CalendarMonthCell from "./components/CalendarMonthCell";

const CalendarMonthView = ({ selectedDate }) => {
  const monthGrid = getMonthGrid({ date: selectedDate });

  let countDays = 0;
  let countRows = 0;
  return (
    <div className={styles.wrapper}>
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
  );
};

export default CalendarMonthView;
