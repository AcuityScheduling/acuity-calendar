import PropTypes from 'prop-types';
import moment from 'moment';
import { CALENDAR_VIEWS, CALENDARS } from './constants';

export const DATE_TYPE = PropTypes.oneOfType([
  PropTypes.instanceOf(Date),
  PropTypes.instanceOf(moment),
  PropTypes.string,
]);
export const FIRST_DAY_TYPE = PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]);
export const MOMENT_TYPE = PropTypes.instanceOf(moment);
export const CALENDAR_VIEW_TYPE = PropTypes.oneOf(Object.keys(CALENDAR_VIEWS));
export const EVENT_TYPE = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  group_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  start: DATE_TYPE.isRequired,
  end: DATE_TYPE.isRequired,
});
export const STEP_DETAILS_TYPE = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  group_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  start: DATE_TYPE.isRequired,
  end: DATE_TYPE.isRequired,
});
export const STEP_MINUTES_TYPE = PropTypes.oneOf([5, 10, 15, 20, 30, 60]);
export const GROUP_TYPE = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
});
export const REF_TYPE = PropTypes.shape({
  current: PropTypes.instanceOf(
    typeof Element === 'undefined' ? function() {} : Element
  ),
});
export const COLUMN_WIDTHS_TYPE = PropTypes.arrayOf(PropTypes.number);

const getViewShape = type => {
  return Object.keys(CALENDAR_VIEWS).reduce((accumulator, view) => {
    return { ...accumulator, [view]: type };
  }, {});
};
export const CALENDAR_RENDER_TYPE = PropTypes.shape(
  getViewShape(PropTypes.func)
);

export const CALENDAR_TYPE = PropTypes.oneOf(Object.values(CALENDARS));

export const DAY_GRID_TYPE = PropTypes.arrayOf(
  PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      isInRange: PropTypes.bool,
      date: DATE_TYPE,
    })
  )
);

export const TIME_GRID_TYPE = PropTypes.arrayOf(
  PropTypes.oneOfType([PropTypes.string, PropTypes.number])
);

export const GRID_TYPE = PropTypes.oneOfType([DAY_GRID_TYPE, TIME_GRID_TYPE]);
