import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { getMonthGrid, getDayNames } from './utils';
import { makeClass } from '../../../utils';
import { FIRST_DAY_TYPE, MOMENT_TYPE } from '../../../types';
import Event from '../../Event';
import './index.scss';

const cellWidth = `${100 / 7}%`;
const dayStyles = {
  width: cellWidth,
};

const MonthView = ({
  events,
  selectedDate,
  firstDay,
  onSelectEvent,
  onSelectSlot,
  renderEvent,
}) => {
  const monthGrid = getMonthGrid({ date: selectedDate, firstDay });
  const dayNames = getDayNames({ firstDay });

  let countDays = 0;
  let countRows = 0;
  return (
    <div className={makeClass('month')}>
      <div className={makeClass('month__row', 'month__header')}>
        {dayNames.map(dayName => {
          return (
            <div
              className={makeClass('month__day-name')}
              style={dayStyles}
              key={dayName}
            >
              {dayName}
            </div>
          );
        })}
      </div>
      <div>
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
                    className={makeClass('month__cell')}
                    style={dayStyles}
                    role="button"
                    onClick={() => onSelectSlot(dayDetails.date)}
                  >
                    <h2 className={makeClass('month__date')}>
                      {dayDetails.date.date()}
                    </h2>
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
};

MonthView.propTypes = {
  selectedDate: MOMENT_TYPE.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  events: PropTypes.object.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
  renderEvent: PropTypes.func,
};

export default MonthView;
