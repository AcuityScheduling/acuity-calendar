import React, { useMemo } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import moment from "moment";
import { getEventColumns } from "../../StepGrid/utils";
import StepGrid from "../../StepGrid";
import Day from "../../StepGrid/components/Day";
import { getWeekList } from "./utils";
import { makeClass } from "../../../utils";
import { getTodayClass } from "../../StepGrid/utils";
import { MOMENT_TYPE, FIRST_DAY_TYPE, STEP_MINUTES_TYPE } from "../../../types";

const WeekView = ({
  events,
  selectedDate,
  firstDay,
  stepMinutes,
  onSelectEvent,
  onSelectSlot,
  selectMinutes,
  renderEvent,
  timeGutterWidth,
  stepDetails,
  renderCorner
}) => {
  const dateList = getWeekList({ date: selectedDate, firstDay });
  const eventsWithColumns = useMemo(() => getEventColumns(events), [events]);

  return (
    <StepGrid
      selectedDate={selectedDate}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      selectMinutes={selectMinutes}
      timeGutterWidth={timeGutterWidth}
      renderCorner={renderCorner}
      renderHeader={() =>
        dateList.map(date => {
          const totalColumns =
            Object.keys(get(eventsWithColumns, date.format("YYYY-MM-DD"), {}))
              .length || 1;

          const minWidth = `${totalColumns * 190}px`;
          return (
            <div
              className={`${makeClass(
                "step-grid__header-column"
              )}${getTodayClass(date)}`}
              key={`dayHeader${date.date()}`}
              style={{ minWidth }}
            >
              <h2>{date.format("dddd, MMM D")}</h2>
            </div>
          );
        })
      }
      renderColumns={({ currentTime }) => {
        return dateList.map(date => {
          const stepDetailsForDay = get(
            stepDetails,
            date.format("YYYY-MM-DD"),
            []
          );

          const eventsForDay = get(
            eventsWithColumns,
            date.format("YYYY-MM-DD"),
            {}
          );
          return (
            <Day
              events={eventsForDay}
              stepDetails={stepDetailsForDay}
              date={date}
              onSelectEvent={onSelectEvent}
              onSelectSlot={onSelectSlot}
              selectMinutes={selectMinutes}
              key={`weekColumn${date.day()}`}
              currentTime={currentTime}
              stepMinutes={stepMinutes}
              renderEvent={renderEvent}
            />
          );
        });
      }}
    />
  );
};

WeekView.defaultProps = {
  renderEvent: null,
  renderCorner: null,
  timeGutterWidth: 50,
  stepDetails: null
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
  events: PropTypes.object.isRequired,
  timeGutterWidth: PropTypes.number,
  stepDetails: PropTypes.object
};

export default WeekView;
