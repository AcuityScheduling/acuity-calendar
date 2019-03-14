import React from 'react';
import PropTypes from 'prop-types';
import Calendar from '../../Calendar';
import { CALENDAR_VIEWS } from '../../Calendar/constants';
import { EVENT_TYPE, DATE_TYPE } from '../../Calendar/types';
import { SELECTED_DATE_DEFAULT } from '../../Calendar/defaultProps';

const CalendarWeek = ({
  events,
  selectedDate,
  onCurrentTimeChange,
  onDragEnd,
  onExtendEnd,
  onSelectDate,
  onSelectSlot,
  onSelectEvent,
  onSelectRangeEnd,
  visibleEventGroups,
  renderEvent,
  renderHeader,
  renderStepDetail,
  stepDetails,
}) => {
  return (
    <Calendar
      view={CALENDAR_VIEWS.week}
      events={events}
      stepDetails={stepDetails}
      selectedDate={selectedDate}
      onDragEnd={onDragEnd}
      onExtendEnd={onExtendEnd}
      onSelectEvent={onSelectEvent}
      onSelectRangeEnd={onSelectRangeEnd}
      onSelectSlot={onSelectSlot}
      renderStepDetail={renderStepDetail}
      onCurrentTimeChange={onCurrentTimeChange}
      visibleEventGroups={visibleEventGroups}
      renderEvent={renderEvent}
      renderHeader={{
        [CALENDAR_VIEWS.week]: renderHeader,
      }}
    />
  );
};

CalendarWeek.defaultProps = {
  events: [],
  selectedDate: SELECTED_DATE_DEFAULT,
  onCurrentTimeChange: () => null,
  onDragEnd: () => null,
  onExtendEnd: () => null,
  onSelectDate: () => null,
  onSelectMore: () => null,
  onSelectEvent: () => null,
  onSelectRangeEnd: () => null,
  onSelectSlot: () => null,
  visibleEventGroups: null,
  renderHeader: null,
  renderEvent: null,
  renderStepDetail: () => null,
  stepDetails: [],
};

CalendarWeek.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  onCurrentTimeChange: PropTypes.func,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectDate: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectMore: PropTypes.func,
  onSelectRangeEnd: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderEvent: PropTypes.func,
  renderHeader: PropTypes.func,
  renderStepDetail: PropTypes.func,
  selectedDate: DATE_TYPE,
  stepDetails: PropTypes.array,
  visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
};

export default CalendarWeek;
