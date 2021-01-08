import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash.get';
import TimeGrid from '../../Calendar/components/TimeGrid/TimeGridWrapper';
import { EVENT_GROUP, DATE_TYPE } from '../../Calendar/types';
import { CALENDAR_VIEWS } from '../../Calendar/constants';

const getEventsForDay = ({ events, groupId, selectedDate }) => {
  return get(
    events,
    `${groupId}.${moment(selectedDate).format('YYYY-MM-DD')}`,
    false
  );
};

const CalendarGroups = ({
  eventGroups = [],
  visibleEventGroups,
  renderHeader,
  selectedDate,
  ...restProps
}) => {
  return (
    <TimeGrid
      selectedDate={selectedDate}
      visibleEventGroups={visibleEventGroups}
      withColumns={false}
      {...restProps}
      renderHeaders={({ ColumnComponent, eventsWithGroups }) => {
        return eventGroups.map(eventGroup => {
          if (visibleEventGroups && !visibleEventGroups.includes(eventGroup.id))
            return false;
          const eventsForDay = getEventsForDay({
            events: eventsWithGroups,
            groupId: eventGroup.id,
            selectedDate,
          });
          const totalEventColumns = Object.keys(eventsForDay).length;
          return (
            <ColumnComponent
              totalEventColumns={totalEventColumns}
              key={`dayHeader${eventGroup.id}`}
              date={selectedDate}
              columnClass={CALENDAR_VIEWS.groups}
            >
              <h2>
                {renderHeader
                  ? renderHeader({
                      group: eventGroup,
                      events: eventsForDay,
                    })
                  : eventGroup.title}
              </h2>
            </ColumnComponent>
          );
        });
      }}
      renderColumns={({
        ColumnComponent,
        eventsWithGroups,
        stepDetailsWithGroups,
      }) => {
        return eventGroups.map((eventGroup, index) => {
          if (visibleEventGroups && !visibleEventGroups.includes(eventGroup.id))
            return null;
          const eventsForDay =
            getEventsForDay({
              events: eventsWithGroups,
              groupId: eventGroup.id,
              selectedDate,
            }) || {};

          const stepDetailsForDay =
            getEventsForDay({
              events: stepDetailsWithGroups,
              groupId: eventGroup.id,
              selectedDate,
            }) || [];
          return (
            <ColumnComponent
              date={selectedDate}
              key={`groupColumn${index}`}
              columnKey={`groupColumn${index}`}
              columnIndex={index}
              columnId={eventGroup.id}
              eventsForColumn={eventsForDay}
              stepDetailsForColumn={stepDetailsForDay}
              getUpdatedDraggedEvent={({ event, columnMoves }) => {
                const newIndex = index + columnMoves;
                return {
                  ...event,
                  group_id: eventGroups[newIndex].id,
                };
              }}
            />
          );
        });
      }}
    />
  );
};

CalendarGroups.defaultProps = {
  selectedDate: new Date(),
  renderHeader: null,
  visibleEventGroups: null,
};

CalendarGroups.propTypes = {
  eventGroups: PropTypes.arrayOf(EVENT_GROUP).isRequired,
  renderHeader: PropTypes.func,
  selectedDate: DATE_TYPE,
  visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
};

export default CalendarGroups;
