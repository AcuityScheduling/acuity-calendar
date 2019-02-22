import moment from 'moment';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { MonthView, CalendarsView, WeekView } from './components/Views';
import { CALENDAR_VIEWS } from './constants';
import {
  FIRST_DAY_TYPE,
  MOMENT_TYPE,
  CALENDAR_VIEW_TYPE,
  STEP_MINUTES_TYPE,
} from './types';
import { getMungedEvents, getEventsWithSelectedEventGroups } from './utils';

const Calendar = ({
  events,
  stepDetails,
  view,
  selectedDate,
  selectedEventGroups,
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
  renderCorner,
  renderEventGroupHeader,
}) => {
  const getView = () => {
    const { month, week, calendar } = CALENDAR_VIEWS;
    const views = {
      [month]: MonthView,
      [week]: WeekView,
      [calendar]: CalendarsView,
    };
    return views[view];
  };

  const View = getView();

  const mungedEvents = useMemo(() => getMungedEvents({ events, stepMinutes }), [
    events,
    stepMinutes,
  ]);

  const eventsWithSelectedEventGroups = useMemo(
    () =>
      getEventsWithSelectedEventGroups({
        mungedEvents,
        selectedEventGroups,
      }),
    [mungedEvents, selectedEventGroups]
  );

  const mungedStepDetails = useMemo(
    () => getMungedEvents({ events: stepDetails, stepMinutes }),
    [stepDetails, stepMinutes]
  );

  const mungedStepDetailsCalendar = useMemo(
    () =>
      getEventsWithSelectedEventGroups({
        mungedEvents: mungedStepDetails,
        selectedEventGroups,
      }),
    [mungedStepDetails, selectedEventGroups]
  );

  return (
    <View
      eventsWithEventGroups={mungedEvents}
      events={eventsWithSelectedEventGroups}
      stepDetails={mungedStepDetailsCalendar}
      selectedDate={selectedDate}
      onSelectEvent={onSelectEvent}
      onSelecting={onSelecting}
      onSelectSlot={onSelectSlot}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      selectMinutes={selectMinutes}
      selectedEventGroups={selectedEventGroups}
      renderEvent={renderEvent}
      renderCorner={renderCorner}
      timeGutterWidth={timeGutterWidth}
      renderEventGroupHeader={renderEventGroupHeader}
    />
  );
};

Calendar.defaultProps = {
  renderEvent: null,
  renderCorner: () => null,
  renderEventGroupHeader: () => null,
  timeGutterWidth: 50,
  stepDetails: [],
  events: [],
  selectedDate: moment(),
  view: CALENDAR_VIEWS.month,
  calendars: [],
  selectedEventGroups: false,
};

Calendar.propTypes = {
  selectedEventGroups: PropTypes.arrayOf(PropTypes.number),
  events: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  stepDetails: PropTypes.array,
  selectedDate: MOMENT_TYPE,
  view: CALENDAR_VIEW_TYPE,
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
  timeGutterWidth: PropTypes.number,
  renderEventGroupHeader: PropTypes.func,
};

export default Calendar;
