import React from "react";
import PropTypes from "prop-types";
import { getMonthGrid, getDayNames } from "./utils";
import { cellWidth, makeClass } from "../../../utils";
import { FIRST_DAY_TYPE, MOMENT_TYPE } from "../../../types";
import MonthCell from "./components/MonthCell";
import "./index.scss";

const dayStyles = {
  width: cellWidth
};

const MonthView = ({
  events,
  selectedDate,
  firstDay,
  onSelectEvent,
  onSelectSlot,
  renderEvent
}) => {
  const monthGrid = getMonthGrid({ date: selectedDate, firstDay });
  const dayNames = getDayNames({ firstDay });

  let countDays = 0;
  let countRows = 0;
  return (
    <div className={makeClass("month")}>
      <div className={makeClass("month__row", "month__header")}>
        {dayNames.map(dayName => {
          return (
            <div
              className={makeClass("month__day-name")}
              style={dayStyles}
              key={dayName}
            >
              {dayName}
            </div>
          );
        })}
      </div>
      <div>
        {monthGrid.map(row => {
          countRows += 1;

          return (
            <div
              className={makeClass("month__row")}
              key={`monthColumn${countRows}`}
            >
              {row.map(dayDetails => {
                countDays += 1;

                return (
                  <MonthCell
                    date={dayDetails.date}
                    isInRange={dayDetails.isInRange}
                    events={events}
                    key={`monthCell${countDays}`}
                    onSelectEvent={onSelectEvent}
                    onSelectSlot={onSelectSlot}
                    renderEvent={renderEvent}
                  >
                  </MonthCell>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

MonthView.propTypes = {
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  events: PropTypes.object.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  renderEvent: PropTypes.func
};

export default MonthView;
