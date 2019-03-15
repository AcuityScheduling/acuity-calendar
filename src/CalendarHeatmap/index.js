import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import moment from 'moment';
import { COUNT_TYPE } from './types';
import Calendar from '../Calendar';
import { CALENDAR_VIEWS } from '../Calendar/constants';
import { DATE_TYPE, FIRST_DAY_TYPE } from '../Calendar/types';
import { FIRST_DAY_DEFAULT } from '../Calendar/defaultProps';
import { makeClass } from '../Calendar/utils';
import styles from './styles';

const CalendarHeatmap = ({
  counts,
  firstDay,
  forceSixWeeks,
  onSelectCell,
  renderCell,
  renderHeader,
  selectedDate,
}) => {
  const max = Math.max.apply(Math, Object.values(counts));
  const totalDates = Object.keys(counts).length;

  const getWeight = date => {
    const key = moment(date).format('YYYY-MM-DD');
    const count = get(counts, key, 0);
    const weight = totalDates > 0 ? Math.round((count / max) * 100) / 100 : 0;

    return {
      count,
      weight,
    };
  };

  return (
    <Fragment>
      <style>{styles}</style>
      <Calendar
        forceSixWeeks={forceSixWeeks}
        firstDay={firstDay}
        onSelectSlot={data => {
          const { weight, count } = getWeight(data.date);
          onSelectCell({ ...data, weight, count });
        }}
        renderHeader={{
          [CALENDAR_VIEWS.month]: renderHeader,
        }}
        renderMonthCell={data => {
          const { weight, count } = getWeight(data.date);
          return (
            <Fragment>
              {renderCell ? (
                renderCell({ ...data, weight, count })
              ) : (
                <div
                  className={makeClass('heatmap__cell')}
                  style={{ opacity: weight }}
                />
              )}
            </Fragment>
          );
        }}
        selectedDate={selectedDate}
        view={CALENDAR_VIEWS.month}
      />
    </Fragment>
  );
};

CalendarHeatmap.defaultProps = {
  counts: {},
  firstDay: FIRST_DAY_DEFAULT,
  forceSixWeeks: true,
  onSelectCell: () => null,
  renderCell: null,
  // eslint-disable-next-line react/prop-types
  renderHeader: ({ data }) => (
    <span className={makeClass('heatmap-header')}>{data.min}</span>
  ),
  selectedDate: new Date(),
};

CalendarHeatmap.propTypes = {
  counts: COUNT_TYPE,
  firstDay: FIRST_DAY_TYPE,
  forceSixWeeks: PropTypes.bool,
  onSelectCell: PropTypes.func,
  renderCell: PropTypes.func,
  renderHeader: PropTypes.func,
  selectedDate: DATE_TYPE,
};

export default CalendarHeatmap;
