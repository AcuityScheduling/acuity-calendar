import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeClass } from '../../../utils';
import { getTodayClass } from '../utils';
import { MOMENT_TYPE } from '../../../types';
import {
  MIN_WIDTH_COLUMN_DEFAULT,
  MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
} from '../../../defaultProps';
import { CALENDAR_VIEWS } from '../../../constants';

const ColumnHeader = ({
  children,
  totalEventColumns,
  date,
  minWidth,
  minWidthEmpty,
  type,
}) => {
  const dateMoment = moment(date);
  return (
    <div
      className={`${makeClass('time-grid__header-column')}${getTodayClass(
        dateMoment
      )}`}
      style={{
        minWidth: `${totalEventColumns * minWidth || minWidthEmpty}px`,
      }}
    >
      <div
        className={`${makeClass(
          'time-grid__header-column-container',
          `time-grid__header-column-${type}`
        )}`}
      >
        {children}
      </div>
    </div>
  );
};

ColumnHeader.defaultProps = {
  minWidth: MIN_WIDTH_COLUMN_DEFAULT,
  minWidthEmpty: MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
};

ColumnHeader.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  minWidth: PropTypes.number,
  minWidthEmpty: PropTypes.number,
  // How many columns of events are there on one calendar column?
  // Basically events are side by side if their times overlap, that's the number of
  // we want here. What's the widest column?
  totalEventColumns: PropTypes.number.isRequired,
  type: PropTypes.oneOf([CALENDAR_VIEWS.week, CALENDAR_VIEWS.groups])
    .isRequired,
};

export default ColumnHeader;
