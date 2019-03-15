import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../Grid';
import { CALENDAR_VIEWS } from '../../Grid/constants';
import { EVENT_TYPE, DATE_TYPE, FIRST_DAY_TYPE } from '../../Grid/types';
import {
  SELECTED_DATE_DEFAULT,
  FIRST_DAY_DEFAULT,
} from '../../Grid/defaultProps';
import { GRIDS } from '../../Grid/constants';

const CalendarMonth = ({
  events,
  firstDay,
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
    <Grid
      grid={GRIDS.day}
      view={CALENDAR_VIEWS.month}
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
      renderHeader={{
        [CALENDAR_VIEWS.month]: renderHeader,
      }}
    />
  );
};

CalendarMonth.defaultProps = {
  events: [],
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
