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
import {
  SELECTED_DATE_DEFAULT,
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
} from './defaultProps';

const Calendar = ({
  events,
  stepDetails,
  view,
  selectedDate,
  selectedEventGroups,
  onExtendEnd,
  onCurrentTimeChange,
  onDragEnd,
  firstDay,
  onSelectEvent,
  onSelectRangeEnd,
  onSelectSlot,
  stepMinutes,
  selectMinutes,
  timeGutterWidth,
  renderEvent,
  renderCorner,
  renderEventGroupHeader,
  renderSelectSlotIndicator,
  renderStepDetail,
  renderSelectRange,
  minWidthColumn,
  minWidthColumnEmpty,
  renderEventPaddingTop,
  renderEventPaddingBottom,
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
      stepDetailsWithEventGroups={mungedStepDetails}
      selectedDate={moment(new Date(selectedDate))}
      onExtendEnd={onExtendEnd}
      onCurrentTimeChange={onCurrentTimeChange}
      onDragEnd={onDragEnd}
      onSelectEvent={onSelectEvent}
      onSelectRangeEnd={onSelectRangeEnd}
      onSelectSlot={onSelectSlot}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      selectMinutes={selectMinutes}
      selectedEventGroups={selectedEventGroups}
      renderEvent={renderEvent}
      renderCorner={renderCorner}
      renderSelectRange={renderSelectRange}
      timeGutterWidth={timeGutterWidth}
      renderEventGroupHeader={renderEventGroupHeader}
      minWidthColumn={minWidthColumn}
      minWidthColumnEmpty={minWidthColumnEmpty}
      renderStepDetail={renderStepDetail}
      renderSelectSlotIndicator={renderSelectSlotIndicator}
      renderEventPaddingTop={renderEventPaddingTop}
      renderEventPaddingBottom={renderEventPaddingBottom}
    />
  );
};

Calendar.defaultProps = {
  renderEvent: null,
  renderCorner: () => null,
  renderEventGroupHeader: () => null,
  renderEventPaddingTop: () => null,
  renderEventPaddingBottom: () => null,
  timeGutterWidth: 50,
  stepDetails: [],
  events: [],
  selectedDate: SELECTED_DATE_DEFAULT,
  view: CALENDAR_VIEWS.week,
  calendars: [],
  selectedEventGroups: false,
  onExtendEnd: () => null,
  onDragEnd: () => null,
  minWidthColumn: MIN_WIDTH_COLUMN_DEFAULT,
  minWidthColumnEmpty: MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  renderStepDetail: () => null,
  onCurrentTimeChange: () => null,
  renderSelectSlotIndicator: null,
  onSelectRangeEnd: () => null,
  renderSelectRange: null,
};

Calendar.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  firstDay: FIRST_DAY_TYPE.isRequired,
  minWidthColumn: PropTypes.number,
  minWidthColumnEmpty: PropTypes.number,
  onCurrentTimeChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectRangeEnd: PropTypes.func,
  onSelectSlot: PropTypes.func.isRequired,
  renderCorner: PropTypes.func,
  renderEvent: PropTypes.func,
  renderEventGroupHeader: PropTypes.func,
  renderEventPaddingBottom: PropTypes.func,
  renderEventPaddingTop: PropTypes.func,
  renderSelectRange: PropTypes.func,
  renderSelectSlotIndicator: PropTypes.func,
  renderStepDetail: PropTypes.func,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  selectedDate: DATE_TYPE,
  selectedEventGroups: PropTypes.arrayOf(PropTypes.number),
  stepDetails: PropTypes.array,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  timeGutterWidth: PropTypes.number,
  view: CALENDAR_VIEW_TYPE,
};

export default Calendar;
