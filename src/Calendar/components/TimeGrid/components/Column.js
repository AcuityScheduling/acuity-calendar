import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash.get';
import {
  MOMENT_TYPE,
  STEP_MINUTES_TYPE,
  COLUMN_WIDTHS_TYPE,
} from '../../../types';
import {
  getTodayClass,
  getTopOffset,
  useSelectRange,
  getClickedTime,
  getDisplayTime,
} from '../utils';
import { makeClass } from '../../../utils';
import Event from './Event';
import EventDragDrop from './Event/components/EventDragDrop';
import EventExtend from './Event/components/EventExtend';
import {
  STEP_MINUTES_DEFAULT,
  SELECT_MINUTES_DEFAULT,
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
} from '../../../defaultProps';

const Column = React.forwardRef(
  (
    {
      columnId,
      columnIndex,
      columnWidths,
      currentTime,
      date,
      events,
      isEventDraggable,
      isEventExtendable,
      gridHeight,
      stepMinutes,
      onDragEnd,
      onExtendEnd,
      onSelectEvent,
      onSelectSlot,
      onSelectRangeEnd,
      selectMinutes,
      stepDetails,
      renderEvent,
      getUpdatedDraggedEvent,
      minWidth,
      minWidthEmpty,
      renderStepDetail,
      renderSelectSlotIndicator,
      renderSelectRange,
      renderEventPaddingTop,
      renderEventPaddingBottom,
      stepHeight,
    },
    ref
  ) => {
    const [isSlotClickable, setIsSlotClickable] = useState(true);
    const [clickedTime, setClickedTime] = useState(null);

    const dateMoment = moment(date);

    const {
      selectRangeHandlers,
      isSelectRangeFinished,
      resetSelectRangeDrag,
      selectRangeHeight,
      selectRangeTop,
      selectRange,
    } = useSelectRange({
      isSelectable: isSlotClickable,
      stepMinutes,
      selectMinutes,
      columnDate: dateMoment,
      stepHeight,
    });

    const totalEventColumns = Object.keys(events).length;
    const percentWidth = 100 / totalEventColumns - 1;
    const currentTimeIndicatorClass = makeClass(
      'time-grid__current-time-indicator'
    );

    return (
      <div
        className={`${makeClass('time-grid__grid-column')}${getTodayClass(
          dateMoment
        )}`}
        key={`weekView${dateMoment.day()}`}
        style={{
          height: gridHeight,
          minWidth: totalEventColumns * minWidth || minWidthEmpty,
        }}
        onClick={e => {
          if (isSelectRangeFinished) {
            resetSelectRangeDrag();
            onSelectRangeEnd({
              e,
              start: new Date(selectRange.start),
              end: new Date(selectRange.end),
              column: columnId,
            });
            return false;
          }
          if (!isSlotClickable) return false;
          const clickedTime = getClickedTime({
            stepHeight,
            stepMinutes,
            selectMinutes,
            columnDate: dateMoment,
          })(e);
          setClickedTime(clickedTime);
          onSelectSlot({ e, date: new Date(clickedTime), column: columnId });
          setTimeout(() => setClickedTime(null), 300);
          resetSelectRangeDrag();
        }}
        {...selectRangeHandlers}
        ref={ref}
      >
        {dateMoment.isSame(moment(), 'day') && currentTime && (
          <div
            className={currentTimeIndicatorClass}
            style={{
              top: `${getTopOffset({
                stepMinutes,
                date: currentTime,
                stepHeight,
              })}px`,
            }}
          >
            <div className={`${currentTimeIndicatorClass}__line-today`} />
          </div>
        )}
        {clickedTime && (
          <div
            className={makeClass('time-grid__select-slot-indicator')}
            style={{
              top: `${getTopOffset({
                stepMinutes,
                date: clickedTime,
                stepHeight,
              })}px`,
            }}
          >
            {renderSelectSlotIndicator ? (
              renderSelectSlotIndicator({
                time: new Date(clickedTime.format('YYYY-MM-DD HH:mm:ss')),
                column: columnId,
              })
            ) : (
              <div
                className={makeClass('time-grid__select-slot-indicator-time')}
              >
                {clickedTime.format('h:mma')}
              </div>
            )}
          </div>
        )}
        {selectRangeHeight !== 0 && isSlotClickable && (
          <div
            className={makeClass('time-grid__select-range')}
            style={{
              height: selectRangeHeight,
              top: selectRangeTop,
            }}
          >
            {renderSelectRange
              ? renderSelectRange({
                  start: new Date(selectRange.start),
                  end: new Date(selectRange.end),
                })
              : getDisplayTime(selectRange)}
          </div>
        )}
        {Object.keys(events).map(column => {
          const thisColumnEvents = get(events, column, []);
          return thisColumnEvents.map(event => {
            return (
              <EventExtend
                key={event.id}
                event={event}
                stepHeight={stepHeight}
                stepMinutes={stepMinutes}
                selectMinutes={selectMinutes}
                isExtendable={isEventExtendable}
                onExtend={() => {
                  // On drag triggers mousedown in the select range
                  // so we need to change state to tell that we're not actually
                  // selecting a range when we're dragging an event
                  resetSelectRangeDrag();
                  setIsSlotClickable(false);
                }}
                onExtendEnd={event => {
                  setTimeout(() => setIsSlotClickable(true));
                  onExtendEnd(event);
                }}
              >
                {({ isExtending, extendedEvent, heightChange }) => (
                  <EventDragDrop
                    event={extendedEvent}
                    isDraggable={isEventDraggable}
                    columnIndex={columnIndex}
                    columnWidths={columnWidths}
                    stepHeight={stepHeight}
                    stepMinutes={stepMinutes}
                    selectMinutes={selectMinutes}
                    onDrag={() => {
                      // On drag triggers mousedown in the select range
                      // so we need to change state to tell that we're not actually
                      // selecting a range when we're dragging an event
                      resetSelectRangeDrag();
                      setIsSlotClickable(false);
                    }}
                    onDragEnd={event => {
                      onDragEnd(event);
                      setTimeout(() => setIsSlotClickable(true));
                    }}
                    getUpdatedDraggedEvent={getUpdatedDraggedEvent}
                  >
                    {({
                      draggedEvent,
                      isDragging,
                      leftChange,
                      currentColumnWidth,
                      isDndPlaceholder,
                      dndClassName,
                    }) => {
                      const isInteracting =
                        !isDndPlaceholder && (isDragging || isExtending);

                      return (
                        <div
                          className={`${dndClassName} ${makeClass(
                            'time-grid__event-wrapper'
                          )}`}
                          style={{
                            top: draggedEvent.top - event.paddingTopHeight,
                            width: isInteracting
                              ? `${currentColumnWidth}px`
                              : `${percentWidth}%`,
                            left: isInteracting
                              ? `${leftChange}px`
                              : `${percentWidth * (column - 1)}%`,
                          }}
                        >
                          {event.paddingTopStart && !isDndPlaceholder && (
                            <div
                              className={makeClass(
                                'time-grid__event-padding',
                                'time-grid__event-padding-top'
                              )}
                              style={{
                                height: event.paddingTopHeight,
                              }}
                            >
                              {renderEventPaddingTop(event)}
                            </div>
                          )}
                          <Event
                            isExtendable={isEventExtendable}
                            event={draggedEvent}
                            style={{
                              height: `${draggedEvent.height}px`,
                            }}
                            onSelect={onSelectEvent}
                            isSelectable={!isDragging && !isExtending}
                          >
                            {renderEvent}
                          </Event>
                          {event.paddingBottomEnd && !isDndPlaceholder && (
                            <div
                              className={makeClass(
                                'time-grid__event-padding',
                                'time-grid__event-padding-bottom'
                              )}
                              style={{
                                height: event.paddingBottomHeight,
                              }}
                            >
                              {renderEventPaddingBottom(event)}
                            </div>
                          )}
                        </div>
                      );
                    }}
                  </EventDragDrop>
                )}
              </EventExtend>
            );
          });
        })}
        {stepDetails.map(stepDetail => {
          return (
            <div
              key={stepDetail.id}
              className={makeClass('time-grid__step-detail-wrapper')}
              style={{
                top: `${stepDetail.top}px`,
                height: `${stepDetail.height}px`,
              }}
            >
              {renderStepDetail(stepDetail)}
            </div>
          );
        })}
      </div>
    );
  }
);

Column.displayName = 'Column';

Column.defaultProps = {
  isEventDraggable: () => true,
  isEventExtendable: () => true,
  renderEvent: null,
  onExtendEnd: () => null,
  onDragEnd: () => null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  events: {},
  date: new Date(),
  onSelectEvent: () => null,
  onSelectSlot: () => null,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  currentTime: null,
  stepDetails: [],
  getUpdatedDraggedEvent: ({ event }) => event,
  minWidth: MIN_WIDTH_COLUMN_DEFAULT,
  minWidthEmpty: MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  renderStepDetail: () => null,
  renderSelectSlotIndicator: null,
  onSelectRangeEnd: () => null,
  renderSelectRange: null,
  renderEventPaddingTop: () => null,
  renderEventPaddingBottom: () => null,
  stepHeight: null,
};

Column.propTypes = {
  columnId: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  columnIndex: PropTypes.number.isRequired,
  columnWidths: COLUMN_WIDTHS_TYPE.isRequired,
  currentTime: MOMENT_TYPE,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  events: PropTypes.object,
  getUpdatedDraggedEvent: PropTypes.func,
  gridHeight: PropTypes.number.isRequired,
  isEventDraggable: PropTypes.func,
  isEventExtendable: PropTypes.func,
  minWidth: PropTypes.number,
  minWidthEmpty: PropTypes.number,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectRangeEnd: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderEvent: PropTypes.func,
  renderEventPaddingBottom: PropTypes.func,
  renderEventPaddingTop: PropTypes.func,
  renderSelectRange: PropTypes.func,
  renderSelectSlotIndicator: PropTypes.func,
  renderStepDetail: PropTypes.func,
  selectMinutes: STEP_MINUTES_TYPE,
  stepDetails: PropTypes.array,
  stepHeight: PropTypes.number,
  stepMinutes: STEP_MINUTES_TYPE,
};

export default Column;
