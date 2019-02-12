import React from "react";
import get from "lodash/get";
import moment from "moment";
import Times from "../../Times";
import Day from "../../Times/components/Day";
import CurrentTimeIndicator from "../../Times/components/CurrentTimeIndicator";
import { getWeekList, } from "./utils";
import { makeClass, cellWidth } from "../../../utils";
import { getTodayClass } from "../../Times/utils";
// import PropTypes from 'prop-types';

const columnStyles = {
  minWidth: cellWidth
};

const WeekView = ({
  selectedDate,
  firstDay,
  events,
  stepMinutes,
  ...restProps
}) => {
  const dateList = getWeekList({ date: selectedDate, firstDay });

  return (
    <Times
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
            <Day
              events={eventsForDay}
              date={date}
              key={`weekColumn${date.date()}`}
              currentTime={currentTime}
              stepMinutes={stepMinutes}
              renderCurrentTimeIndicator={
                date.isSame(moment(), "day") && (
                  <CurrentTimeIndicator
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

WeekView.propTypes = {};

export default WeekView;
