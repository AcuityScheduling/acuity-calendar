import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import moment from "moment";
import Times from "../../Times";
import Day from "../../Times/components/Day";
import CurrentTimeIndicator from "../../Times/components/CurrentTimeIndicator";
import { makeClass, cellWidth } from "../../../utils";
import {
  MOMENT_TYPE,
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  CALENDAR_TYPE
} from "../../../types";

const columnStyles = {
  minWidth: cellWidth
};

const CalendarsView = ({
  selectedDate,
  firstDay,
  events,
  stepMinutes,
  selectedCalendars,
  calendars,
  ...restProps
}) => {
  return (
    <Times
      selectedDate={selectedDate}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      calendars={calendars}
      selectedCalendars={selectedCalendars}
      {...restProps}
      renderHeader={() =>
        selectedCalendars.map(calendarId => {
          const calendarName = get(
            calendars.find(calendar => calendar.id === calendarId),
            "name",
            ""
          );
          return (
            <h2
              className={makeClass("times__header-column")}
              key={`header${calendarId}`}
              style={columnStyles}
            >
              {calendarName}
            </h2>
          );
        })
      }
      renderColumns={({ currentTime }) => {
        return selectedCalendars.map(calendarId => {
          const eventsForDay = get(events, `${calendarId}.${selectedDate}`, {});
          return (
            <Day
              events={eventsForDay}
              date={selectedDate}
              key={`weekColumn${selectedDate.date()}`}
              currentTime={currentTime}
              stepMinutes={stepMinutes}
              renderCurrentTimeIndicator={
                selectedDate.isSame(moment(), "day") && (
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
        });
      }}
    />
  );
};

CalendarsView.propTypes = {
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  events: PropTypes.object.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  selectedCalendars: PropTypes.arrayOf(PropTypes.number).isRequired,
  calendars: PropTypes.arrayOf(CALENDAR_TYPE).isRequired
};

export default CalendarsView;
