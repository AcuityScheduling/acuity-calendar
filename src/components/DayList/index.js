import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { DayGrid } from '../../Calendar';
import { DATE_TYPE } from '../../Calendar/types';

const DayList = ({
  firstDate,
  getExcludedDates,
  lastDate,
  renderCell,
  renderHeader,
  totalDays,
}) => {
  const grid = {
    firstDate,
    lastDate,
    totalColumns: totalDays,
    getExcludedDates,
  };

  return <DayGrid grid={grid} />;
};

DayList.defaultProps = {
  firstDate: moment(),
  lastDate: moment().add(7, 'days'),
  getExcludedDates: () => false,
  renderCell: null,
  renderHeader: null,
  totalDays: 7,
};

DayList.propTypes = {
  firstDate: DATE_TYPE,
  getExcludedDates: PropTypes.func,
  lastDate: DATE_TYPE,
  renderCell: PropTypes.func,
  renderHeader: PropTypes.func,
  totalDays: PropTypes.number,
};

export default DayList;
