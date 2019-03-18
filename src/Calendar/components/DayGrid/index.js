import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { useTotalEventsToShow, getGrid } from './utils';
import { makeClass } from '../../utils';
import DayCell from './components/DayCell';
import './index.scss';
import { DAY_GRID_TYPE, EVENT_TYPE } from '../../types';
import useMungeData from '../../utils/useMungeData';

const DayGrid = ({
  events,
  grid,
  renderCell,
  renderHeader,
  onDragEnd,
  onSelectSlot,
  onSelectDate,
  onSelectMoreEvents,
  onSelectEvent,
}) => {
  const { eventsWithSelectedEventGroups } = useMungeData({ events });
  const {
    rowRef,
    eventRef,
    cellRef,
    eventWrapperRef,
    eventHeight,
    totalEventsToShow,
    cellDimensions,
  } = useTotalEventsToShow();

  // The grid can either be an actual grid [ [1, 2, 3], [4, 5, 6] ] - or
  // and object with parameters to create a grid
  let dayGrid = grid;
  if (!Array.isArray(dayGrid)) {
    dayGrid = getGrid(grid);
  }

  let countDays = 0;
  let countRows = 0;
  return (
    <div className={makeClass('day-grid')}>
      <div className={makeClass('day-grid__header')}>
        {get(dayGrid, 0, []).map(dayDetails => {
          const dayOfWeek = dayDetails.date.format('dddd');
          return (
            <div
              className={makeClass('day-grid__column-header')}
              key={dayOfWeek}
            >
              {renderHeader
                ? renderHeader({ date: dayDetails.date })
                : dayOfWeek}
            </div>
          );
        })}
      </div>
      <div className={makeClass('day-grid__days')}>
        {dayGrid
          ? dayGrid.map(row => {
              countRows += 1;
              const totalColumns = row.length;

              return (
                <div
                  className={makeClass('day-grid__row')}
                  ref={rowRef}
                  key={`monthColumn${countRows}`}
                >
                  {row.map(dayDetails => {
                    countDays += 1;

                    const eventsForCell = get(
                      eventsWithSelectedEventGroups,
                      dayDetails.date.format('YYYY-MM-DD'),
                      []
                    );

                    return (
                      <DayCell
                        totalColumns={totalColumns}
                        events={eventsForCell}
                        ref={cellRef}
                        eventHeight={eventHeight}
                        cellDimensions={cellDimensions}
                        key={`dayCells${countDays}`}
                        dayDetails={dayDetails}
                        renderCell={renderCell}
                        onDragEnd={onDragEnd}
                        onSelectSlot={onSelectSlot}
                        onSelectDate={onSelectDate}
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
            })
          : null}
      </div>
    </div>
  );
};

DayGrid.defaultProps = {
  events: [],
  renderCell: null,
  renderHeader: null,
  onDragEnd: () => null,
  onSelectDate: () => null,
  onSelectEvent: () => null,
  onSelectMoreEvents: () => null,
  onSelectSlot: () => null,
};

DayGrid.propTypes = {
  events: PropTypes.arrayOf(EVENT_TYPE),
  grid: DAY_GRID_TYPE.isRequired,
  onDragEnd: PropTypes.func,
  onSelectDate: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectMoreEvents: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderCell: PropTypes.func,
  renderHeader: PropTypes.func,
};

export default DayGrid;
