import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import TimeGrid from '../../Calendar/components/TimeGrid/TimeGridWrapper';
import {
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  EVENT_TYPE,
  DATE_TYPE,
  STEP_DETAILS_TYPE,
  SCROLL_TO_TIME_TYPE,
} from '../../Calendar/types';
import {
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  STEP_MINUTES_DEFAULT,
  SELECT_MINUTES_DEFAULT,
  FIRST_DAY_DEFAULT,
  SELECTED_DATE_DEFAULT,
  SCROLL_TO_TIME_DEFAULT,
} from '../../Calendar/defaultProps';
import { CALENDAR_VIEWS } from '../../Calendar/constants';

const CalendarWeek = ({
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
  renderHeader,
  stepHeight,
  scrollToTime,
  visibleEventGroups,
}) => {
  return (
    <TimeGrid
      events={events}
      selectedDate={selectedDate}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      onCurrentTimeChange={onCurrentTimeChange}
      selectMinutes={selectMinutes}
      stepHeight={stepHeight}
      scrollToTime={scrollToTime}
      renderCorner={renderCorner}
      renderHeaders={({ week, ColumnComponent, events }) => {
        return week.map(date => {
          return (
            <ColumnComponent
              key={`dayHeader${date.date()}`}
              date={date}
              type={CALENDAR_VIEWS.week}
            >
              {renderHeader ? (
                renderHeader({ date: new Date(date), events })
              ) : (
                <h2>
                  {date.format('dddd')}, {date.format('MMM D')}
                </h2>
              )}
            </ColumnComponent>
          );
        });
      }}
      renderColumns={({
        ColumnComponent,
        week,
        eventsForColumn,
        stepDetailsForColumn,
      }) => {
        return week.map((date, index) => {
          const stepDetailsForDay = get(
            stepDetailsForColumn,
            date.format('YYYY-MM-DD'),
            []
          );

          const eventsForDay = get(
            eventsForColumn,
            date.format('YYYY-MM-DD'),
            {}
          );

          const columnId = new Date(
            date.startOf('day').format('YYYY-MM-DD HH:mm:ss')
          );

          return (
            <ColumnComponent
              key={`weekColumn${date.day()}`}
              date={date}
              columnKey={`weekColumn${date.day()}`}
              events={eventsForDay}
              columnIndex={index}
              columnId={columnId}
              eventsForColumn={eventsForDay}
              stepDetailsForColumn={stepDetailsForDay}
            />
          );
        });
      }}
    />
  );
};

CalendarWeek.defaultProps = {
  events: [],
  isEventDraggable: () => true,
  isEventExtendable: () => true,
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
