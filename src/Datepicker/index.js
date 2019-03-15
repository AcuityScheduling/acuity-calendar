import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import CalendarHeatmap from '../CalendarHeatmap';
import moment from 'moment';
import { COUNT_TYPE } from '../CalendarHeatmap/types';
import { FIRST_DAY_TYPE, DATE_TYPE } from '../Calendar/types';
import { FIRST_DAY_DEFAULT } from '../Calendar/defaultProps';
import { makeClass } from '../Calendar/utils';
import './index.scss';

const Datepicker = ({
  counts,
  firstDay,
  onClickNext,
  onClickPrev,
  onSelectCell,
  renderCell,
  renderCurrentMonth,
  renderDayHeader,
  renderNext,
  renderPrev,
  selectedDate,
}) => {
  const [date, setDate] = useState(moment(selectedDate));

  return (
    <div className={makeClass('datepicker')}>
      <div className={makeClass('datepicker__toolbar')}>
        <button
          tabIndex={0}
          onClick={e => {
            const nextMonth = date.clone().subtract(1, 'months');
            setDate(nextMonth);
            onClickNext({ e, date: nextMonth });
          }}
          type="button"
          className={makeClass('datepicker__prev', 'datepicker__nav-button')}
        >
          {renderPrev ? renderPrev() : <Fragment>&laquo;</Fragment>}
        </button>
        <div className={makeClass('datepicker__date')}>
          {renderCurrentMonth
            ? renderCurrentMonth({ date, setDate })
            : date.format('MMMM, YYYY')}
        </div>
        <button
          tabIndex={0}
          onClick={e => {
            const prevMonth = date.clone().add(1, 'months');
            setDate(prevMonth);
            onClickPrev({ e, date: prevMonth });
          }}
          type="button"
          className={makeClass('datepicker__next', 'datepicker__nav-button')}
        >
          {renderNext ? renderNext() : <Fragment>&raquo;</Fragment>}
        </button>
      </div>
      <CalendarHeatmap
        counts={counts}
        firstDay={firstDay}
        onSelectCell={onSelectCell}
        renderCell={renderCell}
        renderHeader={renderDayHeader}
        selectedDate={date}
      />
    </div>
  );
};

Datepicker.defaultProps = {
  counts: {},
  firstDay: FIRST_DAY_DEFAULT,
  onClickNext: () => null,
  onClickPrev: () => null,
  onSelectCell: () => null,
  renderCurrentMonth: null,
  renderCell: null,
  // eslint-disable-next-line react/prop-types
  renderDayHeader: ({ data }) => (
    <span className={makeClass('heatmap-header')}>{data.min}</span>
  ),
  renderNext: null,
  renderPrev: null,
  selectedDate: new Date(),
};

Datepicker.propTypes = {
  counts: COUNT_TYPE,
  firstDay: FIRST_DAY_TYPE,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  onSelectCell: PropTypes.func,
  renderCell: PropTypes.func,
  renderCurrentMonth: PropTypes.func,
  renderDayHeader: PropTypes.func,
  renderNext: PropTypes.func,
  renderPrev: PropTypes.func,
  selectedDate: DATE_TYPE,
};

export default Datepicker;
