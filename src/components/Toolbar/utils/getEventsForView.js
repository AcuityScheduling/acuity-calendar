import moment from 'moment';
import { CALENDAR_VIEWS } from '../../../Calendar/constants';
import { getWeekList } from '../../CalendarWeek/utils';
const { groups, week, month } = CALENDAR_VIEWS;

const getEventsForView = ({ events, view, selectedDate, firstDay }) => {
  const { start, end } = getRange({
    view,
    selectedDate: moment(selectedDate),
    firstDay,
  });
  return events.filter(event => {
    const eventStart = moment(event.start);
    return eventStart.isBetween(start, end, 'minutes', '[]');
  });
};

const getRange = ({ view, selectedDate, firstDay }) => {
  const rangeMap = {
    [month]: () => ({
      start: selectedDate.clone().startOf('month'),
      end: selectedDate.clone().endOf('month'),
    }),
    [week]: () => {
      const weekList = getWeekList({ firstDay, date: selectedDate });
      return {
        start: weekList[0].clone().startOf('day'),
        end: weekList[0]
          .clone()
          .add(6, 'days')
          .endOf('day'),
      };
    },
    [groups]: () => {
      return {
        start: selectedDate.clone().startOf('day'),
        end: selectedDate.clone().endOf('day'),
      };
    },
  };
  return rangeMap[view]();
};

export default getEventsForView;
