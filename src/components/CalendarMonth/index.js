import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DayGrid from '../../Calendar/components/DayGrid';
import { EVENT_TYPE, DATE_TYPE, FIRST_DAY_TYPE } from '../../Calendar/types';
import {
  SELECTED_DATE_DEFAULT,
  FIRST_DAY_DEFAULT,
  FORCE_SIX_WEEKS_DEFAULT,
} from '../../Calendar/defaultProps';
import { getMonthGrid } from './utils';

const CalendarMonth = ({
  events,
  firstDay,
  forceSixWeeks,
  isEventDraggable,
  onDragEnd,
  onSelectDate,
  onSelectEvent,
  onSelectMore,
  onSelectSlot,
  renderCell,
  renderHeader,
  selectedDate,
  visibleEventGroups,
}) => {
  const monthGrid = getMonthGrid({
    date: moment(selectedDate),
    firstDay,
    forceSixWeeks,
  });

  return (
    <DayGrid
      events={events}
      grid={monthGrid}
      isEventDraggable={isEventDraggable}
      onDragEnd={onDragEnd}
      onSelectDate={onSelectDate}
      onSelectEvent={onSelectEvent}
      onSelectMoreEvents={onSelectMore}
      onSelectSlot={onSelectSlot}
      renderCell={renderCell}
      renderHeader={renderHeader}
      visibleEventGroups={visibleEventGroups}
    />
  );
};

CalendarMonth.defaultProps = {
  events: [],
  firstDay: FIRST_DAY_DEFAULT,
  forceSixWeeks: FORCE_SIX_WEEKS_DEFAULT,
  isEventDraggable: () => true,
  onDragEnd: () => null,
  onSelectDate: null,
  onSelectEvent: () => null,
  onSelectMore: () => null,
  onSelectSlot: () => null,
  selectedDate: SELECTED_DATE_DEFAULT,
  visibleEventGroups: null,
};

CalendarMonth.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  firstDay: FIRST_DAY_TYPE,
  forceSixWeeks: PropTypes.bool,
  isEventDraggable: PropTypes.func,
  onDragEnd: PropTypes.func,
  onSelectDate: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectMore: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderCell: PropTypes.func,
  renderHeader: PropTypes.func,
  selectedDate: DATE_TYPE,
  visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
};

export default CalendarMonth;
