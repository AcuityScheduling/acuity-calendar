import React from 'react';
import PropTypes from 'prop-types';
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
  totalColumns,
  date,
  minWidth,
  minWidthEmpty,
  type,
}) => {
  return (
    <div
      className={`${makeClass(
        'time-grid__header-column',
        `time-grid__header-column-${type}`
      )}${getTodayClass(date)}`}
      style={{
        minWidth: `${totalEventColumns * minWidth || minWidthEmpty}px`,
      }}
    >
      <div className={`${makeClass('time-grid__header-column-container')}`}>
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
  date: MOMENT_TYPE.isRequired,
  minWidth: PropTypes.number,
  minWidthEmpty: PropTypes.number,
  totalColumns: PropTypes.number.isRequired,
  totalEventColumns: PropTypes.number.isRequired,
  type: PropTypes.oneOf([CALENDAR_VIEWS.week, CALENDAR_VIEWS.groups])
    .isRequired,
};

export default ColumnHeader;
