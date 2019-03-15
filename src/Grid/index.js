import React, { useMemo } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { GRIDS } from './constants';
import {
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  EVENT_TYPE,
  DATE_TYPE,
  VIEW_RENDER_TYPE,
  GRIDS_TYPE,
} from './types';
import { getMungedEvents, getEventsWithEventGroups } from './utils';
import {
  SELECTED_DATE_DEFAULT,
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  STEP_MINUTES_DEFAULT,
  SELECT_MINUTES_DEFAULT,
  FIRST_DAY_DEFAULT,
  VIEW_RENDER_DEFAULT,
} from './defaultProps';
import DayGrid from './components/DayGrid';
import TimeGrid from './components/TimeGrid';

const Grid = ({
  grid,
  events,
  stepDetails,
  selectedDate,
  visibleEventGroups,
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
  renderHeader,
  renderSelectSlotIndicator,
  renderStepDetail,
  renderSelectRange,
  minWidthColumn,
  minWidthColumnEmpty,
  renderEventPaddingTop,
  renderEventPaddingBottom,
  renderMonthCell,
}) => {
  const getGrid = () => {
    const { day, time } = GRIDS;
    const grids = {
      [day]: DayGrid,
      [time]: TimeGrid,
    };
    return grids[grid];
  };

  const Grid = getGrid();

  const mungedEvents = useMemo(
    () => getMungedEvents({ events, stepMinutes, stepHeight }),
    [events, stepMinutes]
  );

  const eventsWithSelectedEventGroups = useMemo(
    () =>
      getEventsWithEventGroups({
        mungedEvents,
        visibleEventGroups,
      }),
    [mungedEvents, visibleEventGroups]
  );

  const mungedStepDetails = useMemo(
    () => getMungedEvents({ events: stepDetails, stepMinutes, stepHeight }),
    [stepDetails, stepMinutes]
  );

  const mungedStepDetailsGroups = useMemo(
    () =>
      getEventsWithEventGroups({
        mungedEvents: mungedStepDetails,
        visibleEventGroups,
      }),
    [mungedStepDetails, visibleEventGroups]
  );

  return (
    <Grid
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
      visibleEventGroups={visibleEventGroups}
      stepHeight={stepHeight}
      renderEvent={renderEvent}
      renderCorner={renderCorner}
      renderSelectRange={renderSelectRange}
      renderHeader={renderHeader}
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

Grid.defaultProps = {
  renderEvent: null,
  renderCorner: () => null,
  renderEventPaddingTop: () => null,
  renderHeader: VIEW_RENDER_DEFAULT,
  renderEventPaddingBottom: () => null,
  stepDetails: [],
  events: [],
  visibleEventGroups: null,
  firstDay: FIRST_DAY_DEFAULT,
  selectedDate: SELECTED_DATE_DEFAULT,
  grid: GRIDS.time,
  calendars: [],
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
  onSelectMonthDate: null,
  stepHeight: null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  onSelectMoreEvents: () => null,
  onSelectEvent: () => null,
  onSelectSlot: () => null,
};

Grid.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  // First day of the week - 0 indexed on Sunday - Sunday = 0, Monday = 1
  firstDay: FIRST_DAY_TYPE,
  forceSixWeeks: PropTypes.bool,
  grid: GRIDS_TYPE,
  minWidthColumn: PropTypes.number,
  minWidthColumnEmpty: PropTypes.number,
  onCurrentTimeChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectMonthDate: PropTypes.func,
  onSelectMoreEvents: PropTypes.func,
  onSelectRangeEnd: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderCorner: PropTypes.func,
  renderEvent: PropTypes.func,
  renderEventPaddingBottom: PropTypes.func,
  renderEventPaddingTop: PropTypes.func,
  renderHeader: VIEW_RENDER_TYPE,
  renderMonthCell: PropTypes.func,
  renderSelectRange: PropTypes.func,
  renderSelectSlotIndicator: PropTypes.func,
  // What range of minutes is selectable - for new events
  // and for drag and drop
  renderStepDetail: PropTypes.func,
  selectMinutes: STEP_MINUTES_TYPE,
  selectedDate: DATE_TYPE,
  stepDetails: PropTypes.array,
  // The height in pixels that we want each step to be. This will be like
  // zooming in and out on the calendar
  stepHeight: PropTypes.number,
  // How many grid lines there are between an hour. 30 means
  // break the hour into 30 minute blocks. 20 means to break it into 20 etc.
  stepMinutes: STEP_MINUTES_TYPE,
  visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
};

export default Grid;