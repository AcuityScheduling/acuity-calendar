import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import moment from 'moment';
import { getEventColumns } from '../../Calendar/components/TimeGrid/utils';
import TimeGrid from '../../Calendar/components/TimeGrid';
import Column from '../../Calendar/components/TimeGrid/components/Column';
import { getWeekList } from './utils';
import { useElementWidths } from '../../Calendar/components/TimeGrid/utils';
import {
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  EVENT_TYPE,
  DATE_TYPE,
  STEP_DETAILS_TYPE,
  SCROLL_TO_TIME_TYPE,
} from '../../Calendar/types';
import ColumnHeader from '../../Calendar/components/TimeGrid/components/ColumnHeader';
import {
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  STEP_MINUTES_DEFAULT,
  SELECT_MINUTES_DEFAULT,
  FIRST_DAY_DEFAULT,
  SELECTED_DATE_DEFAULT,
  SCROLL_TO_TIME_DEFAULT,
} from '../../Calendar/defaultProps';
import { useMungeData } from '../../Calendar/utils';

const CalendarWeek = ({
  events,
  selectedDate,
  firstDay,
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
  renderHeader,
  stepHeight,
  scrollToTime,
  visibleEventGroups,
}) => {
  const dateList = getWeekList({ date: moment(selectedDate), firstDay });
  const { TimeGridRef, assignRef, elementWidths } = useElementWidths();

  const {
    eventsWithSelectedEventGroups,
    mungedStepDetailsGroups,
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
      scrollToTime={scrollToTime}
      renderCorner={renderCorner}
      renderHeader={() =>
        dateList.map(date => {
          const totalEventColumns = Object.keys(
            get(eventsWithColumns, date.format('YYYY-MM-DD'), {})
          ).length;

          return (
            <ColumnHeader
              key={`dayHeader${date.date()}`}
              totalEventColumns={totalEventColumns}
              totalColumns={dateList.length}
              date={date}
              minWidth={minWidthColumn}
              minWidthEmpty={minWidthColumnEmpty}
            >
              {renderHeader ? (
                renderHeader({ data: date, events })
              ) : (
                <h2>
                  {date.format('dddd')}
                  <br />
                  {date.format('MMM, D')}
                </h2>
              )}
            </ColumnHeader>
          );
        })
      }
      renderColumns={({ currentTime, totalGridHeight }) => {
        return dateList.map((date, index) => {
          const stepDetailsForDay = get(
            mungedStepDetailsGroups,
            date.format('YYYY-MM-DD'),
            []
          );

          const eventsForDay = get(
            eventsWithColumns,
            date.format('YYYY-MM-DD'),
            {}
          );

          const columnId = new Date(
            date.startOf('day').format('YYYY-MM-DD HH:mm:ss')
          );

          return (
            <Column
              ref={assignRef(date.day())}
              key={`weekColumn${date.day()}`}
              events={eventsForDay}
              stepDetails={stepDetailsForDay}
              date={date}
              columnId={columnId}
              columnWidths={elementWidths}
              columnIndex={index}
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
              getUpdatedDraggedEvent={({ event, columnMoves, start, end }) => {
                const padding = {};
                if (typeof event.paddingTopStart !== 'undefined') {
                  padding.paddingTopStart = event.paddingTopStart
                    .clone()
                    .add(columnMoves, 'days');
                }
                if (typeof event.paddingBottomEnd !== 'undefined') {
                  padding.paddingBottomEnd = event.paddingBottomEnd
                    .clone()
                    .add(columnMoves, 'days');
                }

                return {
                  ...event,
                  start: start.clone().add(columnMoves, 'days'),
                  end: end.clone().add(columnMoves, 'days'),
                  ...padding,
                };
              }}
              renderStepDetail={renderStepDetail}
              renderSelectSlotIndicator={renderSelectSlotIndicator}
            />
          );
        });
      }}
    />
  );
};

CalendarWeek.defaultProps = {
  events: [],
  renderEvent: null,
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
  renderHeader: null,
  stepHeight: null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  selectedDate: SELECTED_DATE_DEFAULT,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  scrollToTime: SCROLL_TO_TIME_DEFAULT,
  firstDay: FIRST_DAY_DEFAULT,
  visibleEventGroups: null,
};

CalendarWeek.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  firstDay: FIRST_DAY_TYPE,
  minWidthColumn: PropTypes.number,
  minWidthColumnEmpty: PropTypes.number,
  onCurrentTimeChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectRangeEnd: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderCorner: PropTypes.func,
  renderEvent: PropTypes.func,
  renderEventPaddingBottom: PropTypes.func,
  renderEventPaddingTop: PropTypes.func,
  renderHeader: PropTypes.func,
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

export default CalendarWeek;
