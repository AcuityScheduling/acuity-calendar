import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { getMonthGrid, getDayNames, useTotalEventsToShow } from './utils';
import { makeClass } from '../../../utils';
import { FIRST_DAY_TYPE, MOMENT_TYPE } from '../../../types';
import MonthEvent from './components/MonthEvent';
import './index.scss';
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
    eventWrapperRef,
    totalEventsToShow,
  } = useTotalEventsToShow();

  const monthGrid = getMonthGrid({
    date: selectedDate,
    firstDay,
    forceSixWeeks,
  });
  const dayNames = getDayNames({ firstDay });

  const renderAllEvents = events => {
    let count = 0;

    return events.map(event => {
      count += 1;

      if (!totalEventsToShow || totalEventsToShow >= count) {
        return (
          <MonthEvent
            event={event}
            key={event.id}
            onSelect={onSelectEvent}
            ref={eventRef}
            style={{ opacity: !totalEventsToShow ? 0 : 1 }}
          >
            {renderEvent}
          </MonthEvent>
        );
      }

      return null;
    });
  };

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
              ref={rowRef}
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
                    onClick={e =>
                      onSelectSlot({
                        e,
                        date: new Date(dayDetails.date),
                        isInRange: dayDetails.isInRange,
                      })
                    }
                  >
                    <div
                      className={makeClass('month__date-wrapper')}
                      onClick={e => {
                        e.stopPropagation();
                        onSelectMonthDate({
                          e,
                          date: new Date(dayDetails.date),
                          isInrange: dayDetails.isInRange,
                        });
                      }}
                    >
                      <div
                        className={makeClass(
                          'month__date',
                          !dayDetails.isInRange && 'month__date--not-in-range'
                        )}
                      >
                        {dayDetails.date.date()}
                      </div>
                    </div>
                    {renderMonthCell ? (
                      renderMonthCell({
                        date: dayDetails.date,
                        isInRange: dayDetails.isInRange,
                        events: eventsForCell,
                      })
                    ) : (
                      <div
                        className={makeClass('month__event-wrapper')}
                        ref={eventWrapperRef}
                      >
                        {eventsForCell.length > 0 && dayDetails.isInRange && (
                          <Fragment>
                            {renderAllEvents(eventsForCell)}
                            {totalEventsToShow < eventsForCell.length && (
                              <div
                                className={makeClass('month__more-events')}
                                onClick={e => {
                                  e.stopPropagation();
                                  onSelectMoreEvents({
                                    e,
                                    events: eventsForCell,
                                    date: new Date(dayDetails.date),
                                  });
                                }}
                              >
                                {eventsForCell.length - totalEventsToShow} more
                              </div>
                            )}
                          </Fragment>
                        )}
                      </div>
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
