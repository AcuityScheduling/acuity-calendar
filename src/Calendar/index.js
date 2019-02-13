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
  view,
  calendars,
  selectedCalendars,
  onViewChange,
  selectedDate,
  onNavigate,
  firstDay,
  onSelectEvent,
  onSelecting,
  onSelectSlot,
  stepMinutes,
  selectMinutes,
  renderEvent
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

  return (
    <View
      eventsWithCalendars={mungedEvents}
      events={eventsWithSelectedCalendars}
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
    />
  );
};

Calendar.defaultProps = {
  renderEvent: null
};

Calendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  calendars: PropTypes.arrayOf(CALENDAR_TYPE),
  view: CALENDAR_VIEW_TYPE.isRequired,
  selectedCalendars: PropTypes.arrayOf(PropTypes.number).isRequired,
  onViewChange: PropTypes.func.isRequired,
  selectedDate: MOMENT_TYPE.isRequired,
  onNavigate: PropTypes.func.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onSelecting: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  renderEvent: PropTypes.func
};

export default Calendar;
