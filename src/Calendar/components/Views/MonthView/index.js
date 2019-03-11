import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { getMonthGrid, getDayNames, useTotalEventsToShow } from './utils';
import { makeClass } from '../../../utils';
import { FIRST_DAY_TYPE, MOMENT_TYPE } from '../../../types';
import './index.scss';
import MonthCell from './components/MonthCell';
import { FIRST_DAY_DEFAULT } from '../../../defaultProps';

const MonthView = ({
  events,
  selectedDate,
  firstDay,
  onSelectEvent,
  onSelectSlot,
  onSelectMonthDate,
  onSelectMoreEvents,
  forceSixWeeks,
  renderEvent,
  renderMonthCell,
}) => {
  const {
    rowRef,
    eventRef,
    cellRef,
    eventWrapperRef,
    eventHeight,
    totalEventsToShow,
    cellDimensions,
  } = useTotalEventsToShow();

  const monthGrid = getMonthGrid({
    date: selectedDate,
    firstDay,
    forceSixWeeks,
  });
  const dayNames = getDayNames({ firstDay });

  let countDays = 0;
  let countRows = 0;
  return (
    <div className={makeClass('month')}>
      <div className={makeClass('month__header')}>
        {dayNames.map(dayName => {
          return (
            <div className={makeClass('month__column-header')} key={dayName}>
              {dayName}
            </div>
          );
        })}
      </div>
      <div className={makeClass('month__days')}>
        {monthGrid.map(row => {
          countRows += 1;

          return (
            <div
              className={makeClass('month__row')}
              ref={rowRef}
              key={`monthColumn${countRows}`}
            >
              {row.map(dayDetails => {
                countDays += 1;

                const eventsForCell = get(
                  events,
                  dayDetails.date.format('YYYY-MM-DD'),
                  []
                );

                return (
                  <MonthCell
                    events={eventsForCell}
                    ref={cellRef}
                    eventHeight={eventHeight}
                    cellDimensions={cellDimensions}
                    key={`monthCells${countDays}`}
                    dayDetails={dayDetails}
                    onSelectSlot={onSelectSlot}
                    onSelectMonthDate={onSelectMonthDate}
                    onSelectMoreEvents={onSelectMoreEvents}
                    totalEventsToShow={totalEventsToShow}
                    eventRef={eventRef}
                    eventWrapperRef={eventWrapperRef}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

MonthView.defaultProps = {
  renderEvent: null,
  forceSixWeeks: false,
  renderMonthCell: null,
  onSelectMonthDate: () => null,
  firstDay: FIRST_DAY_DEFAULT,
  onSelectMoreEvents: () => null,
};

MonthView.propTypes = {
  events: PropTypes.object.isRequired,
  firstDay: FIRST_DAY_TYPE,
  forceSixWeeks: PropTypes.bool,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectMonthDate: PropTypes.func,
  onSelectMoreEvents: PropTypes.func,
  onSelectSlot: PropTypes.func.isRequired,
  renderEvent: PropTypes.func,
  renderMonthCell: PropTypes.func,
  selectedDate: MOMENT_TYPE.isRequired,
};

export default MonthView;
