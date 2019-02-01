import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  CalendarMonthView,
  CalendarWeekView,
  CalendarDayView
} from "./components/CalendarViews";
import CalendarToolbar from "./components/CalendarToolbar";
import { CALENDAR_VIEWS } from "./constants";

const Calendar = ({
  events,
  view,
  selectedDate,
  onNavigate,
  onViewChange,
  ...restProps
}) => {
  const getView = () => {
    const { month, week, day } = CALENDAR_VIEWS;
    const views = {
      [month]: () => <CalendarMonthView />,
      [week]: () => <CalendarWeekView />,
      [day]: () => <CalendarDayView />
    };
    return views[view];
  };

  const View = getView();

  return (
    <Fragment>
      <CalendarToolbar
        selectedDate={selectedDate}
        onNavigate={onNavigate}
        view={view}
        onViewChange={onViewChange}
      />
      <View events={events} selectedDate={selectedDate} {...restProps} />
    </Fragment>
  );
};

Calendar.propTypes = {
  currentView: PropTypes.oneOf(Object.keys(CALENDAR_VIEWS))
};

export default Calendar;
