import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash/get';
import StepGrid from '../../StepGrid';
import Column from '../../StepGrid/components/Column';
import { MOMENT_TYPE, FIRST_DAY_TYPE, STEP_MINUTES_TYPE } from '../../../types';
import { useElementWidths } from '../../StepGrid/utils';
import { getEventColumnsByGroup } from '../../StepGrid/utils/getEventColumns';
import ColumnHeader from '../../StepGrid/components/ColumnHeader';
import {
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  STEP_MINUTES_DEFAULT,
  SELECT_MINUTES_DEFAULT,
  FIRST_DAY_DEFAULT,
} from '../../../defaultProps';
import { makeClass } from '../../../utils';

const getEventsForDay = ({ events, groupId, selectedDate }) => {
  return get(events, `${groupId}.${selectedDate.format('YYYY-MM-DD')}`, false);
};

const CalendarsView = ({
  selectedDate,
  selectedEventGroups,
  renderEventGroupHeader,
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
  stepDetailsWithEventGroups,
  eventsWithEventGroups,
  renderEvent,
  renderCorner,
  renderStepDetail,
  renderSelectSlotIndicator,
  renderSelectRange,
  renderEventPaddingTop,
  renderEventPaddingBottom,
  stepHeight,
}) => {
  const { assignRef, elementWidths } = useElementWidths();

  const eventsWithColumns = getEventColumnsByGroup(eventsWithEventGroups);

  return (
    <StepGrid
      selectedDate={selectedDate}
      firstDay={firstDay}
      onCurrentTimeChange={onCurrentTimeChange}
      stepMinutes={stepMinutes}
      selectMinutes={selectMinutes}
      stepHeight={stepHeight}
      renderCorner={renderCorner}
      renderHeader={() => {
        const totalColumns = selectedEventGroups.length;
        return selectedEventGroups.map(groupId => {
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
              <div className={makeClass('step-grid__group-header')}>
                {renderEventGroupHeader({
                  groupId,
                  events: eventsForDay,
                })}
              </div>
            </ColumnHeader>
          );
        });
      }}
      renderColumns={({ currentTime, columnWidths }) => {
        const getNewGroupId = ({ columnMoves, columnIndex }) => {
          const newIndex = columnIndex + columnMoves;
          return selectedEventGroups[newIndex];
        };

        return selectedEventGroups.map((groupId, index) => {
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
                  group_id: getNewGroupId({ columnMoves, columnIndex: index }),
                };
              }}
            />
          );
        });
      }}
    />
  );
};

CalendarsView.defaultProps = {
  renderCorner: () => null,
  renderEvent: null,
  selectedDate: moment(),
  onExtendEnd: () => null,
  onCurrentTimeChange: () => null,
  onDragEnd: () => null,
  onSelectRangeEnd: () => null,
  stepDetailsWithEventGroups: null,
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
  firstDay: FIRST_DAY_DEFAULT,
};

CalendarsView.propTypes = {
  eventsWithEventGroups: PropTypes.object.isRequired,
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
  renderEventGroupHeader: PropTypes.func.isRequired,
  renderEventPaddingBottom: PropTypes.func,
  renderEventPaddingTop: PropTypes.func,
  renderSelectRange: PropTypes.func,
  renderSelectSlotIndicator: PropTypes.func,
  renderStepDetail: PropTypes.func,
  selectMinutes: STEP_MINUTES_TYPE,
  selectedDate: MOMENT_TYPE,
  selectedEventGroups: PropTypes.arrayOf(PropTypes.number).isRequired,
  stepDetailsWithEventGroups: PropTypes.object,
  stepHeight: PropTypes.number,
  stepMinutes: STEP_MINUTES_TYPE,
};

export default CalendarsView;
