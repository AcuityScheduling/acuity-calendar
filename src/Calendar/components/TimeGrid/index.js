import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from './constants';
import { useCalendarSticky, getScrollbarWidth, getTopOffset } from './utils';
import { FIRST_DAY_TYPE, STEP_MINUTES_TYPE, DATE_TYPE } from '../../types';
import { makeClass } from '../../utils';
import {
  SELECTED_DATE_DEFAULT,
  FIRST_DAY_DEFAULT,
  STEP_MINUTES_DEFAULT,
  SELECT_MINUTES_DEFAULT,
} from '../../defaultProps';
import './index.scss';

const TimeGrid = React.forwardRef(
  (
    {
      selectedDate,
      firstDay,
      stepMinutes,
      stepHeight,
      selectMinutes,
      onCurrentTimeChange,
      renderHeader,
      renderColumns,
      renderCorner,
      totalWidth,
    },
    ref
  ) => {
    const [currentTime, setCurrentTime] = useState(moment());
    // Scrollbar width is usually 15 so let's use that as the default
    const [scrollbarWidth, setScrollbarWidth] = useState(15);

    useEffect(() => {
      const timeout = setTimeout(() => {
        const now = moment();
        setCurrentTime(now);
        onCurrentTimeChange(new Date(now.format('YYYY-MM-DD HH:mm:ss')));
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    });

    const {
      wrapperRef,
      timeGutterRef,
      headerRef,
      cornerRef,
      timeIndicatorRef,
      stepLinesRef,
    } = useCalendarSticky(totalWidth);

    // Default to something sensible - but we're really getting the width from the element
    // so css can change the time gutter
    let timeGutterWidth = 50;
    if (timeGutterRef.current) {
      timeGutterWidth = timeGutterRef.current.offsetWidth - STEP_BORDER_WIDTH;
    }

    const totalStepsPerBlock = 60 / stepMinutes;

    useEffect(() => {
      if (scrollbarWidth === 0) {
        setScrollbarWidth(getScrollbarWidth());
      }
    }, [scrollbarWidth]);

    const currentTimeIndicatorClass = makeClass(
      'time-grid__current-time-indicator'
    );

    const totalGridHeight = useMemo(() => {
      const aggregateBorderHeight = totalStepsPerBlock * STEP_BORDER_WIDTH * 24;
      return (
        (stepHeight || STEP_HEIGHTS[stepMinutes]) * totalStepsPerBlock * 24 +
        (aggregateBorderHeight - 1 * STEP_BORDER_WIDTH * 25)
      );
    }, [stepMinutes]);

    const renderStepLines = () => {
      const extraBorderHeight = STEP_BORDER_WIDTH / totalStepsPerBlock;
      const stepHeightWithBorder = `${(stepHeight ||
        STEP_HEIGHTS[stepMinutes]) + extraBorderHeight}px`;
      const times = [];
      for (let i = 0; i < 24 * totalStepsPerBlock; i += 1) {
        const minorStep = i % totalStepsPerBlock;
        times.push(
          <div
            className={makeClass(
              'time-grid__step-line',
              minorStep && 'time-grid__step-line-minor'
            )}
            key={`timeBlock${i}`}
            style={{
              height: stepHeightWithBorder,
            }}
            role="button"
          />
        );
      }
      return times;
    };

    const renderTimes = () => {
      const blockHeight =
        totalStepsPerBlock * (stepHeight || STEP_HEIGHTS[stepMinutes]);
      const times = [];
      for (let i = 0; i < 24; i += 1) {
        times.push(
          <div
            className={makeClass('time-grid__time-label-wrapper')}
            key={`dayTime${i}`}
            style={{
              height: `${blockHeight + STEP_BORDER_WIDTH}px`,
            }}
          >
            <span
              className={makeClass(
                'time-grid__time-label',
                `time-grid__time-label-${i}`
              )}
            >
              {moment()
                .hour(i)
                .format('ha')}
            </span>
          </div>
        );
      }
      return times;
    };

    return (
      <div className={makeClass('time-grid')} ref={ref}>
        <div className={makeClass('time-grid__header-wrapper')}>
          <div
            className={makeClass('time-grid__corner')}
            style={{ flex: `1 0 ${timeGutterWidth}px` }}
            ref={cornerRef}
          >
            {renderCorner({ currentTime: new Date(currentTime) })}
          </div>
          <div
            className={makeClass('time-grid__header')}
            style={{ marginRight: scrollbarWidth - STEP_BORDER_WIDTH }}
            ref={headerRef}
          >
            {renderHeader()}
          </div>
          <div
            className={makeClass('time-grid__scroll-gutter')}
            style={{ width: scrollbarWidth - STEP_BORDER_WIDTH }}
          >
            <div className={makeClass('time-grid__scroll-gutter-connector')} />
          </div>
        </div>
        <div className={makeClass('time-grid__grid-wrapper')} ref={wrapperRef}>
          <div
            className={makeClass('time-grid__step-lines')}
            ref={stepLinesRef}
          >
            {renderStepLines()}
          </div>
          <div
            className={makeClass('time-grid__time-gutter')}
            ref={timeGutterRef}
            style={{ height: totalGridHeight }}
          >
            {renderTimes()}
          </div>
          <div className={makeClass('time-grid__grid')}>
            <div
              className={currentTimeIndicatorClass}
              style={{
                top: `${getTopOffset({
                  stepMinutes,
                  date: currentTime,
                  stepHeight,
                })}px`,
              }}
              ref={timeIndicatorRef}
            >
              <span className={`${currentTimeIndicatorClass}__time`}>
                {moment().format('h:mma')}
              </span>
              <div className={`${currentTimeIndicatorClass}__line`} />
            </div>
            {renderColumns({ currentTime, totalGridHeight })}
          </div>
        </div>
      </div>
    );
  }
);

TimeGrid.displayName = 'TimeGrid';

TimeGrid.defaultProps = {
  renderCorner: () => null,
  selectedDate: SELECTED_DATE_DEFAULT,
  firstDay: FIRST_DAY_DEFAULT,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  stepMinutes: STEP_MINUTES_DEFAULT,
  stepHeight: null,
  onCurrentTimeChange: () => null,
};

TimeGrid.propTypes = {
  firstDay: FIRST_DAY_TYPE,
  onCurrentTimeChange: PropTypes.func,
  renderColumns: PropTypes.func.isRequired,
  renderCorner: PropTypes.func,
  renderHeader: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE,
  selectedDate: DATE_TYPE,
  stepHeight: PropTypes.number,
  stepMinutes: STEP_MINUTES_TYPE,
  totalWidth: PropTypes.number.isRequired,
};

export default TimeGrid;
