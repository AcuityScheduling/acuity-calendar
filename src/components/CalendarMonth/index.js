import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Calendar from '../../Calendar';
import { CALENDARS } from '../../Calendar/constants';
import { EVENT_TYPE, DATE_TYPE, FIRST_DAY_TYPE } from '../../Calendar/types';
import {
  SELECTED_DATE_DEFAULT,
  FIRST_DAY_DEFAULT,
} from '../../Calendar/defaultProps';
import { getMonthGrid } from './utils';

const CalendarMonth = ({
  events,
  firstDay,
  forceSixWeeks,
  selectedDate,
  onDragEnd,
  onSelectMore,
  onSelectDate,
  onSelectSlot,
  onSelectEvent,
  visibleEventGroups,
  renderHeader,
  renderEvent,
}) => {
  const monthGrid = getMonthGrid({
    date: moment(selectedDate),
    firstDay,
    forceSixWeeks,
  });
  return (
    <Calendar
      calendarType={CALENDARS.day}
      grid={monthGrid}
      events={events}
      firstDay={firstDay}
      selectedDate={selectedDate}
      onDragEnd={onDragEnd}
      onSelectMoreEvents={onSelectMore}
      onSelectMonthDate={onSelectDate}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      visibleEventGroups={visibleEventGroups}
      renderEvent={renderEvent}
      renderHeader={renderHeader}
    />
  );
};

CalendarMonth.defaultProps = {
  events: [],
  forceSixWeeks: false,
  firstDay: FIRST_DAY_DEFAULT,
  selectedDate: SELECTED_DATE_DEFAULT,
  onDragEnd: () => null,
  onSelectDate: () => null,
  onSelectMore: () => null,
  onSelectEvent: () => null,
  onSelectSlot: () => null,
  visibleEventGroups: null,
  renderEvent: null,
  renderHeader: null,
};

CalendarMonth.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  firstDay: FIRST_DAY_TYPE,
  forceSixWeeks: PropTypes.bool,
  onDragEnd: PropTypes.func,
  onSelectDate: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectMore: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderEvent: PropTypes.func,
  renderHeader: PropTypes.func,
  selectedDate: DATE_TYPE,
  visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
};

export default CalendarMonth;
