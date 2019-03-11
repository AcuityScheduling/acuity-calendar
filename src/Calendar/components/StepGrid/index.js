import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from './constants';
import { useCalendarSticky, getScrollbarWidth, getTopOffset } from './utils';
import { MOMENT_TYPE, FIRST_DAY_TYPE, STEP_MINUTES_TYPE } from '../../types';
import { makeClass } from '../../utils';
import './index.scss';
import {
  SELECTED_DATE_DEFAULT,
  FIRST_DAY_DEFAULT,
  STEP_MINUTES_DEFAULT,
  SELECT_MINUTES_DEFAULT,
} from '../../defaultProps';

const StepGrid = ({
  selectedDate,
  firstDay,
  stepMinutes,
  stepHeight,
  selectMinutes,
  onCurrentTimeChange,
  renderHeader,
  renderColumns,
  renderCorner,
}) => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const timeout = setTimeout(() => {
      const now = moment();
      setCurrentTime(now);
      onCurrentTimeChange(new Date(now.format('YYYY-MM-DD HH:mm:ss')));
    }, 1000 * 60);
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
  } = useCalendarSticky();

  // Default to something sensible
  let timeGutterWidth = 50;
  if (timeGutterRef.current) {
    timeGutterWidth = timeGutterRef.current.offsetWidth - STEP_BORDER_WIDTH;
  }

  const totalStepsPerBlock = 60 / stepMinutes;
  const scrollbarWidth = getScrollbarWidth();
  const currentTimeIndicatorClass = makeClass(
    'step-grid__current-time-indicator'
  );

  const renderStepLines = () => {
    const extraBorderHeight = STEP_BORDER_WIDTH / totalStepsPerBlock;
    const stepHeightWithBorder = `${(stepHeight || STEP_HEIGHTS[stepMinutes]) +
      extraBorderHeight}px`;
    const times = [];
    for (let i = 0; i < 24 * totalStepsPerBlock; i += 1) {
      const minorStep = i % totalStepsPerBlock;
      times.push(
        <div
          className={makeClass(
            'step-grid__step-line',
            minorStep && 'step-grid__step-line-minor'
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
          className={makeClass('step-grid__time-label-wrapper')}
          key={`dayTime${i}`}
          style={{
            height: `${blockHeight + STEP_BORDER_WIDTH}px`,
          }}
        >
          <span
            className={makeClass(
              'step-grid__time-label',
              `step-grid__time-label-${i}`
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
    <div className={makeClass('step-grid__wrapper')}>
      <div className={makeClass('step-grid__header-wrapper')}>
        <div
          className={makeClass('step-grid__corner')}
          style={{ width: `${timeGutterWidth}px` }}
          ref={cornerRef}
        >
          {renderCorner({ currentTime })}
        </div>
        <div
          style={{
            width: '100%',
          }}
          className={makeClass('step-grid__header')}
          ref={headerRef}
        >
          {renderHeader()}
        </div>
        <div
          className={makeClass('step-grid__header-scroll-gutter-padding')}
          style={{
            width: `${scrollbarWidth}px`,
          }}
        />
        <div
          className={makeClass('step-grid__header-scroll-gutter')}
          style={{ width: `${scrollbarWidth - STEP_BORDER_WIDTH}px` }}
        >
          <div
            className={makeClass('step-grid__header-scroll-gutter-connector')}
          />
        </div>
      </div>
      <div className={makeClass('step-grid')} ref={wrapperRef}>
        <div className={makeClass('step-grid__step-lines')} ref={stepLinesRef}>
          {renderStepLines()}
        </div>
        <div className={makeClass('step-grid__column-wrapper')}>
          <div
            className={makeClass('step-grid__time-gutter')}
            ref={timeGutterRef}
          >
            {renderTimes()}
          </div>
          <div className={makeClass('step-grid__columns')}>
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
            {renderColumns({ currentTime })}
          </div>
        </div>
      </div>
    </div>
  );
};

StepGrid.defaultProps = {
  renderCorner: () => null,
  selectedDate: SELECTED_DATE_DEFAULT,
  firstDay: FIRST_DAY_DEFAULT,
  selectMinutes: SELECT_MINUTES_DEFAULT,
  stepMinutes: STEP_MINUTES_DEFAULT,
  stepHeight: null,
  onCurrentTimeChange: () => null,
};

StepGrid.propTypes = {
  firstDay: FIRST_DAY_TYPE,
  onCurrentTimeChange: PropTypes.func,
  renderColumns: PropTypes.func.isRequired,
  renderCorner: PropTypes.func,
  renderHeader: PropTypes.func.isRequired,
  selectMinutes: STEP_MINUTES_TYPE,
  selectedDate: MOMENT_TYPE,
  stepHeight: PropTypes.number,
  stepMinutes: STEP_MINUTES_TYPE,
};

export default StepGrid;
