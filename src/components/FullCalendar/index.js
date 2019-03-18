import React from 'react';
import PropTypes from 'prop-types';
import CalendarMonth from '../CalendarMonth';
import CalendarGroups from '../CalendarGroups';
import CalendarWeek from '../CalendarWeek';
import { CALENDAR_VIEWS } from '../../Calendar/constants';
import {
  FIRST_DAY_DEFAULT,
  FORCE_SIX_WEEKS_DEFAULT,
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  SELECT_MINUTES_DEFAULT,
  SELECTED_DATE_DEFAULT,
  STEP_MINUTES_DEFAULT,
  VIEW_DEFAULT,
} from '../../Calendar/defaultProps';
import {
  EVENT_TYPE,
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  DATE_TYPE,
  CALENDAR_VIEW_TYPE,
} from '../../Calendar/types';

const FullCalendar = ({
  events,
  firstDay,
  forceSixWeeks,
  minWidthColumn,
  minWidthColumnEmpty,
  onDragEnd,
  onExtendEnd,
  onSelectMore,
  onSelectDate,
  onSelectEvent,
  onSelectRangeEnd,
  onCurrentTimeChange,
  onSelectSlot,
  renderCell,
  renderEvent,
  renderCorner,
  renderEventPaddingBottom,
  renderEventPaddingTop,
  renderGroupsHeader,
  renderMonthHeader,
  renderSelectRange,
  renderSelectSlotIndicator,
  renderStepDetail,
  renderWeekHeader,
  renderDayGridEvent,
  renderTimeGridEvent,
  selectedDate,
  selectMinutes,
  stepDetails,
  stepHeight,
  stepMinutes,
  view,
  visibleEventGroups,
}) => {
  const { month, week, groups } = CALENDAR_VIEWS;

  const allViewProps = {
    onDragEnd,
    onSelectEvent,
    onSelectSlot,
    events,
    selectedDate,
    firstDay,
    visibleEventGroups,
  };

  const dayGridProps = {
    onSelectMore,
    onSelectDate,
    forceSixWeeks,
    renderCell,
    renderEvent: renderDayGridEvent,
  };

  const timeGridProps = {
    onExtendEnd,
    onCurrentTimeChange,
    onSelectRangeEnd,
    stepDetails,
    minWidthColumn,
    minWidthColumnEmpty,
    renderCorner,
    renderEventPaddingBottom,
    renderEventPaddingTop,
    renderSelectRange,
    renderStepDetail,
    selectMinutes,
    stepHeight,
    stepMinutes,
    renderSelectSlotIndicator,
    renderEvent: renderTimeGridEvent,
  };

  const viewRenderMap = {
    [month]: (
      <CalendarMonth
        renderHeader={renderMonthHeader}
        {...dayGridProps}
        {...allViewProps}
      />
    ),
    [week]: (
      <CalendarWeek
        renderHeader={renderWeekHeader}
        {...timeGridProps}
        {...allViewProps}
      />
    ),
    [groups]: (
      <CalendarGroups
        renderHeader={renderGroupsHeader}
        {...timeGridProps}
        {...allViewProps}
      />
    ),
  };

  return viewRenderMap[view];
};

FullCalendar.defaultProps = {
  events: [],
  firstDay: FIRST_DAY_DEFAULT,
  forceSixWeeks: FORCE_SIX_WEEKS_DEFAULT,
  minWidthColumn: MIN_WIDTH_COLUMN_DEFAULT,
  minWidthColumnEmpty: MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  onCurrentTimeChange: () => null,
  onDragEnd: () => null,
  onExtendEnd: () => null,
  onSelectDate: () => null,
  onSelectEvent: () => null,
  onSelectMore: () => null,
  onSelectRangeEnd: () => null,
  onSelectSlot: () => null,
  renderCell: null,
  renderCorner: () => null,
  renderDayGridEvent: null,
  renderEventPaddingBottom: () => null,
  renderEventPaddingTop: () => null,
  renderGroupsHeader: null,
  renderMonthHeader: null,
  renderSelectRange: null,
  renderSelectSlotIndicator: null,
  renderStepDetail: () => null,
  renderTimeGridEvent: null,
  renderWeekHeader: null,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  selectedDate: SELECTED_DATE_DEFAULT,
  stepDetails: null,
  stepHeight: null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  view: VIEW_DEFAULT,
  visibleEventGroups: null,
};

FullCalendar.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  firstDay: FIRST_DAY_TYPE,
  forceSixWeeks: PropTypes.bool,
  minWidthColumn: PropTypes.number,
  minWidthColumnEmpty: PropTypes.number,
  onCurrentTimeChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectDate: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectMore: PropTypes.func,
  onSelectRangeEnd: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderCell: PropTypes.func,
  renderCorner: PropTypes.func,
  renderDayGridEvent: PropTypes.func,
  renderEvent: PropTypes.func,
  renderEventPaddingBottom: PropTypes.func,
  renderEventPaddingTop: PropTypes.func,
  renderGroupsHeader: PropTypes.func,
  renderMonthHeader: PropTypes.func,
  renderSelectRange: PropTypes.func,
  renderSelectSlotIndicator: PropTypes.func,
  renderStepDetail: PropTypes.func,
  renderTimeGridEvent: PropTypes.func,
  renderWeekHeader: PropTypes.func,
  selectMinutes: STEP_MINUTES_TYPE,
  selectedDate: DATE_TYPE,
  stepDetails: PropTypes.object,
  stepHeight: PropTypes.number,
  stepMinutes: STEP_MINUTES_TYPE,
  view: CALENDAR_VIEW_TYPE,
  visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
};

export default FullCalendar;
