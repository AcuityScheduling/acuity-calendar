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
  STEP_MINUTES_DEFAULT,
  SELECT_MINUTES_DEFAULT,
  FIRST_DAY_DEFAULT,
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
  forceSixWeeks,
  onSelectEvent,
  onSelectRangeEnd,
  onSelectSlot,
  onSelectMonthDate,
  onSelectMoreEvents,
  stepMinutes,
  stepHeight,
  selectMinutes,
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
  renderMonthCell,
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

  const mungedEvents = useMemo(
    () => getMungedEvents({ events, stepMinutes, stepHeight }),
    [events, stepMinutes]
  );

  const eventsWithSelectedEventGroups = useMemo(
    () =>
      getEventsWithSelectedEventGroups({
        mungedEvents,
        selectedEventGroups,
      }),
    [mungedEvents, selectedEventGroups]
  );

  const mungedStepDetails = useMemo(
    () => getMungedEvents({ events: stepDetails, stepMinutes, stepHeight }),
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
      onSelectMonthDate={onSelectMonthDate}
      onSelectMoreEvents={onSelectMoreEvents}
      forceSixWeeks={forceSixWeeks}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      selectMinutes={selectMinutes}
      selectedEventGroups={selectedEventGroups}
      stepHeight={stepHeight}
      renderEvent={renderEvent}
      renderCorner={renderCorner}
      renderSelectRange={renderSelectRange}
      renderEventGroupHeader={renderEventGroupHeader}
      minWidthColumn={minWidthColumn}
      minWidthColumnEmpty={minWidthColumnEmpty}
      renderStepDetail={renderStepDetail}
      renderSelectSlotIndicator={renderSelectSlotIndicator}
      renderEventPaddingTop={renderEventPaddingTop}
      renderEventPaddingBottom={renderEventPaddingBottom}
      renderMonthCell={renderMonthCell}
    />
  );
};

Calendar.defaultProps = {
  renderEvent: null,
  renderCorner: () => null,
  renderEventGroupHeader: () => null,
  renderEventPaddingTop: () => null,
  renderEventPaddingBottom: () => null,
  stepDetails: [],
  events: [],
  firstDay: FIRST_DAY_DEFAULT,
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
  renderMonthCell: null,
  forceSixWeeks: false,
  onSelectMonthDate: () => null,
  stepHeight: null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  onSelectMoreEvents: () => null,
};

Calendar.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  // First day of the week - 0 indexed on Sunday - Sunday = 0, Monday = 1
  firstDay: FIRST_DAY_TYPE,
  forceSixWeeks: PropTypes.bool,
  minWidthColumn: PropTypes.number,
  minWidthColumnEmpty: PropTypes.number,
  onCurrentTimeChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectMonthDate: PropTypes.func,
  onSelectMoreEvents: PropTypes.func,
  onSelectRangeEnd: PropTypes.func,
  onSelectSlot: PropTypes.func.isRequired,
  renderCorner: PropTypes.func,
  renderEvent: PropTypes.func,
  renderEventGroupHeader: PropTypes.func,
  renderEventPaddingBottom: PropTypes.func,
  renderEventPaddingTop: PropTypes.func,
  renderMonthCell: PropTypes.func,
  renderSelectRange: PropTypes.func,
  renderSelectSlotIndicator: PropTypes.func,
  renderStepDetail: PropTypes.func,
  // What range of minutes is selectable - for new events
  // and for drag and drop
  selectMinutes: STEP_MINUTES_TYPE,
  selectedDate: DATE_TYPE,
  selectedEventGroups: PropTypes.arrayOf(PropTypes.number),
  stepDetails: PropTypes.array,
  // The height in pixels that we want each step to be. This will be like
  // zooming in and out on the calendar
  stepHeight: PropTypes.number,
  // How many grid lines there are between an hour. 30 means
  // break the hour into 30 minute blocks. 20 means to break it into 20 etc.
  stepMinutes: STEP_MINUTES_TYPE,
  view: CALENDAR_VIEW_TYPE,
};

export default Calendar;
