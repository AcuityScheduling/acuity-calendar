import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TimeGrid from './TimeGrid';
import Column from './components/Column';
import { getWeekList } from '../../../components/CalendarWeek/utils';
import { useElementWidths, getEventColumns, scrollToEvent } from './utils';
import {
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  EVENT_TYPE,
  DATE_TYPE,
  STEP_DETAILS_TYPE,
  SCROLL_TO_TIME_TYPE,
} from '../../types';
import ColumnHeader from './components/ColumnHeader';
import { useMungeData } from '../../utils';
import {
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  STEP_MINUTES_DEFAULT,
  SELECT_MINUTES_DEFAULT,
  FIRST_DAY_DEFAULT,
  SELECTED_DATE_DEFAULT,
  SCROLL_TO_TIME_DEFAULT,
} from '../../defaultProps';
import { getEventColumnsByGroup } from './utils/getEventColumns';

const TimeGridWrapper = ({
  events,
  firstDay,
  isEventDraggable,
  isEventExtendable,
  minWidthColumn,
  minWidthColumnEmpty,
  onCurrentTimeChange,
  onDragEnd,
  onExtendEnd,
  onSelectEvent,
  onSelectRangeEnd,
  onSelectSlot,
  renderColumns,
  renderCorner,
  renderEvent,
  renderEventPaddingBottom,
  renderEventPaddingTop,
  renderHeaders,
  renderSelectRange,
  renderSelectSlotIndicator,
  renderStepDetail,
  scrollToTime,
  selectedDate,
  selectMinutes,
  stepDetails,
  stepHeight,
  stepMinutes,
  visibleEventGroups,
  withColumns,
}) => {
  let dateList = getWeekList({ date: moment(selectedDate), firstDay });
  dateList = dateList.map(date => new Date(date));

  const { TimeGridRef, assignRef, elementWidths } = useElementWidths();

  const {
    eventsWithSelectedEventGroups,
    mungedStepDetailsGroups,
    mungedEvents,
    mungedStepDetails,
  } = useMungeData({
    events,
    stepMinutes,
    stepHeight,
    stepDetails,
    visibleEventGroups,
    withColumns,
  });
  const eventsWithColumns = useMemo(
    () => getEventColumns(eventsWithSelectedEventGroups),
    [eventsWithSelectedEventGroups]
  );

  const eventsWithColumnsGroups = getEventColumnsByGroup(mungedEvents);

  return (
    <TimeGrid
      ref={TimeGridRef}
      selectedDate={selectedDate}
      totalWidth={elementWidths.reduce((total, value) => total + value, 0)}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      onCurrentTimeChange={onCurrentTimeChange}
      selectMinutes={selectMinutes}
      stepHeight={stepHeight}
      scrollToTime={
        scrollToTime === 'firstEvent'
          ? scrollToEvent({
              mungedEvents: eventsWithSelectedEventGroups,
              mungedStepDetails: mungedStepDetailsGroups,
              selectedDate: moment(selectedDate),
              hasGroups: false,
            })
          : scrollToTime
      }
      renderCorner={renderCorner}
      renderHeader={() => {
        const ColumnComponent = ({
          /* eslint-disable react/prop-types */
          totalEventColumns = null,
          date,
          columnClass,
          ...restProps
          /* eslint-enable react/prop-types */
        }) => {
          const dayDate = moment(new Date(date)).format('YYYY-MM-DD');
          let actualEventColumns = totalEventColumns;
          if (totalEventColumns === null) {
            actualEventColumns = eventsWithColumns[dayDate]
              ? Object.keys(eventsWithColumns[dayDate]).length
              : 0;
          }
          return (
            <ColumnHeader
              totalEventColumns={actualEventColumns}
              date={date}
              type={columnClass}
              minWidth={minWidthColumn}
              minWidthEmpty={minWidthColumnEmpty}
              {...restProps}
            />
          );
        };
        return renderHeaders({
          ColumnComponent,
          week: dateList,
          events: eventsWithColumns,
          eventsWithGroups: eventsWithColumnsGroups,
          stepDetails: mungedStepDetailsGroups,
          stepDetailsWithGroups: mungedStepDetails,
        });
      }}
      renderColumns={({ currentTime, totalGridHeight }) => {
        const ColumnComponent = ({
          /* eslint-disable react/prop-types */
          date,
          columnKey,
          columnIndex,
          columnId,
          eventsForColumn,
          getUpdatedDraggedEvent,
          stepDetailsForColumn,
          /* eslint-enable react/prop-types */
        }) => (
          <Column
            ref={assignRef(columnKey)}
            columnId={columnId}
            columnIndex={columnIndex}
            columnWidths={elementWidths}
            currentTime={currentTime}
            date={date}
            events={eventsForColumn}
            getUpdatedDraggedEvent={getUpdatedDraggedEvent}
            gridHeight={totalGridHeight}
            isEventDraggable={isEventDraggable}
            isEventExtendable={isEventExtendable}
            key={`weekColumn${columnKey}`}
            minWidth={minWidthColumn}
            minWidthEmpty={minWidthColumnEmpty}
            onDragEnd={onDragEnd}
            onExtendEnd={onExtendEnd}
            onSelectEvent={onSelectEvent}
            onSelectRangeEnd={onSelectRangeEnd}
            onSelectSlot={onSelectSlot}
            renderEvent={renderEvent}
            renderEventPaddingBottom={renderEventPaddingBottom}
            renderEventPaddingTop={renderEventPaddingTop}
            renderSelectRange={renderSelectRange}
            renderSelectSlotIndicator={renderSelectSlotIndicator}
            renderStepDetail={renderStepDetail}
            selectMinutes={selectMinutes}
            stepDetails={stepDetailsForColumn}
            stepHeight={stepHeight}
            stepMinutes={stepMinutes}
          />
        );
        return renderColumns({
          ColumnComponent,
          week: dateList,
          events: eventsWithColumns,
          eventsWithGroups: eventsWithColumnsGroups,
          stepDetails: mungedStepDetailsGroups,
          stepDetailsWithGroups: mungedStepDetails,
        });
      }}
    />
  );
};

TimeGridWrapper.defaultProps = {
  events: [],
  firstDay: FIRST_DAY_DEFAULT,
  isEventDraggable: () => true,
  isEventExtendable: () => true,
  minWidthColumn: MIN_WIDTH_COLUMN_DEFAULT,
  minWidthColumnEmpty: MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  onCurrentTimeChange: () => null,
  onDragEnd: () => null,
  onExtendEnd: () => null,
  onSelectEvent: () => null,
  onSelectRangeEnd: () => null,
  onSelectSlot: () => null,
  render: () => null,
  renderCorner: () => null,
  renderEvent: null,
  renderEventPaddingBottom: () => null,
  renderEventPaddingTop: () => null,
  renderSelectRange: null,
  renderSelectSlotIndicator: null,
  renderStepDetail: () => null,
  scrollToTime: SCROLL_TO_TIME_DEFAULT,
  selectedDate: SELECTED_DATE_DEFAULT,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  stepDetails: null,
  stepHeight: null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  visibleEventGroups: null,
  // If there are no columns in the events withColumns can still
  // be true. We only need them false if there IS a column_id on events
  // but we don't want to include it in our munging of the data
  // So it's going to be less common to set it to false
  withColumns: true,
};

TimeGridWrapper.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  firstDay: FIRST_DAY_TYPE,
  isEventDraggable: PropTypes.func,
  isEventExtendable: PropTypes.func,
  minWidthColumn: PropTypes.number,
  minWidthColumnEmpty: PropTypes.number,
  onCurrentTimeChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectRangeEnd: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderColumns: PropTypes.func.isRequired,
  renderCorner: PropTypes.func,
  renderEvent: PropTypes.func,
  renderEventPaddingBottom: PropTypes.func,
  renderEventPaddingTop: PropTypes.func,
  renderHeaders: PropTypes.func.isRequired,
  renderSelectRange: PropTypes.func,
  renderSelectSlotIndicator: PropTypes.func,
  renderStepDetail: PropTypes.func,
  scrollToTime: SCROLL_TO_TIME_TYPE,
  selectMinutes: STEP_MINUTES_TYPE,
  selectedDate: DATE_TYPE,
  stepDetails: PropTypes.arrayOf(STEP_DETAILS_TYPE),
  stepHeight: PropTypes.number,
  stepMinutes: STEP_MINUTES_TYPE,
  visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
  withColumns: PropTypes.bool,
};

export default TimeGridWrapper;
