import React from "react";
import get from "lodash/get";
import moment from "moment";
import CalendarTimes from "../../CalendarTimes";
import CalendarDay from "../../CalendarTimes/components/CalendarDay";
import CalendarCurrentTimeIndicator from "../../CalendarTimes/components/CalendarCurrentTimeIndicator";
import { getWeekList } from "./utils";
import { makeClass, cellWidth } from "../../../utils";
import { getTodayClass } from "../../CalendarTimes/utils";
// import PropTypes from 'prop-types';

const columnStyles = {
  minWidth: cellWidth
};

const CalendarWeekView = ({
  selectedDate,
  firstDay,
  events,
  stepMinutes,
  ...restProps
}) => {
  const dateList = getWeekList({ date: selectedDate, firstDay });

  return (
    <CalendarTimes
      selectedDate={selectedDate}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      {...restProps}
      renderHeader={() =>
        dateList.map(date => {
          return (
            <h2
              className={`${makeClass("times__header-column")}${getTodayClass(
                date
              )}`}
              key={`dayHeader${date.date()}`}
              style={columnStyles}
            >
              {date.format("dddd, MMM D")}
            </h2>
          );
        })
      }
      renderColumns={({ currentTime }) =>
        dateList.map(date => {
          const eventsForDay = get(events, date.format("YYYY-MM-DD"), {});
          return (
            <CalendarDay
              events={eventsForDay}
              date={date}
              key={`weekColumn${date.date()}`}
              currentTime={currentTime}
              stepMinutes={stepMinutes}
              renderCurrentTimeIndicator={
                date.isSame(moment(), "day") && (
                  <CalendarCurrentTimeIndicator
                    stepMinutes={stepMinutes}
                    currentTime={currentTime}
                    isToday
                  />
                )
              }
              {...restProps}
            />
          );
        })
      }
    />
  );
};

CalendarWeekView.propTypes = {};

export default CalendarWeekView;
