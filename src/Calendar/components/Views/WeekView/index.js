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
  onSelectEvent,
  onSelectSlot,
  selectMinutes,
  renderEvent,
  timeGutterWidth,
  stepDetails,
  renderCorner,
}) => {
  const dateList = getWeekList({ date: selectedDate, firstDay });
  const { elementRefs, elementWidths } = useElementWidths();
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
              ref={inst =>
                inst === null
                  ? elementRefs.delete(date.day())
                  : elementRefs.set(date.day(), inst)
              }
              events={eventsForDay}
              stepDetails={stepDetailsForDay}
              date={date}
              columnWidths={elementWidths}
              columnIndex={index}
              onDragEnd={onDragEnd}
              onSelectEvent={onSelectEvent}
              onSelectSlot={onSelectSlot}
              selectMinutes={selectMinutes}
              key={`weekColumn${date.day()}`}
              currentTime={currentTime}
              stepMinutes={stepMinutes}
              renderEvent={renderEvent}
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
  onDragEnd: () => null,
};

WeekView.propTypes = {
  events: PropTypes.object.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  onDragEnd: PropTypes.func,
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
