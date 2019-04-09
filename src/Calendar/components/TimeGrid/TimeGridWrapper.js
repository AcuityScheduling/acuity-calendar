import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TimeGrid from './';
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
  selectedDate,
  firstDay,
  isEventDraggable,
  isEventExtendable,
  minWidthColumn,
  minWidthColumnEmpty,
  stepMinutes,
  onDragEnd,
  onExtendEnd,
  onSelectEvent,
  onSelectSlot,
  onCurrentTimeChange,
  onSelectRangeEnd,
  selectMinutes,
  renderEvent,
  stepDetails,
  renderCorner,
  renderStepDetail,
  renderSelectSlotIndicator,
  renderSelectRange,
  renderEventPaddingTop,
  renderEventPaddingBottom,
  renderHeaders,
  renderColumns,
  stepHeight,
  scrollToTime,
  visibleEventGroups,
}) => {
  const dateList = getWeekList({ date: moment(selectedDate), firstDay });
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
              selectedDate: moment(selectedDate),
              hasGroups: false,
            })
          : scrollToTime
      }
      renderCorner={renderCorner}
      renderHeader={() => {
        const ColumnComponent = ({
          /* eslint-disable react/prop-types */
          totalEventColumns,
          date,
          columnClass,
          ...restProps
          /* eslint-enable react/prop-types */
        }) => {
          const dayDate = moment(new Date(date)).format('YYYY-MM-DD');
          let actualEventColumns = totalEventColumns;
          if (!totalEventColumns) {
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
            key={`weekColumn${columnKey}`}
            events={eventsForColumn}
            stepDetails={stepDetailsForColumn}
            date={date}
            columnId={columnId}
            columnWidths={elementWidths}
            columnIndex={columnIndex}
            isEventDraggable={isEventDraggable}
            isEventExtendable={isEventExtendable}
            minWidth={minWidthColumn}
            minWidthEmpty={minWidthColumnEmpty}
            onDragEnd={onDragEnd}
            onExtendEnd={onExtendEnd}
            onSelectEvent={onSelectEvent}
            onSelectSlot={onSelectSlot}
            onSelectRangeEnd={onSelectRangeEnd}
            renderSelectRange={renderSelectRange}
            stepMinutes={stepMinutes}
            selectMinutes={selectMinutes}
            stepHeight={stepHeight}
            gridHeight={totalGridHeight}
            currentTime={currentTime}
            renderEvent={renderEvent}
            renderEventPaddingTop={renderEventPaddingTop}
            renderEventPaddingBottom={renderEventPaddingBottom}
            getUpdatedDraggedEvent={getUpdatedDraggedEvent}
            renderStepDetail={renderStepDetail}
            renderSelectSlotIndicator={renderSelectSlotIndicator}
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
  isEventDraggable: () => true,
  isEventExtendable: () => true,
  renderEvent: null,
  render: () => null,
  renderCorner: () => null,
  stepDetails: null,
  onExtendEnd: () => null,
  onCurrentTimeChange: () => null,
  onDragEnd: () => null,
  onSelectEvent: () => null,
  onSelectSlot: () => null,
  onSelectRangeEnd: () => null,
  minWidthColumn: MIN_WIDTH_COLUMN_DEFAULT,
  minWidthColumnEmpty: MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  renderStepDetail: () => null,
  renderSelectSlotIndicator: null,
  renderSelectRange: null,
  renderEventPaddingTop: () => null,
  renderEventPaddingBottom: () => null,
  stepHeight: null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  selectedDate: SELECTED_DATE_DEFAULT,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  scrollToTime: SCROLL_TO_TIME_DEFAULT,
  firstDay: FIRST_DAY_DEFAULT,
  visibleEventGroups: null,
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
};

export default TimeGridWrapper;
