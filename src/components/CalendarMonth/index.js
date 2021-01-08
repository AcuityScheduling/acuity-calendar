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
  selectedDate,
  onDragEnd,
  onSelectMore,
  onSelectDate,
  onSelectSlot,
  onSelectEvent,
  visibleEventGroups,
  renderHeader,
  renderCell,
  renderEvent,
}) => {
  const monthGrid = getMonthGrid({
    date: moment(selectedDate),
    firstDay,
    forceSixWeeks,
  });

  console.log(monthGrid);

  return (
    <DayGrid
      isEventDraggable={isEventDraggable}
      grid={monthGrid}
      events={events}
      onDragEnd={onDragEnd}
      onSelectMoreEvents={onSelectMore}
      onSelectDate={onSelectDate}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      visibleEventGroups={visibleEventGroups}
      renderEvent={renderEvent}
      renderHeader={renderHeader}
      renderCell={renderCell}
    />
  );
};

CalendarMonth.defaultProps = {
  events: [],
  isEventDraggable: () => true,
  forceSixWeeks: FORCE_SIX_WEEKS_DEFAULT,
  firstDay: FIRST_DAY_DEFAULT,
  selectedDate: SELECTED_DATE_DEFAULT,
  onDragEnd: () => null,
  onSelectDate: null,
  onSelectMore: () => null,
  onSelectEvent: () => null,
  onSelectSlot: () => null,
  visibleEventGroups: null,
  renderCell: null,
  renderEvent: null,
  renderHeader: null,
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
  renderEvent: PropTypes.func,
  renderHeader: PropTypes.func,
  selectedDate: DATE_TYPE,
  visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
};

export default CalendarMonth;
