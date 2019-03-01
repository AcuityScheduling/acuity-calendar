import React from 'react';
import PropTypes from 'prop-types';
import { makeClass } from '../../../utils';
import { getTodayClass } from '../utils';
import { MOMENT_TYPE } from '../../../types';

const ColumnHeader = ({ children, totalEventColumns, totalColumns, date }) => (
  <div
    className={`${makeClass(
      'step-grid__header-column',
      totalEventColumns === 0 && 'step-grid__header-column--no-events'
    )}${getTodayClass(date)}`}
    key={`dayHeader${date.date()}`}
    style={{
      minWidth: `${totalEventColumns * 190 || 100}px`,
      width: `${100 / totalColumns}%`,
    }}
  >
    {children}
  </div>
);

ColumnHeader.propTypes = {
  children: PropTypes.node.isRequired,
  date: MOMENT_TYPE.isRequired,
  totalColumns: PropTypes.number.isRequired,
  totalEventColumns: PropTypes.number.isRequired,
};

export default ColumnHeader;
