import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import moment from 'moment';
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
        {dayNames.full.map((dayName, index) => {
          const weekday = {
            full: dayName,
            min: dayNames.min[index],
            short: dayNames.short[index],
          };
          return (
            <div className={makeClass('month__column-header')} key={dayName}>
              {renderHeader ? renderHeader({ data: weekday }) : dayName}
            </div>
          );
        })}
      </div>
      <div className={makeClass('month__days')}>
        {monthGrid.map(row => {
          countRows += 1;
          const totalColumns = row.length;

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
                    totalColumns={totalColumns}
                    events={eventsForCell}
                    ref={cellRef}
                    eventHeight={eventHeight}
                    cellDimensions={cellDimensions}
                    key={`monthCells${countDays}`}
                    dayDetails={dayDetails}
                    renderMonthCell={renderMonthCell}
                    onDragEnd={onDragEnd}
                    onSelectSlot={onSelectSlot}
                    onSelectMonthDate={onSelectMonthDate}
                    onSelectMoreEvents={onSelectMoreEvents}
                    totalEventsToShow={totalEventsToShow}
                    eventRef={eventRef}
                    eventWrapperRef={eventWrapperRef}
                    onSelectEvent={onSelectEvent}
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
  onSelectMonthDate: null,
  firstDay: FIRST_DAY_DEFAULT,
  onSelectMoreEvents: () => null,
  onDragEnd: () => null,
  onSelectSlot: () => null,
  onSelectEvent: () => null,
  renderHeader: () => null,
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
  renderHeader: PropTypes.func,
  renderMonthCell: PropTypes.func,
  selectedDate: MOMENT_TYPE,
};

export default MonthView;
