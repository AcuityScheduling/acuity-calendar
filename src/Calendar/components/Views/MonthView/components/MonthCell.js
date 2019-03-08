import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeClass, resetEventFormat } from '../../../../utils';
import { EVENT_TYPE, MOMENT_TYPE, REF_TYPE } from '../../../../types';
import MonthEvent from './MonthEvent';

const MonthCell = ({
  events,
  dayDetails,
  onSelectSlot,
  onSelectMonthDate,
  renderMonthCell,
  renderEvent,
  eventRef,
  eventWrapperRef,
  onSelectEvent,
  onSelectMoreEvents,
  totalEventsToShow,
}) => {
  // Get the list of events that should be showing in "more"
  const getEventsForMore = () => {
    const totalMore = events.length - totalEventsToShow;
    return events.filter((event, index) => {
      if (index >= events.length - totalMore) {
        return true;
      }
      return false;
    });
  };

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

  return (
    <div
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
          events,
        })
      ) : (
        <div
          className={makeClass('month__event-wrapper')}
          ref={eventWrapperRef}
        >
          {events.length > 0 && dayDetails.isInRange && (
            <Fragment>
              {renderAllEvents(events)}
              {totalEventsToShow < events.length && totalEventsToShow > 0 && (
                <div
                  className={makeClass('month__more-events')}
                  onClick={e => {
                    e.stopPropagation();
                    onSelectMoreEvents({
                      e,
                      events: getEventsForMore().map(event =>
                        resetEventFormat(event)
                      ),
                      date: new Date(dayDetails.date),
                    });
                  }}
                >
                  {events.length - totalEventsToShow} more
                </div>
              )}
            </Fragment>
          )}
        </div>
      )}
    </div>
  );
};

MonthCell.defaultProps = {
  events: [],
  onSelectSlot: () => null,
  onSelectMonthDate: () => null,
  onSelectEvent: () => null,
  renderMonthCell: null,
  renderEvent: null,
  onSelectMoreEvents: () => null,
};

MonthCell.propTypes = {
  dayDetails: PropTypes.shape({
    date: MOMENT_TYPE.isRequired,
    isInRange: PropTypes.bool.isRequired,
  }).isRequired,
  eventRef: REF_TYPE.isRequired,
  eventWrapperRef: REF_TYPE.isRequired,
  events: PropTypes.arrayOf(EVENT_TYPE),
  onSelectEvent: PropTypes.func,
  onSelectMonthDate: PropTypes.func,
  onSelectMoreEvents: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderEvent: PropTypes.func,
  renderMonthCell: PropTypes.func,
  totalEventsToShow: PropTypes.number.isRequired,
};

export default MonthCell;
