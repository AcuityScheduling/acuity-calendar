import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { getMonthGrid, getDayNames } from './utils';
import { makeClass } from '../../../utils';
import { FIRST_DAY_TYPE, MOMENT_TYPE } from '../../../types';
import Event from '../../Event';
import './index.scss';

const MonthView = ({
  events,
  selectedDate,
  firstDay,
  onSelectEvent,
  onSelectSlot,
  forceSixWeeks,
  renderEvent,
}) => {
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
                  <div
                    key={`monthCells${countDays}`}
                    className={makeClass(
                      'month__cell',
                      !dayDetails.isInRange && 'month_cell--not-in-range'
                    )}
                    role="button"
                    onClick={() => onSelectSlot(dayDetails.date)}
                  >
                    <div className={makeClass('month__date')}>
                      {dayDetails.date.date()}
                    </div>
                    {eventsForCell.length > 0 &&
                      eventsForCell.map(
                        event =>
                          dayDetails.isInRange && (
                            <Event
                              event={event}
                              key={event.id}
                              onSelectEvent={onSelectEvent}
                            >
                              {renderEvent}
                            </Event>
                          )
                      )}
                  </div>
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
};

MonthView.propTypes = {
  events: PropTypes.object.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  forceSixWeeks: PropTypes.bool,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  renderEvent: PropTypes.func,
  selectedDate: MOMENT_TYPE.isRequired,
};

export default MonthView;
