import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash/get';
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
} from '../../Calendar/defaultProps';
import { useMungeData } from '../../Calendar/utils';
import {
  EVENT_TYPE,
  MOMENT_TYPE,
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  STEP_DETAILS_TYPE,
} from '../../Calendar/types';

const getEventsForDay = ({ events, groupId, selectedDate }) => {
  return get(events, `${groupId}.${selectedDate.format('YYYY-MM-DD')}`, false);
};

const CalendarGroups = ({
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
  events,
  renderEvent,
  renderCorner,
  renderStepDetail,
  renderSelectSlotIndicator,
  renderSelectRange,
  renderEventPaddingTop,
  renderEventPaddingBottom,
  stepHeight,
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

  // If visibleEventGroups isn't passed in let's just show all the event groups
  let eventGroups = visibleEventGroups;
  if (!visibleEventGroups) {
    eventGroups = Object.keys(eventsWithColumns).map(groupId =>
      Number(groupId)
    );
  }

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
      renderHeader={() => {
        const totalColumns = eventGroups.length;
        return eventGroups.map(groupId => {
          const eventsForDay = getEventsForDay({
            events: eventsWithColumns,
            groupId,
            selectedDate,
          });
          const totalEventColumns = Object.keys(eventsForDay).length;
          return (
            <ColumnHeader
              key={`calendarHeader${groupId}`}
              totalEventColumns={totalEventColumns}
              totalColumns={totalColumns}
              date={selectedDate}
              minWidth={minWidthColumn}
              minWidthEmpty={minWidthColumnEmpty}
            >
              <h2>
                {renderHeader &&
                  renderHeader({
                    groupId,
                    events: eventsForDay,
                  })}
              </h2>
            </ColumnHeader>
          );
        });
      }}
      renderColumns={({ currentTime, totalGridHeight }) => {
        const getNewGroupId = ({ columnMoves, columnIndex }) => {
          const newIndex = columnIndex + columnMoves;
          return eventGroups[newIndex];
        };

        return eventGroups.map((groupId, index) => {
          const eventsForDay =
            getEventsForDay({
              events: eventsWithColumns,
              groupId,
              selectedDate,
            }) || {};

          const stepDetailsForDay =
            getEventsForDay({
              events: stepDetailsWithEventGroups,
              groupId,
              selectedDate,
            }) || [];
          return (
            <Column
              ref={assignRef(groupId)}
              key={`groupColumn${groupId}`}
              events={eventsForDay}
              stepDetails={stepDetailsForDay}
              gridHeight={totalGridHeight}
              stepHeight={stepHeight}
              date={selectedDate}
              columnId={groupId}
              columnWidths={elementWidths}
              columnIndex={index}
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
  renderCorner: () => null,
  renderEvent: null,
  selectedDate: moment(),
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
  stepHeight: null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  stepDetails: null,
  firstDay: FIRST_DAY_DEFAULT,
  visibleEventGroups: null,
};

CalendarGroups.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  firstDay: FIRST_DAY_TYPE,
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
  renderHeader: PropTypes.func.isRequired,
  renderSelectRange: PropTypes.func,
  renderSelectSlotIndicator: PropTypes.func,
  renderStepDetail: PropTypes.func,
  selectMinutes: STEP_MINUTES_TYPE,
  selectedDate: MOMENT_TYPE,
  stepDetails: PropTypes.arrayOf(STEP_DETAILS_TYPE),
  stepHeight: PropTypes.number,
  stepMinutes: STEP_MINUTES_TYPE,
  visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
};

export default CalendarGroups;
