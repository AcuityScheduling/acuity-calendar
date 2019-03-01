import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash/get';
import StepGrid from '../../StepGrid';
import Column from '../../StepGrid/components/Column';
import { makeClass } from '../../../utils';
import { MOMENT_TYPE, FIRST_DAY_TYPE, STEP_MINUTES_TYPE } from '../../../types';
import { TIME_GUTTER_WIDTH } from '../../StepGrid/constants';
import { useElementWidths } from '../../StepGrid/utils';
import { getEventColumnsByGroup } from '../../StepGrid/utils/getEventColumns';

const columnStyles = {
  minWidth: `${100 / 7}%`,
};

const CalendarsView = ({
  selectedDate,
  selectedEventGroups,
  renderEventGroupHeader,
  firstDay,
  stepMinutes,
  onDragEnd,
  onExtendEnd,
  onSelectEvent,
  onSelectSlot,
  selectMinutes,
  stepDetails,
  eventsWithEventGroups,
  timeGutterWidth,
  renderEvent,
  renderCorner,
}) => {
  const { assignRef, elementWidths } = useElementWidths();

  const eventsWithColumns = getEventColumnsByGroup(eventsWithEventGroups);

  const getEventsForDay = groupId => {
    return get(
      eventsWithColumns,
      `${groupId}.${selectedDate.format('YYYY-MM-DD')}`,
      []
    );
  };

  return (
    <StepGrid
      selectedDate={selectedDate}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      selectMinutes={selectMinutes}
      timeGutterWidth={timeGutterWidth}
      renderCorner={renderCorner}
      renderHeader={() =>
        selectedEventGroups.map(groupId => {
          return (
            <div
              className={makeClass('step-grid__header-column')}
              key={`header${groupId}`}
              style={columnStyles}
            >
              {renderEventGroupHeader({
                groupId,
                events: getEventsForDay(groupId),
              })}
            </div>
          );
        })
      }
      renderColumns={({ currentTime, columnWidths }) => {
        const getNewGroupId = ({ columnMoves, columnIndex }) => {
          const newIndex = columnIndex + columnMoves;
          return selectedEventGroups[newIndex];
        };

        return selectedEventGroups.map((groupId, index) => {
          return (
            <Column
              ref={assignRef(groupId)}
              key={`groupColumn${groupId}`}
              events={getEventsForDay(groupId)}
              // stepDetails={stepDetails}
              date={selectedDate}
              columnWidths={elementWidths}
              columnIndex={index}
              onDragEnd={onDragEnd}
              onExtendEnd={onExtendEnd}
              onSelectEvent={onSelectEvent}
              onSelectSlot={onSelectSlot}
              stepMinutes={stepMinutes}
              selectMinutes={selectMinutes}
              currentTime={currentTime}
              renderEvent={renderEvent}
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
  timeGutterWidth: TIME_GUTTER_WIDTH,
  selectedDate: moment(),
  onExtendEnd: () => null,
  onDragEnd: () => null,
  stepDetails: null,
};

CalendarsView.propTypes = {
  eventsWithEventGroups: PropTypes.object.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  renderCorner: PropTypes.func,
  renderEvent: PropTypes.func,
  renderEventGroupHeader: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  selectedDate: MOMENT_TYPE,
  selectedEventGroups: PropTypes.arrayOf(PropTypes.number).isRequired,
  stepDetails: PropTypes.object,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  timeGutterWidth: PropTypes.number,
};

export default CalendarsView;
