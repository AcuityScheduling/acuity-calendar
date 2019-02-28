import React, { useMemo } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { MonthView, CalendarsView, WeekView } from './components/Views';
import { CALENDAR_VIEWS } from './constants';
import {
  FIRST_DAY_TYPE,
  CALENDAR_VIEW_TYPE,
  STEP_MINUTES_TYPE,
  EVENT_TYPE,
  DATE_TYPE,
} from './types';
import { getMungedEvents, getEventsWithSelectedEventGroups } from './utils';
import { SELECTED_DATE_DEFAULT } from './defaultProps';

const Calendar = ({
  events,
  stepDetails,
  view,
  selectedDate,
  selectedEventGroups,
  onExtendEnd,
  onDragEnd,
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

  const mungedStepDetailsGroups = useMemo(
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
      stepDetails={mungedStepDetailsGroups}
      selectedDate={moment(new Date(selectedDate))}
      onExtendEnd={onExtendEnd}
      onDragEnd={onDragEnd}
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
  selectedDate: SELECTED_DATE_DEFAULT,
  view: CALENDAR_VIEWS.week,
  calendars: [],
  selectedEventGroups: false,
  onExtendEnd: () => null,
  onDragEnd: () => null,
};

Calendar.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  firstDay: FIRST_DAY_TYPE.isRequired,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  onSelecting: PropTypes.func.isRequired,
  renderCorner: PropTypes.func,
  renderEvent: PropTypes.func,
  renderEventGroupHeader: PropTypes.func,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  selectedDate: DATE_TYPE,
  selectedEventGroups: PropTypes.arrayOf(PropTypes.number),
  stepDetails: PropTypes.array,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  timeGutterWidth: PropTypes.number,
  view: CALENDAR_VIEW_TYPE,
};

export default Calendar;
