import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash/get';
import StepGrid from '../../StepGrid';
import Day from '../../StepGrid/components/Day';
import { makeClass } from '../../../utils';
import {
  MOMENT_TYPE,
  FIRST_DAY_TYPE,
  STEP_MINUTES_TYPE,
  CALENDAR_VIEW_TYPE,
} from '../../../types';
import { TIME_GUTTER_WIDTH } from '../../StepGrid/constants';

const columnStyles = {
  minWidth: `${100 / 7}%`,
};

const CalendarsView = ({
  selectedDate,
  selectedEventGroups,
  renderGroupHeader,
  firstDay,
  stepMinutes,
  onSelectEvent,
  onSelectSlot,
  selectMinutes,
  eventsWithEventGroups,
  timeGutterWidth,
  renderEvent,
  renderCorner,
}) => {
  const getEventsForDay = groupId =>
    get(
      eventsWithEventGroups,
      `${groupId}.${selectedDate.format('YYYY-MM-DD')}`,
      []
    );

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
              {renderGroupHeader({ groupId, events: getEventsForDay(groupId) })}
            </div>
          );
        })
      }
      renderColumns={({ currentTime }) => {
        return selectedEventGroups.map(groupId => {
          return (
            <Day
              events={getEventsForDay(groupId)}
              date={selectedDate}
              onSelectEvent={onSelectEvent}
              onSelectSlot={onSelectSlot}
              selectMinutes={selectMinutes}
              key={`groupColumn${groupId}`}
              currentTime={currentTime}
              stepMinutes={stepMinutes}
              renderEvent={renderEvent}
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
};

CalendarsView.propTypes = {
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  view: CALENDAR_VIEW_TYPE.isRequired,
  selectedDate: MOMENT_TYPE,
  firstDay: FIRST_DAY_TYPE.isRequired,
  eventsWithEventGroups: PropTypes.object.isRequired,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  selectedEventGroups: PropTypes.arrayOf(PropTypes.number).isRequired,
  renderEvent: PropTypes.func,
  renderCorner: PropTypes.func,
  timeGutterWidth: PropTypes.number,
  renderGroupHeader: PropTypes.func.isRequired,
};

export default CalendarsView;
