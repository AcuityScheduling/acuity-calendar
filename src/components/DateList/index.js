import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { DayGrid } from '../../Calendar';
import { DATE_TYPE } from '../../Calendar/types';
import { makeClass } from '../../Calendar/utils';
import './index.scss';

const DateList = ({
  firstDate,
  getExcludedDates,
  lastDate,
  renderCell,
  renderHeader,
  totalDays,
  ...restProps
}) => {
  const grid = {
    firstDate,
    lastDate,
    totalColumns: totalDays,
    getExcludedDates,
  };

  return (
    <div className={makeClass('date-list')}>
      <DayGrid
        grid={grid}
        renderHeader={({ date }) => {
          if (renderHeader) {
            return renderHeader({ date });
          }
          if (date.isSame(moment(), 'day')) {
            return `${date.format('D')} Today`;
          }
          return date.format('D dddd');
        }}
        renderCell={renderCell}
        {...restProps}
      />
    </div>
  );
};

DateList.defaultProps = {
  firstDate: moment(),
  lastDate: moment().add(7, 'days'),
  getExcludedDates: () => false,
  renderCell: null,
  renderHeader: null,
  totalDays: 7,
};

DateList.propTypes = {
  firstDate: DATE_TYPE,
  getExcludedDates: PropTypes.func,
  lastDate: DATE_TYPE,
  renderCell: PropTypes.func,
  renderHeader: PropTypes.func,
  totalDays: PropTypes.number,
};

export default DateList;
