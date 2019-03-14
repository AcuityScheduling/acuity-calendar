import React from 'react';
import PropTypes from 'prop-types';
import Calendar from '../../Calendar';
import { CALENDAR_VIEWS } from '../../Calendar/constants';
import { EVENT_TYPE, DATE_TYPE } from '../../Calendar/types';
import { SELECTED_DATE_DEFAULT } from '../../Calendar/defaultProps';

const CalendarMonth = ({
  events,
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
  return (
    <Calendar
      view={CALENDAR_VIEWS.month}
      events={events}
      selectedDate={selectedDate}
      onDragEnd={onDragEnd}
      onSelectMoreEvents={onSelectMore}
      onSelectMonthDate={onSelectDate}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      visibleEventGroups={visibleEventGroups}
      renderEvent={renderEvent}
      renderHeader={{
        [CALENDAR_VIEWS.month]: renderHeader,
      }}
    />
  );
};

CalendarMonth.defaultProps = {
  events: [],
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
