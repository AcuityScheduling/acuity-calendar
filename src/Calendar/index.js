import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  CalendarMonthView,
  CalendarDaysView
} from "./components/CalendarViews";
import CalendarToolbar from "./components/CalendarToolbar";
import { CALENDAR_VIEWS } from "./constants";
import { getEventsByDate } from "./utils";
import {
  FIRST_DAY_TYPE,
  MOMENT_TYPE,
  CALENDAR_VIEW_TYPE,
  EVENT_TYPE
} from "./types";

const Calendar = ({
  events,
  view,
  onViewChange,
  selectedDate,
  onNavigate,
  firstDay,
  onSelectEvent,
  onSelecting,
  onSelectSlot,
  stepMinutes
}) => {
  const getView = () => {
    const { month, week, day } = CALENDAR_VIEWS;
    const views = {
      [month]: CalendarMonthView,
      [week]: CalendarDaysView,
      [day]: CalendarDaysView
    };
    return views[view];
  };

  const View = getView();

  return (
    <Fragment>
      <CalendarToolbar
        view={view}
        onViewChange={onViewChange}
        selectedDate={selectedDate}
        onNavigate={onNavigate}
        firstDay={firstDay}
      />
      <View
        view={view}
        events={getEventsByDate(events)}
        selectedDate={selectedDate}
        onSelectEvent={onSelectEvent}
        onSelecting={onSelecting}
        onSelectSlot={onSelectSlot}
        firstDay={firstDay}
        stepMinutes={stepMinutes}
      />
    </Fragment>
  );
};

Calendar.defaultProps = {
  steps: 60
};

Calendar.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE).isRequired,
  view: CALENDAR_VIEW_TYPE.isRequired,
  onViewChange: PropTypes.func.isRequired,
  selectedDate: MOMENT_TYPE.isRequired,
  onNavigate: PropTypes.func.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onSelecting: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  stepMinutes: PropTypes.number
};

export default Calendar;
