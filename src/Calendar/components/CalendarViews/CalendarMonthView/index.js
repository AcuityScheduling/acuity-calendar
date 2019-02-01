import React from "react";
import styles from "./index.module.css";
import { getMonthGrid } from "./utils";
import CalendarMonthCell from "./components/CalendarMonthCell";

const CalendarMonthView = ({ selectedDate }) => {
  const monthGrid = getMonthGrid({ date: selectedDate });

  let countDays = 0;
  let countColumns = 0;
  return (
    <div className={styles.wrapper}>
      {monthGrid.map(column => {
        countColumns += 1;

        return (
          <div className={styles.column} key={`monthColumn${countColumns}`}>
            {column.map(day => {
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
