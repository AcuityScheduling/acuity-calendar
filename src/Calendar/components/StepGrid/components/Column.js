import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import get from 'lodash/get';
import {
  MOMENT_TYPE,
  STEP_MINUTES_TYPE,
  COLUMN_WIDTHS_TYPE,
} from '../../../types';
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from '../constants';
import {
  getTodayClass,
  getTopOffset,
  useSelectRange,
  getClickedTime,
  getDisplayTime,
} from '../utils';
import './Column.scss';
import { makeClass } from '../../../utils';
import Event from '../../Event';
import EventDragDrop from '../../Event/components/EventDragDrop';
import EventExtend from '../../Event/components/EventExtend';
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

    const [isSlotClickable, setIsSlotClickable] = useState(true);
    const [clickedTime, setClickedTime] = useState(null);

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
      columnHeight: totalHeight,
      columnDate: date,
    });

    // If we remove a column it's not going to remove it from the columnWidths
    // array it will just set it to 0. So in this case don't want to count it
    // which is why we're not doing columnWidths.length here
    const totalColumns = columnWidths.reduce((total, columnWidth) => {
      if (columnWidth !== 0) {
        return total + 1;
      }
      return total;
    }, 0);
    const totalEventColumns = Object.keys(events).length;
    const percentWidth = 100 / totalEventColumns - 1;
    const currentTimeIndicatorClass = makeClass(
      'step-grid__current-time-indicator'
    );

    return (
      <div
        className={`${makeClass('step-grid__column')}${getTodayClass(date)}`}
        key={`weekView${date.day()}`}
        style={{
          height: `${totalHeight}px`,
          minWidth: `${totalEventColumns * minWidth || minWidthEmpty}px`,
          width: `${100 / totalColumns}%`,
        }}
        onClick={e => {
          if (isSelectRangeFinished) {
            resetSelectRangeDrag();
            onSelectRangeEnd({
              start: new Date(selectRange.start),
              end: new Date(selectRange.end),
              column: columnId,
            });
            return false;
          }
          if (!isSlotClickable) return false;
          const clickedTime = getClickedTime({
            stepMinutes,
            selectMinutes,
            columnDate: date,
          })(e);
          setClickedTime(clickedTime);
          onSelectSlot({ time: new Date(clickedTime), column: columnId });
          setTimeout(() => setClickedTime(null), 300);
          resetSelectRangeDrag();
        }}
        {...selectRangeHandlers}
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
        {clickedTime && (
          <div
            className={makeClass('step-grid__select-slot-indicator')}
            style={{
              top: `${getTopOffset({ stepMinutes, date: clickedTime })}px`,
            }}
          >
            {renderSelectSlotIndicator ? (
              renderSelectSlotIndicator({
                time: new Date(clickedTime.format('YYYY-MM-DD HH:mm:ss')),
                column: columnId,
              })
            ) : (
              <div
                className={makeClass('step-grid__select-slot-indicator-time')}
              >
                {clickedTime.format('h:mma')}
              </div>
            )}
          </div>
        )}
        {selectRangeHeight !== 0 && (
          <div
            className={makeClass('step-grid__select-range')}
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
                stepMinutes={stepMinutes}
                selectMinutes={selectMinutes}
                onExtend={() => {
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
                    columnHeight={totalHeight}
                    columnIndex={columnIndex}
                    columnWidths={columnWidths}
                    stepMinutes={stepMinutes}
                    selectMinutes={selectMinutes}
                    onDragEnd={onDragEnd}
                    getUpdatedDraggedEvent={getUpdatedDraggedEvent}
                  >
                    {({
                      draggedEvent,
                      isDragging,
                      leftChange,
                      currentColumnWidth,
                      isDndPlaceholder,
                    }) => {
                      return (
                        <Event
                          event={draggedEvent}
                          style={{
                            top: `${draggedEvent.top}px`,
                            height: `${draggedEvent.height}px`,
                            width:
                              !isDndPlaceholder && (isDragging || isExtending)
                                ? `${currentColumnWidth}px`
                                : `${percentWidth}%`,
                            left:
                              !isDndPlaceholder && (isDragging || isExtending)
                                ? `${leftChange}px`
                                : `${percentWidth * (column - 1)}%`,
                          }}
                          onSelectEvent={onSelectEvent}
                          isSelectable={!isDragging && !isExtending}
                        >
                          {renderEvent}
                        </Event>
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
              className={makeClass('step-grid__step-detail-wrapper')}
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
  renderEvent: null,
  onExtendEnd: () => null,
  onDragEnd: () => null,
  stepMinutes: STEP_MINUTES_DEFAULT,
  events: {},
  date: moment(),
  onSelectEvent: () => null,
  onSelectSlot: () => null,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  currentTime: null,
  stepDetails: [],
  getUpdatedDraggedEvent: () => null,
  minWidth: MIN_WIDTH_COLUMN_DEFAULT,
  minWidthEmpty: MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
  renderStepDetail: () => null,
  renderSelectSlotIndicator: null,
  onSelectRangeEnd: () => null,
  renderSelectRange: null,
};

Column.propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number])
    .isRequired,
  columnIndex: PropTypes.number.isRequired,
  columnWidths: COLUMN_WIDTHS_TYPE.isRequired,
  currentTime: MOMENT_TYPE,
  date: MOMENT_TYPE,
  events: PropTypes.object,
  getUpdatedDraggedEvent: PropTypes.func,
  minWidth: PropTypes.number,
  minWidthEmpty: PropTypes.number,
  onDragEnd: PropTypes.func,
  onExtendEnd: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onSelectRangeEnd: PropTypes.func,
  onSelectSlot: PropTypes.func,
  renderEvent: PropTypes.func,
  renderSelectRange: PropTypes.func,
  renderSelectSlotIndicator: PropTypes.func,
  renderStepDetail: PropTypes.func,
  selectMinutes: STEP_MINUTES_TYPE,
  stepDetails: PropTypes.array,
  stepMinutes: STEP_MINUTES_TYPE,
};

export default Column;
