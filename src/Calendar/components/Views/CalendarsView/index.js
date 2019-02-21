import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import moment from "moment";
import StepGrid from "../../StepGrid";
import Day from "../../StepGrid/components/Day";
import CurrentTimeIndicator from "../../StepGrid/components/CurrentTimeIndicator";
import { makeClass, cellWidth } from "../../../utils";
import {
  MOMENT_TYPE,
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  CALENDAR_TYPE
} from "../../../types";
import { TIME_GUTTER_WIDTH } from "../../StepGrid/constants";

const columnStyles = {
  minWidth: cellWidth
};

const CalendarsView = ({
  view,
  selectedDate,
  calendars,
  selectedCalendars,
  firstDay,
  stepMinutes,
  onSelectEvent,
  onSelectSlot,
  selectMinutes,
  eventsWithCalendars,
  timeGutterWidth,
  renderEvent,
  renderCorner
}) => {
  return (
    <StepGrid
      view={view}
      selectedDate={selectedDate}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      selectMinutes={selectMinutes}
      timeGutterWidth={timeGutterWidth}
      renderCorner={renderCorner}
      renderHeader={() =>
        selectedCalendars.map(calendarId => {
          const calendarName = get(
            calendars.find(calendar => calendar.id === calendarId),
            "name",
            ""
          );
          return (
            <h2
              className={makeClass("step-grid__header-column")}
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
          const eventsForDay = get(
            eventsWithCalendars,
            `${calendarId}.${selectedDate.format("YYYY-MM-DD")}`,
            []
          );

          return (
            <Day
              events={eventsForDay}
              date={selectedDate}
              onSelectEvent={onSelectEvent}
              onSelectSlot={onSelectSlot}
              selectMinutes={selectMinutes}
              key={`calendarColumn${calendarId}`}
              currentTime={currentTime}
              stepMinutes={stepMinutes}
              renderEvent={renderEvent}
              renderCurrentTimeIndicator={
                selectedDate.isSame(moment(), "day") && (
                  <CurrentTimeIndicator
                    stepMinutes={stepMinutes}
                    currentTime={currentTime}
                    isToday
                  />
                )
              }
            />
          );
        });
      }}
    />
  );
};

CalendarsView.defaultProps = {
  renderCorner: null,
  renderEvent: null,
  timeGutterWidth: TIME_GUTTER_WIDTH
};

CalendarsView.propTypes = {
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  eventsWithCalendars: PropTypes.object.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  selectedCalendars: PropTypes.arrayOf(PropTypes.number).isRequired,
  calendars: PropTypes.arrayOf(CALENDAR_TYPE).isRequired,
  renderEvent: PropTypes.func,
  renderCorner: PropTypes.func,
  timeGutterWidth: PropTypes.number
};

export default CalendarsView;
