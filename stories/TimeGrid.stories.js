import React from 'react';
import { TimeGrid } from '../src';
import moment from 'moment';
import { MOCKED_EVENTS } from '../src/Calendar/mocks';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export const example = () => {
  const events = MOCKED_EVENTS;
  const Header = ({ ColumnComponent, week }) => {
    return week.map(day => (
      <ColumnComponent
        key={day.toISOString()}
        totalEventColumns={week.length}
        date={day.toISOString()}
        columnClass="week"
      >
        <div>
          <div className={`time-grid__week-header__date`}>
            {moment(day).format('M/D')}
          </div>
          <div className={`time-grid__week-header__day`}>
            {moment(day).format('dddd')}
          </div>
        </div>
      </ColumnComponent>
    ));
  };

  const Columns = ({ ColumnComponent, week, events, stepDetails }) => {
    return week.map((day, index) => {
      const columnId = moment(day).format('YYYY-MM-DD');
      return (
        <ColumnComponent
          key={columnId}
          eventsForColumn={events?.[columnId]}
          eventsForStepDetails={stepDetails?.[columnId]}
          date={day.toISOString()}
          columnKey={columnId}
          columnIndex={index}
          columnId={columnId}
        />
      );
    });
  };

  return (
    <TimeGrid
      events={events}
      renderColumns={Columns}
      renderHeaders={Header}
      withColumns={boolean('withColumns', false)}
    />
  );
};

export default {
  title: 'TimeGrid',
  component: TimeGrid,
  decorators: [withKnobs],
};
