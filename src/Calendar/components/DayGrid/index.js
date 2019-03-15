import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { useTotalEventsToShow } from './utils';
import { makeClass } from '../../utils';
import DayCell from './components/DayCell';
import './index.scss';
import { VIEW_RENDER_TYPE, DAY_GRID_TYPE } from '../../types';

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
  const {
    rowRef,
    eventRef,
    cellRef,
    eventWrapperRef,
    eventHeight,
    totalEventsToShow,
    cellDimensions,
  } = useTotalEventsToShow();

  let countDays = 0;
  let countRows = 0;
  console.log('renderHeader: ', renderHeader);
  return (
    <div className={makeClass('day-grid')}>
      <div className={makeClass('day-grid__header')}>
        {get(grid, 0, []).map(dayDetails => {
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
      {
        <div className={makeClass('day-grid__days')}>
          {grid
            ? grid.map(row => {
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
                        events,
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
      }
    </div>
  );
};

DayGrid.defaultProps = {
  events: {},
  renderCell: null,
  renderHeader: null,
  onDragEnd: () => null,
  onSelectDate: () => null,
  onSelectEvent: () => null,
  onSelectMoreEvents: () => null,
  onSelectSlot: () => null,
};

DayGrid.propTypes = {
  events: PropTypes.object,
  grid: DAY_GRID_TYPE.isRequired,
  onDragEnd: PropTypes.func,
  onSelectDate: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectMoreEvents: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderCell: PropTypes.func,
  renderHeader: VIEW_RENDER_TYPE,
};

export default DayGrid;
