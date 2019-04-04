import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash.get';
import TimeGrid from '../../Calendar/components/TimeGrid';
import Column from '../../Calendar/components/TimeGrid/components/Column';
import { useElementWidths } from '../../Calendar/components/TimeGrid/utils';
import { getEventColumnsByGroup } from '../../Calendar/components/TimeGrid/utils/getEventColumns';
import ColumnHeader from '../../Calendar/components/TimeGrid/components/ColumnHeader';
import {
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  STEP_MINUTES_DEFAULT,
  SELECT_MINUTES_DEFAULT,
  FIRST_DAY_DEFAULT,
  SCROLL_TO_TIME_DEFAULT,
} from '../../Calendar/defaultProps';
import { useMungeData } from '../../Calendar/utils';
import {
  EVENT_TYPE,
  MOMENT_TYPE,
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  STEP_DETAILS_TYPE,
  SCROLL_TO_TIME_TYPE,
  EVENT_GROUP,
} from '../../Calendar/types';
import { scrollToEvent } from '../../Calendar/components/TimeGrid/utils';
import { CALENDAR_VIEWS } from '../../Calendar/constants';

const getEventsForDay = ({ events, groupId, selectedDate }) => {
  return get(events, `${groupId}.${selectedDate.format('YYYY-MM-DD')}`, false);
};

const CalendarGroups = ({
  eventGroups,
  selectedDate,
  visibleEventGroups,
  renderHeader,
  firstDay,
  stepMinutes,
  minWidthColumn,
  minWidthColumnEmpty,
  onDragEnd,
  onExtendEnd,
  onCurrentTimeChange,
  onSelectEvent,
  onSelectSlot,
  onSelectRangeEnd,
  selectMinutes,
  stepDetails,
  isEventDraggable,
  isEventExtendable,
  events,
  renderEvent,
  renderCorner,
  renderStepDetail,
  renderSelectSlotIndicator,
  renderSelectRange,
  renderEventPaddingTop,
  renderEventPaddingBottom,
  stepHeight,
  scrollToTime,
}) => {
  const { TimeGridRef, assignRef, elementWidths } = useElementWidths();
  const {
    mungedEvents,
    mungedStepDetails: stepDetailsWithEventGroups,
  } = useMungeData({
    events,
    stepMinutes,
    stepHeight,
    stepDetails,
    visibleEventGroups,
  });

  const eventsWithColumns = getEventColumnsByGroup(mungedEvents);

  return (
    <TimeGrid
      ref={TimeGridRef}
      selectedDate={selectedDate}
      firstDay={firstDay}
      totalWidth={elementWidths.reduce((total, value) => total + value, 0)}
      onCurrentTimeChange={onCurrentTimeChange}
      stepMinutes={stepMinutes}
      selectMinutes={selectMinutes}
      stepHeight={stepHeight}
      renderCorner={renderCorner}
      scrollToTime={
        scrollToTime === 'firstEvent'
          ? scrollToEvent({ mungedEvents, selectedDate, hasGroups: true })
          : scrollToTime
      }
      renderHeader={() => {
        const totalColumns = eventGroups.length;
        return eventGroups.map(eventGroup => {
          if (visibleEventGroups && !visibleEventGroups.includes(eventGroup.id))
            return false;
          const eventsForDay = getEventsForDay({
            events: eventsWithColumns,
            groupId: eventGroup.id,
            selectedDate,
          });
          const totalEventColumns = Object.keys(eventsForDay).length;
          return (
            <ColumnHeader
              key={`calendarHeader${eventGroup.id}`}
              totalEventColumns={totalEventColumns}
              totalColumns={totalColumns}
              date={selectedDate}
              minWidth={minWidthColumn}
              minWidthEmpty={minWidthColumnEmpty}
              type={CALENDAR_VIEWS.groups}
            >
              <h2>
                {renderHeader
                  ? renderHeader({
                      group: eventGroup,
                      events: eventsForDay,
                    })
                  : eventGroup.title}
              </h2>
            </ColumnHeader>
          );
        });
      }}
      renderColumns={({ currentTime, totalGridHeight }) => {
        const getNewGroupId = ({ columnMoves, columnIndex }) => {
          const newIndex = columnIndex + columnMoves;
          return eventGroups[newIndex].id;
        };

        return eventGroups.map((eventGroup, index) => {
          if (visibleEventGroups && !visibleEventGroups.includes(eventGroup.id))
            return null;
          const eventsForDay =
            getEventsForDay({
              events: eventsWithColumns,
              groupId: eventGroup.id,
              selectedDate,
            }) || {};

          const stepDetailsForDay =
            getEventsForDay({
              events: stepDetailsWithEventGroups,
              groupId: eventGroup.id,
              selectedDate,
            }) || [];
          return (
            <Column
              ref={assignRef(eventGroup.id)}
              key={`groupColumn${eventGroup.id}`}
              events={eventsForDay}
              stepDetails={stepDetailsForDay}
              gridHeight={totalGridHeight}
              stepHeight={stepHeight}
              date={selectedDate}
              columnId={eventGroup.id}
              columnWidths={elementWidths}
              columnIndex={index}
              isEventDraggable={isEventDraggable}
              isEventExtendable={isEventExtendable}
              onDragEnd={onDragEnd}
              onExtendEnd={onExtendEnd}
              onSelectEvent={onSelectEvent}
              onSelectRangeEnd={onSelectRangeEnd}
              onSelectSlot={onSelectSlot}
              stepMinutes={stepMinutes}
              selectMinutes={selectMinutes}
              currentTime={currentTime}
              renderEvent={renderEvent}
              renderStepDetail={renderStepDetail}
              renderSelectSlotIndicator={renderSelectSlotIndicator}
              renderSelectRange={renderSelectRange}
              renderEventPaddingTop={renderEventPaddingTop}
              renderEventPaddingBottom={renderEventPaddingBottom}
              getUpdatedDraggedEvent={({ event, columnMoves }) => {
                return {
                  ...event,
                  group_id: getNewGroupId({
                    columnMoves,
                    columnIndex: index,
                  }),
                };
              }}
            />
          );
        });
      }}
    />
  );
};

CalendarGroups.defaultProps = {
  events: [],
  isEventDraggable: () => true,
  isEventExtendable: () => true,
  renderCorner: () => null,
  renderEvent: null,
  selectedDate: moment(),
  onExtendEnd: () => null,
  onCurrentTimeChange: () => null,
  onDragEnd: () => null,
  onSelectRangeEnd: () => null,
  onSelectEvent: () => null,
  onSelectSlot: () => null,
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
  selectMinutes: SELECT_MINUTES_DEFAULT,
  stepDetails: null,
  scrollToTime: SCROLL_TO_TIME_DEFAULT,
  firstDay: FIRST_DAY_DEFAULT,
  visibleEventGroups: null,
};

CalendarGroups.propTypes = {
  eventGroups: PropTypes.arrayOf(EVENT_GROUP).isRequired,
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
  selectedDate: MOMENT_TYPE,
  stepDetails: PropTypes.arrayOf(STEP_DETAILS_TYPE),
  stepHeight: PropTypes.number,
  stepMinutes: STEP_MINUTES_TYPE,
  visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
};

export default CalendarGroups;
