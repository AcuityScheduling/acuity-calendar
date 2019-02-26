import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash/get';
import {
  MOMENT_TYPE,
  STEP_MINUTES_TYPE,
  EVENT_TYPE,
  COLUMN_WIDTHS_TYPE,
} from '../../../types';
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from '../constants';
import { getTodayClass, getTopOffset } from '../utils';
import './Column.scss';
import { makeClass } from '../../../utils';
import Event from '../../Event';
import EventDragDrop from '../../Event/components/EventDragDrop';
import {
  STEP_MINUTES_DEFAULT,
  SELECT_MINUTES_DEFAULT,
} from '../../../defaultProps';

const Column = React.forwardRef(
  (
    {
      columnIndex,
      columnWidths,
      currentTime,
      date,
      events,
      stepMinutes,
      onDragEnd,
      onSelectEvent,
      onSelectSlot,
      selectMinutes,
      stepDetails,
      renderEvent,
    },
    ref
  ) => {
    const totalHeight = useMemo(() => {
      const totalStepsPerBlock = 60 / stepMinutes;
      const aggregateBorderHeight = totalStepsPerBlock * STEP_BORDER_WIDTH * 24;
      return (
        STEP_HEIGHTS[stepMinutes] * totalStepsPerBlock * 24 +
        (aggregateBorderHeight - 1 * STEP_BORDER_WIDTH * 25)
      );
    }, [stepMinutes]);

    const getClickedTime = e => {
      const rect = e.currentTarget.getBoundingClientRect();
      const verticalClick = e.clientY - rect.top;

      const stepHeight = STEP_HEIGHTS[stepMinutes];
      const pixelsPerMinute = stepHeight / stepMinutes;
      const minutesFromMidnight = verticalClick / pixelsPerMinute;
      const selectedTime = date
        .clone()
        .startOf('day')
        .add(minutesFromMidnight, 'minutes');

      const rounded =
        Math.round(selectedTime.clone().minute() / selectMinutes) *
        selectMinutes;

      return selectedTime
        .clone()
        .minute(rounded)
        .second(0);
    };

    const totalColumns = Object.keys(events).length || 1;
    const minWidth = `${totalColumns * 190}px`;
    const percentWidth = 100 / totalColumns - 1;
    const currentTimeIndicatorClass = makeClass(
      'step-grid__current-time-indicator'
    );

    return (
      <div
        className={`${makeClass('step-grid__column')}${getTodayClass(date)}`}
        key={`weekView${date.day()}`}
        style={{
          height: `${totalHeight}px`,
          minWidth,
        }}
        onClick={e => onSelectSlot(getClickedTime(e))}
        ref={ref}
      >
        {date.isSame(moment(), 'day') && currentTime && (
          <div
            className={currentTimeIndicatorClass}
            style={{
              top: `${getTopOffset({ stepMinutes, date: currentTime })}px`,
            }}
          >
            <div className={`${currentTimeIndicatorClass}__line-today`} />
          </div>
        )}
        {Object.keys(events).map(column => {
          const thisColumnEvents = get(events, column, []);
          return thisColumnEvents.map(event => {
            return (
              <EventDragDrop
                key={event.id}
                event={event}
                columnIndex={columnIndex}
                columnWidths={columnWidths}
                stepMinutes={stepMinutes}
                selectMinutes={selectMinutes}
                onDragEnd={onDragEnd}
              >
                {({
                  draggedEvent,
                  isDragging,
                  topChange,
                  leftChange,
                  currentColumnWidth,
                  isDndPlaceholder,
                }) => (
                  <Event
                    event={draggedEvent}
                    style={{
                      top: `${event.top + topChange}px`,
                      height: `${event.height}px`,
                      width:
                        !isDndPlaceholder && isDragging
                          ? `${currentColumnWidth}px`
                          : `${percentWidth}%`,
                      left:
                        !isDndPlaceholder && isDragging
                          ? `${leftChange}px`
                          : `${percentWidth * (column - 1)}%`,
                    }}
                    onSelectEvent={onSelectEvent}
                    isSelectable={!isDragging}
                  >
                    {renderEvent}
                  </Event>
                )}
              </EventDragDrop>
            );
          });
        })}
        {stepDetails.map(stepDetail => {
          return (
            <div
              key={stepDetail.id}
              className={makeClass('step-grid__step-detail-wrapper')}
              style={{
                top: `${stepDetail.top}px`,
                height: `${stepDetail.height}px`,
              }}
            />
          );
        })}
      </div>
    );
  }
);

Column.displayName = 'Column';

Column.defaultProps = {
  renderEvent: null,
  onDragEnd: () => null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  events: {},
  date: moment(),
  onSelectEvent: () => null,
  onSelectSlot: () => null,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  currentTime: null,
  stepDetails: [],
};

Column.propTypes = {
  columnIndex: PropTypes.number.isRequired,
  columnWidths: COLUMN_WIDTHS_TYPE.isRequired,
  currentTime: MOMENT_TYPE,
  date: MOMENT_TYPE,
  events: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(EVENT_TYPE),
  ]),
  onDragEnd: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderEvent: PropTypes.func,
  selectMinutes: STEP_MINUTES_TYPE,
  stepDetails: PropTypes.array,
  stepMinutes: STEP_MINUTES_TYPE,
};

export default Column;
