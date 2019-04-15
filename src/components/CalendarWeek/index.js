import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash.get';
import TimeGrid from '../../Calendar/components/TimeGrid/TimeGridWrapper';
import { CALENDAR_VIEWS } from '../../Calendar/constants';

const CalendarWeek = ({ renderHeader, ...restProps }) => {
  return (
    <TimeGrid
      {...restProps}
      renderHeaders={({ week, ColumnComponent, events }) => {
        return week.map(date => {
          const dateMoment = moment(date);
          return (
            <ColumnComponent
              key={`dayHeader${dateMoment.date()}`}
              date={dateMoment}
              columnClass={CALENDAR_VIEWS.week}
            >
              {renderHeader ? (
                renderHeader({ date, events })
              ) : (
                <h2>
                  {dateMoment.format('dddd')}, {dateMoment.format('MMM D')}
                </h2>
              )}
            </ColumnComponent>
          );
        });
      }}
      renderColumns={({ ColumnComponent, week, events, stepDetails }) => {
        return week.map((date, index) => {
          const dateMoment = moment(date);
          const stepDetailsForDay = get(
            stepDetails,
            dateMoment.format('YYYY-MM-DD'),
            []
          );

          const eventsForDay = get(events, dateMoment.format('YYYY-MM-DD'), {});

          const columnId = new Date(
            dateMoment.startOf('day').format('YYYY-MM-DD HH:mm:ss')
          );

          return (
            <ColumnComponent
              key={`weekColumn${dateMoment.day()}`}
              date={dateMoment}
              columnKey={`weekColumn${dateMoment.day()}`}
              events={eventsForDay}
              columnIndex={index}
              columnId={columnId}
              eventsForColumn={eventsForDay}
              stepDetailsForColumn={stepDetailsForDay}
              getUpdatedDraggedEvent={({ event, columnMoves, start, end }) => {
                const padding = {};
                if (typeof event.paddingTopStart !== 'undefined') {
                  padding.paddingTopStart = event.paddingTopStart
                    .clone()
                    .add(columnMoves, 'days');
                }
                if (typeof event.paddingBottomEnd !== 'undefined') {
                  padding.paddingBottomEnd = event.paddingBottomEnd
                    .clone()
                    .add(columnMoves, 'days');
                }

                return {
                  ...event,
                  start: start.clone().add(columnMoves, 'days'),
                  end: end.clone().add(columnMoves, 'days'),
                  ...padding,
                };
              }}
            />
          );
        });
      }}
    />
  );
};

CalendarWeek.defaultProps = {
  renderHeader: null,
};

CalendarWeek.propTypes = {
  renderHeader: PropTypes.func,
};

export default CalendarWeek;
