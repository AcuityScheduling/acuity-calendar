import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DayDragDrop from './DayDragDrop';
import DayEvent from './DayEvent';
import { makeClass, resetEventFormat } from '../../../utils';
import { EVENT_TYPE, MOMENT_TYPE, REF_TYPE } from '../../../types';

const DayCell = React.forwardRef(
  (
    {
      events,
      eventHeight,
      cellDimensions,
      dayDetails,
      isEventDraggable,
      onDragEnd,
      onSelectSlot,
      onSelectDate,
      renderCell,
      renderEvent,
      eventRef,
      eventWrapperRef,
      onSelectEvent,
      onSelectMoreEvents,
      totalEventsToShow,
      totalColumns,
    },
    ref
  ) => {
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
            <DayDragDrop
              cellDimensions={cellDimensions}
              event={event}
              topEventOffset={(count - 1) * eventHeight * -1}
              key={event.id}
              columnMovesPerRowChange={totalColumns}
              onDragEnd={onDragEnd}
              isDraggable={isEventDraggable}
            >
              {({ draggedEvent, vertChange, horizChange }) => {
                return (
                  <DayEvent
                    event={draggedEvent}
                    onSelect={onSelectEvent}
                    ref={eventRef}
                    style={{
                      transform: `translate(${horizChange}px, ${vertChange}px)`,
                    }}
                  >
                    {renderEvent}
                  </DayEvent>
                );
              }}
            </DayDragDrop>
          );
        }

        return null;
      });
    };

    return (
      <div
        className={makeClass(
          'day-grid__cell',
          !dayDetails.isInRange && 'day-grid__cell--not-in-range',
          events.length > 0 && 'day-grid__cell--has-events'
        )}
        role="button"
        ref={ref}
        onClick={e =>
          onSelectSlot({
            e,
            date: new Date(dayDetails.date),
            isInRange: dayDetails.isInRange,
          })
        }
      >
        <div
          className={makeClass('day-grid__date-wrapper')}
          onClick={e => {
            if (!onSelectDate) return;
            e.stopPropagation();
            onSelectDate({
              e,
              date: new Date(dayDetails.date),
              isInrange: dayDetails.isInRange,
            });
          }}
        >
          <div
            className={makeClass(
              'day-grid__date',
              !dayDetails.isInRange && 'day-grid__date--not-in-range'
            )}
          >
            {dayDetails.date.date()}
          </div>
        </div>
        {renderCell ? (
          renderCell({
            date: new Date(dayDetails.date.startOf('day')),
            isInRange: dayDetails.isInRange,
            events,
          })
        ) : (
          <div
            className={makeClass('day-grid__event-wrapper')}
            ref={eventWrapperRef}
            style={{ opacity: !totalEventsToShow ? 0 : 1 }}
          >
            {events.length > 0 && dayDetails.isInRange && (
              <Fragment>
                {renderAllEvents(events)}
                {totalEventsToShow < events.length && totalEventsToShow > 0 && (
                  <div
                    className={makeClass('day-grid__more-events')}
                    onClick={e => {
                      e.stopPropagation();
                      onSelectMoreEvents({
                        e,
                        events: events.map(event => resetEventFormat(event)),
                        eventsMore: getEventsForMore().map(event =>
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
  }
);

DayCell.displayName = 'DayCell';

DayCell.defaultProps = {
  events: [],
  isEventDraggable: () => true,
  onDragEnd: () => null,
  onSelectSlot: () => null,
  onSelectDate: null,
  onSelectEvent: () => null,
  renderCell: null,
  renderEvent: null,
  onSelectMoreEvents: () => null,
};

DayCell.propTypes = {
  cellDimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  dayDetails: PropTypes.shape({
    date: MOMENT_TYPE.isRequired,
    isInRange: PropTypes.bool.isRequired,
  }).isRequired,
  eventHeight: PropTypes.number.isRequired,
  eventRef: REF_TYPE.isRequired,
  eventWrapperRef: REF_TYPE.isRequired,
  events: PropTypes.arrayOf(EVENT_TYPE),
  isEventDraggable: PropTypes.func,
  onDragEnd: PropTypes.func,
  onSelectDate: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectMoreEvents: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderCell: PropTypes.func,
  renderEvent: PropTypes.func,
  totalColumns: PropTypes.number.isRequired,
  totalEventsToShow: PropTypes.number.isRequired,
};

export default DayCell;
