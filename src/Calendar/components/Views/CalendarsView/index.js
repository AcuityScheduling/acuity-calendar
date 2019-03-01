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
  onSelectEvent,
  onSelectSlot,
  selectMinutes,
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
        return selectedEventGroups.map((groupId, index) => {
          return (
            <Column
              key={`groupColumn${groupId}`}
              ref={assignRef(groupId)}
              events={getEventsForDay(groupId)}
              columnWidths={elementWidths}
              columnIndex={index}
              date={selectedDate}
              onDragEnd={onDragEnd}
              onSelectEvent={onSelectEvent}
              onSelectSlot={onSelectSlot}
              selectMinutes={selectMinutes}
              currentTime={currentTime}
              stepMinutes={stepMinutes}
              renderEvent={renderEvent}
              getUpdatedDraggedEvent={({ event, columnMoves, start, end }) => {
                return {
                  ...event,
                  start: start.add(columnMoves, 'days'),
                  end: end.add(columnMoves, 'days'),
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
  onDragEnd: () => null,
};

CalendarsView.propTypes = {
  eventsWithEventGroups: PropTypes.object.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  onDragEnd: PropTypes.func,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  renderCorner: PropTypes.func,
  renderEvent: PropTypes.func,
  renderEventGroupHeader: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  selectedDate: MOMENT_TYPE,
  selectedEventGroups: PropTypes.arrayOf(PropTypes.number).isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  timeGutterWidth: PropTypes.number,
};

export default CalendarsView;
