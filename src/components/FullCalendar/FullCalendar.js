import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import moment from 'moment';
import CalendarMonth from '../CalendarMonth/CalendarMonth';
import CalendarGroups from '../CalendarGroups/CalendarGroups';
import CalendarWeek from '../CalendarWeek/CalendarWeek';
import Toolbar from '../Toolbar/Toolbar';
import { CALENDAR_VIEWS, CLASS_PREFIX } from '../../Calendar/constants';
import {
  FIRST_DAY_DEFAULT,
  FORCE_SIX_WEEKS_DEFAULT,
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  SELECT_MINUTES_DEFAULT,
  SELECTED_DATE_DEFAULT,
  STEP_MINUTES_DEFAULT,
  FETCH_EVENT_PADDING_DEFAULT,
  SCROLL_TO_TIME_DEFAULT,
} from '../../Calendar/defaultProps';
import {
  EVENT_TYPE,
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  DATE_TYPE,
  CALENDAR_VIEW_TYPE,
  STEP_DETAILS_TYPE,
  FETCH_EVENT_INITIAL_FULL_RANGE,
  SCROLL_TO_TIME_TYPE,
  EVENT_GROUP,
  VIEWS_TYPE,
} from '../../Calendar/types';

const FullCalendar = ({
  events,
  eventGroups,
  fetchEventInitialFullRange,
  firstDay,
  forceSixWeeks,
  isEventDraggable,
  isEventExtendable,
  minWidthColumn,
  minWidthColumnEmpty,
  onDragEnd,
  onExtendEnd,
  onFetchEvents,
  onNavigate,
  onSelectMore,
  onSelectDate,
  onSelectEvent,
  onSelectRangeEnd,
  onCurrentTimeChange,
  onSelectSlot,
  onViewChange,
  renderCell,
  renderCorner,
  renderEventPaddingBottom,
  renderEventPaddingTop,
  renderGroupsHeader,
  renderMonthHeader,
  renderSelectRange,
  renderSelectSlotIndicator,
  renderStepDetail,
  renderWeekHeader,
  renderTimeGridEvent,
  renderToolbar,
  scrollToTime,
  selectedDate,
  selectMinutes,
  stepDetails,
  stepHeight,
  stepMinutes,
  style,
  currentView,
  views,
  visibleEventGroups,
}) => {
  const { month, week, groups } = CALENDAR_VIEWS;

  const allViewProps = {
    isEventDraggable,
    onDragEnd,
    onSelectEvent,
    onSelectSlot,
    events,
    selectedDate: moment(selectedDate),
    firstDay,
    visibleEventGroups,
  };

  const dayGridProps = {
    forceSixWeeks,
    onSelectDate,
    onSelectMore,
    renderCell,
  };

  const timeGridProps = {
    isEventExtendable,
    minWidthColumn,
    minWidthColumnEmpty,
    onCurrentTimeChange,
    onExtendEnd,
    onSelectRangeEnd,
    renderCorner,
    renderEvent: renderTimeGridEvent,
    renderEventPaddingBottom,
    renderEventPaddingTop,
    renderSelectRange,
    renderSelectSlotIndicator,
    renderStepDetail,
    scrollToTime,
    selectMinutes,
    stepDetails,
    stepHeight,
    stepMinutes,
    withGroups: false,
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
        eventGroups={eventGroups}
        {...timeGridProps}
        {...allViewProps}
      />
    ),
  };

  /**
   * Views can be a string or an object. If it's a string it's a defined view within
   * this repo. If it's an object it will have some more properties. Deciding which
   * view to show can be a bit of logic. Sometimes we want to render it sometimes we don't
   */
  const getView = () => {
    const isString = s => typeof s === 'string' || s instanceof String;

    let view = views.find(view => {
      if (isString(view) && view === currentView) return true;
      if (view.view === currentView) return true;
      return false;
    });
    if (typeof view === 'undefined') {
      console.error(
        'You have supplied a view that is not in the "views" prop.'
      );
      return null;
    }
    if (
      Object.values(CALENDAR_VIEWS).includes(
        isString(view) ? view : view.view
      ) &&
      !get(view, 'render', false)
    ) {
      return viewRenderMap[currentView];
    }
    if (view.grid === 'time') {
      return view.render({ ...timeGridProps, ...allViewProps });
    }

    if (view.grid === 'day') {
      return view.render({ ...dayGridProps, ...allViewProps });
    }
    return null;
  };

  return (
    <div className={CLASS_PREFIX} style={style}>
      <Toolbar
        events={events}
        fetchEventInitialFullRange={fetchEventInitialFullRange}
        firstDay={firstDay}
        onNavigate={onNavigate}
        onViewChange={onViewChange}
        onFetchEvents={onFetchEvents}
        selectedDate={selectedDate}
        currentView={currentView}
        views={views}
      >
        {renderToolbar}
      </Toolbar>
      {getView()}
    </div>
  );
};

FullCalendar.defaultProps = {
  eventGroups: [],
  events: [],
  fetchEventInitialFullRange: null,
  fetchEventPadding: FETCH_EVENT_PADDING_DEFAULT,
  firstDay: FIRST_DAY_DEFAULT,
  forceSixWeeks: FORCE_SIX_WEEKS_DEFAULT,
  isEventDraggable: () => true,
  isEventExtendable: () => true,
  minWidthColumn: MIN_WIDTH_COLUMN_DEFAULT,
  minWidthColumnEmpty: MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  onCurrentTimeChange: () => null,
  onDragEnd: () => null,
  onExtendEnd: () => null,
  onFetchEvents: () => null,
  onNavigate: () => null,
  onSelectDate: null,
  onSelectEvent: () => null,
  onSelectMore: () => null,
  onSelectRangeEnd: () => null,
  onSelectSlot: () => null,
  onViewChange: () => null,
  renderCell: null,
  renderCorner: () => null,
  renderEventPaddingBottom: () => null,
  renderEventPaddingTop: () => null,
  renderGroupsHeader: null,
  renderMonthHeader: null,
  renderSelectRange: null,
  renderSelectSlotIndicator: null,
  renderStepDetail: () => null,
  renderTimeGridEvent: null,
  renderToolbar: null,
  renderWeekHeader: null,
  scrollToTime: SCROLL_TO_TIME_DEFAULT,
  selectedDate: SELECTED_DATE_DEFAULT,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  stepDetails: null,
  stepHeight: null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  style: {},
  views: Object.values(CALENDAR_VIEWS),
  visibleEventGroups: null,
};

FullCalendar.propTypes = {
  currentView: CALENDAR_VIEW_TYPE.isRequired,
  eventGroups: PropTypes.arrayOf(EVENT_GROUP),
  events: PropTypes.arrayOf(EVENT_TYPE),
  fetchEventInitialFullRange: FETCH_EVENT_INITIAL_FULL_RANGE,
  firstDay: FIRST_DAY_TYPE,
  forceSixWeeks: PropTypes.bool,
  isEventDraggable: PropTypes.func,
  isEventExtendable: PropTypes.func,
  minWidthColumn: PropTypes.number,
  minWidthColumnEmpty: PropTypes.number,
  onCurrentTimeChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onFetchEvents: PropTypes.func,
  onNavigate: PropTypes.func,
  onSelectDate: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectMore: PropTypes.func,
  onSelectRangeEnd: PropTypes.func,
  onSelectSlot: PropTypes.func,
  onViewChange: PropTypes.func,
  renderCell: PropTypes.func,
  renderCorner: PropTypes.func,
  renderEventPaddingBottom: PropTypes.func,
  renderEventPaddingTop: PropTypes.func,
  renderGroupsHeader: PropTypes.func,
  renderMonthHeader: PropTypes.func,
  renderSelectRange: PropTypes.func,
  renderSelectSlotIndicator: PropTypes.func,
  renderStepDetail: PropTypes.func,
  renderTimeGridEvent: PropTypes.func,
  renderToolbar: PropTypes.func,
  renderWeekHeader: PropTypes.func,
  scrollToTime: SCROLL_TO_TIME_TYPE,
  selectMinutes: STEP_MINUTES_TYPE,
  selectedDate: DATE_TYPE,
  stepDetails: PropTypes.arrayOf(STEP_DETAILS_TYPE),
  stepHeight: PropTypes.number,
  stepMinutes: STEP_MINUTES_TYPE,
  style: PropTypes.object,
  views: VIEWS_TYPE,
  visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
};

export default FullCalendar;
