import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { getEventColumns } from '../../StepGrid/utils';
import StepGrid from '../../StepGrid';
import Column from '../../StepGrid/components/Column';
import { getWeekList } from './utils';
import { getTodayClass, useElementWidths } from '../../StepGrid/utils';
import { MOMENT_TYPE, FIRST_DAY_TYPE, STEP_MINUTES_TYPE } from '../../../types';
import { makeClass } from '../../../utils';

const WeekView = ({
  events,
  selectedDate,
  firstDay,
  stepMinutes,
  onDragEnd,
  onExtendEnd,
  onSelectEvent,
  onSelectSlot,
  selectMinutes,
  renderEvent,
  timeGutterWidth,
  stepDetails,
  renderCorner,
}) => {
  const dateList = getWeekList({ date: selectedDate, firstDay });
  const { assignRef, elementWidths } = useElementWidths();
  const eventsWithColumns = useMemo(() => getEventColumns(events), [events]);

  return (
    <StepGrid
      selectedDate={selectedDate}
      firstDay={firstDay}
      stepMinutes={stepMinutes}
      onSelectEvent={onSelectEvent}
      onSelectSlot={onSelectSlot}
      selectMinutes={selectMinutes}
      timeGutterWidth={timeGutterWidth}
      renderCorner={renderCorner}
      renderHeader={() =>
        dateList.map(date => {
          const totalColumns =
            Object.keys(get(eventsWithColumns, date.format('YYYY-MM-DD'), {}))
              .length || 1;

          const minWidth = `${totalColumns * 190}px`;
          return (
            <div
              className={`${makeClass(
                'step-grid__header-column'
              )}${getTodayClass(date)}`}
              key={`dayHeader${date.date()}`}
              style={{ minWidth }}
            >
              <h2>{date.format('dddd, MMM D')}</h2>
            </div>
          );
        })
      }
      renderColumns={({ currentTime }) => {
        return dateList.map((date, index) => {
          const stepDetailsForDay = get(
            stepDetails,
            date.format('YYYY-MM-DD'),
            []
          );

          const eventsForDay = get(
            eventsWithColumns,
            date.format('YYYY-MM-DD'),
            {}
          );
          return (
            <Column
              ref={assignRef(date.day())}
              key={`weekColumn${date.day()}`}
              events={eventsForDay}
              stepDetails={stepDetailsForDay}
              date={date}
              columnWidths={elementWidths}
              columnIndex={index}
              onDragEnd={onDragEnd}
              onExtendEnd={onExtendEnd}
              onSelectEvent={onSelectEvent}
              onSelectSlot={onSelectSlot}
              stepMinutes={stepMinutes}
              selectMinutes={selectMinutes}
              currentTime={currentTime}
              renderEvent={renderEvent}
              getUpdatedDraggedEvent={({ event, columnMoves, start, end }) => {
                return {
                  ...event,
                  start: start.add(columnMoves, 'days'),
                  end: end.add(columnMoves, 'days'),
                };
              }}
            />
          );
        });
      }}
    />
  );
};

WeekView.defaultProps = {
  renderEvent: null,
  renderCorner: null,
  timeGutterWidth: 50,
  stepDetails: null,
  onExtendEnd: () => null,
  onDragEnd: () => null,
};

WeekView.propTypes = {
  events: PropTypes.object.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  renderCorner: PropTypes.func,
  renderEvent: PropTypes.func,
  selectMinutes: STEP_MINUTES_TYPE.isRequired,
  selectedDate: MOMENT_TYPE.isRequired,
  stepDetails: PropTypes.object,
  stepMinutes: STEP_MINUTES_TYPE.isRequired,
  timeGutterWidth: PropTypes.number,
};

export default WeekView;
