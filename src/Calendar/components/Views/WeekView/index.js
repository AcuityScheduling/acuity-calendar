import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { getEventColumns } from '../../StepGrid/utils';
import StepGrid from '../../StepGrid';
import Column from '../../StepGrid/components/Column';
import { getWeekList } from './utils';
import { useElementWidths } from '../../StepGrid/utils';
import { MOMENT_TYPE, FIRST_DAY_TYPE, STEP_MINUTES_TYPE } from '../../../types';
import ColumnHeader from '../../StepGrid/components/ColumnHeader';
import {
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
} from '../../../defaultProps';

const WeekView = ({
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
  timeGutterWidth,
  stepDetails,
  renderCorner,
  renderStepDetail,
  renderSelectSlotIndicator,
  renderSelectRange,
  renderEventPaddingTop,
  renderEventPaddingBottom,
}) => {
  const dateList = getWeekList({ date: selectedDate, firstDay });
  const { assignRef, elementWidths } = useElementWidths();
  const eventsWithColumns = useMemo(() => getEventColumns(events), [events]);

  return (
    <StepGrid
      selectedDate={selectedDate}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      onCurrentTimeChange={onCurrentTimeChange}
      selectMinutes={selectMinutes}
      timeGutterWidth={timeGutterWidth}
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
              <h2>{date.format('dddd, MMM D')}</h2>
            </ColumnHeader>
          );
        })
      }
      renderColumns={({ currentTime }) => {
        return dateList.map((date, index) => {
          const stepDetailsForDay = get(
            stepDetails,
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
              currentTime={currentTime}
              renderEvent={renderEvent}
              renderEventPaddingTop={renderEventPaddingTop}
              renderEventPaddingBottom={renderEventPaddingBottom}
              getUpdatedDraggedEvent={({ event, columnMoves, start, end }) => {
                return {
                  ...event,
                  start: start.add(columnMoves, 'days'),
                  end: end.add(columnMoves, 'days'),
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

WeekView.defaultProps = {
  renderEvent: null,
  renderCorner: null,
  timeGutterWidth: 50,
  stepDetails: null,
  onExtendEnd: () => null,
  onCurrentTimeChange: () => null,
  onDragEnd: () => null,
  onSelectRangeEnd: () => null,
  minWidthColumn: MIN_WIDTH_COLUMN_DEFAULT,
  minWidthColumnEmpty: MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  renderStepDetail: () => null,
  renderSelectSlotIndicator: null,
  renderSelectRange: null,
  renderEventPaddingTop: () => null,
  renderEventPaddingBottom: () => null,
};

WeekView.propTypes = {
  events: PropTypes.object.isRequired,
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
  renderEventPaddingBottom: PropTypes.func,
  renderEventPaddingTop: PropTypes.func,
  renderSelectRange: PropTypes.func,
  renderSelectSlotIndicator: PropTypes.func,
  renderStepDetail: PropTypes.func,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  selectedDate: MOMENT_TYPE.isRequired,
  stepDetails: PropTypes.object,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  timeGutterWidth: PropTypes.number,
};

export default WeekView;
