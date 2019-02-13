import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import moment from "moment";
import StepGrid from "../../StepGrid";
import Day from "../../StepGrid/components/Day";
import CurrentTimeIndicator from "../../StepGrid/components/CurrentTimeIndicator";
import { getWeekList } from "./utils";
import { makeClass } from "../../../utils";
import { getTodayClass } from "../../StepGrid/utils";
import { MOMENT_TYPE, FIRST_DAY_TYPE, STEP_MINUTES_TYPE } from "../../../types";

const WeekView = ({
  selectedDate,
  firstDay,
  stepMinutes,
  onSelectEvent,
  onSelectSlot,
  selectMinutes,
  renderEvent,
  renderCorner,
  events
}) => {
  const dateList = getWeekList({ date: selectedDate, firstDay });

  return (
    <StepGrid
      selectedDate={selectedDate}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      selectMinutes={selectMinutes}
      renderCorner={renderCorner}
      renderHeader={() =>
        dateList.map(date => {
          return (
            <div
              className={`${makeClass(
                "step-grid__header-column"
              )}${getTodayClass(date)}`}
              key={`dayHeader${date.date()}`}
            >
              <h2>{date.format("dddd, MMM D")}</h2>
            </div>
          );
        })
      }
      renderColumns={({ currentTime }) =>
        dateList.map(date => {
          const eventsForDay = get(events, date.format("YYYY-MM-DD"), []);
          return (
            <Day
              events={eventsForDay}
              date={date}
              onSelectEvent={onSelectEvent}
              onSelectSlot={onSelectSlot}
              selectMinutes={selectMinutes}
              key={`weekColumn${date.day()}`}
              currentTime={currentTime}
              stepMinutes={stepMinutes}
              renderEvent={renderEvent}
              renderCurrentTimeIndicator={
                date.isSame(moment(), "day") && (
                  <CurrentTimeIndicator
                    stepMinutes={stepMinutes}
                    currentTime={currentTime}
                    isToday
                  />
                )
              }
            />
          );
        })
      }
    />
  );
};

WeekView.defaultProps = {
  renderEvent: null,
  renderCorner: null
};

WeekView.propTypes = {
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  renderEvent: PropTypes.func,
  renderCorner: PropTypes.func,
  events: PropTypes.object.isRequired
};

export default WeekView;
