import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import DayGrid from '../../Calendar/components/DayGrid/DayGrid';
import { FIRST_DAY_TYPE } from '../../Calendar/types';
import { makeClass } from '../../Calendar/utils';
import { FIRST_DAY_DEFAULT } from '../../Calendar/defaultProps';
import './DayList.scss';

const DayList = ({
  renderCell,
  renderHeader,
  firstDay,
  totalDays,
  ...restProps
}) => {
  const grid = {
    firstDate: moment().day(firstDay),
    lastDate: moment()
      .day(firstDay)
      .add(7, 'days'),
    totalColumns: totalDays,
  };

  const getDayFormat = date => {
    return {
      full: date.format('dddd'),
      small: date.format('ddd'),
      min: date.format('dd'),
      int: Number(date.format('d')),
    };
  };

  return (
    <div className={makeClass('day-list')}>
      <DayGrid
        grid={grid}
        renderHeader={({ date }) => {
          if (renderHeader) {
            return renderHeader(getDayFormat(moment(date)));
          }
          return date.format('dddd');
        }}
        renderCell={({ date }) => {
          if (!renderCell) return null;
          return renderCell(getDayFormat(moment(date)));
        }}
        {...restProps}
      />
    </div>
  );
};

DayList.defaultProps = {
  renderCell: () => null,
  renderHeader: null,
  firstDay: FIRST_DAY_DEFAULT,
  totalDays: 7,
};

DayList.propTypes = {
  firstDay: FIRST_DAY_TYPE,
  renderCell: PropTypes.func,
  renderHeader: PropTypes.func,
  totalDays: PropTypes.number,
};

export default DayList;
