import React from "react";
import CalendarTimes from "../../CalendarTimes";
import { getWeekList, getTodayClass } from "./utils";
import { makeClass, cellWidth } from "../../../utils";
// import PropTypes from 'prop-types';

/* <CalendarDay
      events={eventsForDay}
      date={date}
      key={`timeBlocks${calendarId || date.date()}`}
      totalStepsPerBlock={totalStepsPerBlock}
      stepMinutes={stepMinutes}
      selectMinutes={selectMinutes}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      currentTime={currentTime}
      renderCurrentTimeIndicator={
        date.isSame(moment(), "day") && (
          <CalendarCurrentTimeIndicator
            stepMinutes={stepMinutes}
            currentTime={currentTime}
            isToday
          />
        )
      }
    /> */

const columnStyles = {
  minWidth: cellWidth
};

const CalendarWeekView = ({ selectedDate, firstDay, ...restProps }) => {
  const dateList = getWeekList({ date: selectedDate, firstDay });

  return (
    <CalendarTimes
      selectedDate={selectedDate}
      firstDay={firstDay}
      {...restProps}
      renderHeader={() =>
        dateList.map(date => {
          return (
            <h2
              className={`${makeClass("times__header")}${getTodayClass(date)}`}
              key={`dayHeader${date.date()}`}
              style={columnStyles}
            >
              {date.format("dddd, MMM D")}
            </h2>
          );
        })
      }
      renderColumns={() => {}}
    />
  );
};

CalendarWeekView.propTypes = {};

export default CalendarWeekView;
