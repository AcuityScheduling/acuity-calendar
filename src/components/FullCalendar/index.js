import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarMonth from '../CalendarMonth';
import CalendarGroups from '../CalendarGroups';
import CalendarWeek from '../CalendarWeek';
import Toolbar from '../Toolbar';
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
  fetchEventPadding,
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
    onSelectMore,
    onSelectDate,
    forceSixWeeks,
    renderCell,
    renderEvent: renderDayGridEvent,
  };

  const timeGridProps = {
    isEventExtendable,
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
    scrollToTime,
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

  const getView = () => {
    if (Object.values(CALENDAR_VIEWS).includes(currentView)) {
      return viewRenderMap[currentView];
    }
    const view = views.find(view => view.view === currentView);
    // The default views can also just have some changes to it if it was an object
    // like display name.
    if (Object.values(CALENDAR_VIEWS).includes(view)) {
      return viewRenderMap[currentView];
    }
    const Component = view.component;
    if (view.grid === 'time') {
      return <Component {...timeGridProps} {...allViewProps} />;
    }

    if (view.grid === 'day') {
      return <Component {...dayGridProps} {...allViewProps} />;
    }
    console.error('You supplied a view that has not been defined.');
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
  events: [],
  eventGroups: [],
  fetchEventInitialFullRange: null,
  fetchEventPadding: FETCH_EVENT_PADDING_DEFAULT,
  firstDay: FIRST_DAY_DEFAULT,
  forceSixWeeks: FORCE_SIX_WEEKS_DEFAULT,
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
  renderDayGridEvent: null,
  renderEvent: null,
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
  selectMinutes: SELECT_MINUTES_DEFAULT,
  selectedDate: SELECTED_DATE_DEFAULT,
  stepDetails: null,
  stepHeight: null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  style: {},
  scrollToTime: SCROLL_TO_TIME_DEFAULT,
  views: Object.values(CALENDAR_VIEWS),
  visibleEventGroups: null,
  isEventDraggable: () => true,
  isEventExtendable: () => true,
};

FullCalendar.propTypes = {
  currentView: CALENDAR_VIEW_TYPE.isRequired,
  eventGroups: PropTypes.arrayOf(EVENT_GROUP),
  events: PropTypes.arrayOf(EVENT_TYPE),
  fetchEventInitialFullRange: FETCH_EVENT_INITIAL_FULL_RANGE,
  fetchEventPadding: PropTypes.number,
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
  // Shouldn't be required because you can render your own toolbar
  onViewChange: PropTypes.func,
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
