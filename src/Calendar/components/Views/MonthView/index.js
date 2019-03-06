import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { getMonthGrid, getDayNames } from './utils';
import { makeClass } from '../../../utils';
import { FIRST_DAY_TYPE, MOMENT_TYPE } from '../../../types';
import MonthEvent from './components/MonthEvent';
import './index.scss';

const MonthView = ({
  events,
  selectedDate,
  firstDay,
  onSelectEvent,
  onSelectSlot,
  forceSixWeeks,
  renderEvent,
  renderMonthCell,
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
                      !dayDetails.isInRange && 'month__cell--not-in-range'
                    )}
                    role="button"
                    onClick={() =>
                      onSelectSlot({ date: new Date(dayDetails.date) })
                    }
                  >
                    <div
                      className={makeClass(
                        'month__date',
                        !dayDetails.isInRange && 'month__date--not-in-range'
                      )}
                    >
                      {dayDetails.date.date()}
                    </div>
                    {renderMonthCell
                      ? renderMonthCell({
                          date: dayDetails.date,
                          isInRange: dayDetails.isInRange,
                          events: eventsForCell,
                        })
                      : eventsForCell.length > 0 &&
                        eventsForCell.map(
                          event =>
                            dayDetails.isInRange && (
                              <MonthEvent
                                event={event}
                                key={event.id}
                                onSelect={onSelectEvent}
                              >
                                {renderEvent}
                              </MonthEvent>
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
  renderMonthCell: null,
};

MonthView.propTypes = {
  events: PropTypes.object.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  forceSixWeeks: PropTypes.bool,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  renderEvent: PropTypes.func,
  renderMonthCell: PropTypes.func,
  selectedDate: MOMENT_TYPE.isRequired,
};

export default MonthView;
