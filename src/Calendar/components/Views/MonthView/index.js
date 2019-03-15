import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getMonthGrid } from './utils';
import { FIRST_DAY_TYPE, MOMENT_TYPE, VIEW_RENDER_TYPE } from '../../../types';
import { FIRST_DAY_DEFAULT, VIEW_RENDER_DEFAULT } from '../../../defaultProps';
import DayGrid from '../../DayGrid';

const MonthView = ({
  events,
  selectedDate,
  firstDay,
  onDragEnd,
  onSelectEvent,
  onSelectSlot,
  onSelectMonthDate,
  onSelectMoreEvents,
  forceSixWeeks,
  renderEvent,
  renderMonthCell,
  renderHeader,
}) => {
  const monthGrid = getMonthGrid({
    date: selectedDate,
    firstDay,
    forceSixWeeks,
  });
  return (
    <DayGrid
      grid={monthGrid}
      events={events}
      selectedDate={selectedDate}
      firstDay={firstDay}
      onDragEnd={onDragEnd}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      onSelectDate={onSelectMonthDate}
      onSelectMoreEvents={onSelectMoreEvents}
      renderEvent={renderEvent}
      renderCell={renderMonthCell}
    />
  );
};

MonthView.defaultProps = {
  renderEvent: null,
  forceSixWeeks: false,
  renderMonthCell: null,
  onSelectDate: null,
  firstDay: FIRST_DAY_DEFAULT,
  onSelectMoreEvents: () => null,
  onSelectMonthDate: () => null,
  onDragEnd: () => null,
  onSelectSlot: () => null,
  onSelectEvent: () => null,
  renderHeader: VIEW_RENDER_DEFAULT,
  selectedDate: moment(),
};

MonthView.propTypes = {
  events: PropTypes.object.isRequired,
  firstDay: FIRST_DAY_TYPE,
  forceSixWeeks: PropTypes.bool,
  onDragEnd: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectMonthDate: PropTypes.func,
  onSelectMoreEvents: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderEvent: PropTypes.func,
  renderHeader: VIEW_RENDER_TYPE,
  renderMonthCell: PropTypes.func,
  selectedDate: MOMENT_TYPE,
};

export default MonthView;
