import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { CALENDAR_VIEWS } from '../../Calendar/constants';
import {
  CALENDAR_VIEW_TYPE,
  DATE_TYPE,
  FIRST_DAY_TYPE,
  FETCH_EVENT_INITIAL_FULL_RANGE,
  EVENT_TYPE,
  VIEWS_TYPE,
} from '../../Calendar/types';
import { makeClass } from '../../Calendar/utils';
import './index.scss';
import {
  getNavigateDate,
  getRangeTitle,
  useFetchEvents,
  getEventsForView,
} from './utils';
import {
  FIRST_DAY_DEFAULT,
  FETCH_EVENT_PADDING_DEFAULT,
} from '../../Calendar/defaultProps';

const Toolbar = ({
  children,
  firstDay,
  fetchEventInitialFullRange,
  fetchEventPadding,
  onNavigate,
  onFetchEvents,
  onViewChange,
  selectedDate,
  events,
  currentView,
  views,
}) => {
  const {
    fetchMoreRange,
    fullRange,
    shouldFetchMore,
    isOutsideRange,
  } = useFetchEvents({
    cursorDate: selectedDate,
    monthPadding: fetchEventPadding,
    currentFullRange: fetchEventInitialFullRange,
  });

  useEffect(() => {
    onFetchEvents({
      fetchMoreRange,
      fullRange,
      initialFetch: true,
    });
  }, []);

  if (shouldFetchMore || isOutsideRange) {
    onFetchEvents({
      fetchMoreRange: fetchMoreRange,
      fullRange: fullRange,
      outsideRange: isOutsideRange ? true : false,
    });
  }

  const changeDate = date => {
    onNavigate(date);
  };

  const title = getRangeTitle({
    date: moment(selectedDate),
    view: currentView,
    firstDay,
  });

  const onNext = () => {
    const date = new Date(
      getNavigateDate({
        view: currentView,
        direction: 1,
        currentDate: moment(selectedDate),
      })
    );
    changeDate(date);
  };

  const onPrev = () => {
    const date = new Date(
      getNavigateDate({
        view: currentView,
        direction: -1,
        currentDate: moment(selectedDate),
      })
    );
    changeDate(date);
  };

  const onToday = () => {
    changeDate(new Date());
  };

  const getViewName = view => {
    const capitalize = s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
    if (typeof view.displayName !== 'undefined') {
      return view.displayName;
    }
    if (typeof view === 'string') {
      return capitalize(view);
    }
    if (
      typeof view.displayName === 'undefined' &&
      typeof view.view !== 'undefined'
    ) {
      return capitalize(view.view);
    }
  };

  return children ? (
    children({
      onNext,
      onPrev,
      onToday,
      title,
      eventsForView: getEventsForView({
        events,
        view: currentView,
        selectedDate: moment(selectedDate),
        firstDay,
      }),
    })
  ) : (
    <div className={makeClass('toolbar')}>
      <div className={makeClass('toolbar__views')}>
        {views.map(view => (
          <button
            key={view}
            type="button"
            onClick={() =>
              onViewChange(typeof view === 'string' ? view : view.view)
            }
          >
            {getViewName(view)}
          </button>
        ))}
      </div>
      <div className={makeClass('toolbar__navigate')}>
        <button type="button" onClick={onToday}>
          Today
        </button>
        <button type="button" onClick={onPrev}>
          Back
        </button>
        <button type="button" onClick={onNext}>
          Next
        </button>
      </div>
      <h1 className={makeClass('toolbar__title')}>{title}</h1>
    </div>
  );
};

Toolbar.defaultProps = {
  children: null,
  events: [],
  firstDay: FIRST_DAY_DEFAULT,
  fetchEventInitialFullRange: null,
  fetchEventPadding: FETCH_EVENT_PADDING_DEFAULT,
  onFetchEvents: () => null,
  views: Object.values(CALENDAR_VIEWS),
};

Toolbar.propTypes = {
  children: PropTypes.func,
  currentView: CALENDAR_VIEW_TYPE.isRequired,
  events: PropTypes.arrayOf(EVENT_TYPE),
  fetchEventInitialFullRange: FETCH_EVENT_INITIAL_FULL_RANGE,
  fetchEventPadding: PropTypes.number,
  firstDay: FIRST_DAY_TYPE,
  onFetchEvents: PropTypes.func,
  onNavigate: PropTypes.func.isRequired,
  onViewChange: PropTypes.func.isRequired,
  selectedDate: DATE_TYPE.isRequired,
  views: VIEWS_TYPE,
};

export default Toolbar;
