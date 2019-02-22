import moment from "moment";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { MonthView, CalendarsView, WeekView } from "./components/Views";
import { CALENDAR_VIEWS } from "./constants";
import {
  FIRST_DAY_TYPE,
  MOMENT_TYPE,
  CALENDAR_VIEW_TYPE,
  STEP_MINUTES_TYPE,
  CALENDAR_TYPE
} from "./types";
import { getMungedEvents, getEventsWithSelectedCalendars } from "./utils";

const Calendar = ({
  events,
  stepDetails,
  view,
  calendars,
  selectedDate,
  selectedCalendars,
  onViewChange,
  onNavigate,
  firstDay,
  onSelectEvent,
  onSelecting,
  onSelectSlot,
  stepMinutes,
  selectMinutes,
  timeGutterWidth,
  renderEvent,
  renderCorner
}) => {
  const getView = () => {
    const { month, week, calendar } = CALENDAR_VIEWS;
    const views = {
      [month]: MonthView,
      [week]: WeekView,
      [calendar]: CalendarsView
    };
    return views[view];
  };

  const View = getView();

  const mungedEvents = useMemo(() => getMungedEvents({ events, stepMinutes }), [
    events,
    stepMinutes
  ]);

  const eventsWithSelectedCalendars = useMemo(
    () =>
      getEventsWithSelectedCalendars({
        mungedEvents,
        selectedCalendars
      }),
    [mungedEvents, selectedCalendars]
  );

  const mungedStepDetails = useMemo(
    () => getMungedEvents({ events: stepDetails, stepMinutes }),
    [stepDetails, stepMinutes]
  );

  const mungedStepDetailsCalendar = useMemo(
    () =>
      getEventsWithSelectedCalendars({
        mungedEvents: mungedStepDetails,
        selectedCalendars
      }),
    [mungedStepDetails, selectedCalendars]
  );

  return (
    <View
      eventsWithCalendars={mungedEvents}
      events={eventsWithSelectedCalendars}
      stepDetails={mungedStepDetailsCalendar}
      selectedDate={selectedDate}
      onSelectEvent={onSelectEvent}
      onSelecting={onSelecting}
      onSelectSlot={onSelectSlot}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      selectMinutes={selectMinutes}
      selectedCalendars={selectedCalendars}
      calendars={calendars}
      renderEvent={renderEvent}
      renderCorner={renderCorner}
      timeGutterWidth={timeGutterWidth}
    />
  );
};

Calendar.defaultProps = {
  renderEvent: null,
  renderCorner: null,
  timeGutterWidth: 50,
  stepDetails: [],
  events: [],
  selectedDate: moment(),
  view: CALENDAR_VIEWS.month
};

Calendar.propTypes = {
  calendars: PropTypes.arrayOf(CALENDAR_TYPE),
  events: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  selectedDate: MOMENT_TYPE,
  view: CALENDAR_VIEW_TYPE,
  selectedCalendars: PropTypes.arrayOf(PropTypes.number).isRequired,
  onViewChange: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onSelecting: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  renderEvent: PropTypes.func,
  renderCorner: PropTypes.func,
  timeGutterWidth: PropTypes.number
};

export default Calendar;
