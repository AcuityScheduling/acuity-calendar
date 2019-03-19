import moment from 'moment';
import { getNewRanges } from '../fetchMore';

const monthPadding = 1;

const toString = date => {
  return date.format('YYYY-MM-DD HH:mm:ss');
};

describe('Get new ranges for calendar fetch more', () => {
  it('should extend the start date by the month padding', () => {
    const startDate = new Date('2019-01-01 00:00:00');
    const endDate = new Date('2019-03-31 23:59:59');

    const fullRange = {
      startDate,
      endDate,
    };
    const selectedDate = new Date('2019-01-12');

    const newRanges = getNewRanges({ selectedDate, ...fullRange });

    const newStartDate = moment(startDate)
      .clone()
      .subtract(monthPadding, 'months')
      .subtract(1, 'milliseconds');

    const expected = {
      fullRange: {
        start: toString(newStartDate),
        end: toString(endDate),
      },
      fetchMoreRange: {
        start: toString(newStartDate),
        end: toString(startDate),
      },
    };

    expect(expected).toEqual(newRanges);
  });

  //   it('should extend the end date by the month padding', () => {
  //     const startDate = new Date('2019-01-01 00:00:00');
  //     const endDate = new Date('2019-03-31 23:59:59');

  //     const fullRange = {
  //       startDate,
  //       endDate,
  //     };
  //     const selectedDate = new Date('2019-03-12');

  //     const newRanges = getNewRanges({ selectedDate, ...fullRange });

  //     const newEndDate = addMilliseconds(addMonths(endDate, monthPadding), 1);

  //     const expected = {
  //       fullRange: {
  //         viewerCalendarStart: toISO(startDate),
  //         viewerCalendarEnd: toISO(newEndDate),
  //       },
  //       fetchMoreRange: {
  //         viewerCalendarStart: toISO(endDate),
  //         viewerCalendarEnd: toISO(newEndDate),
  //       },
  //     };

  //     expect(isEqual(expected, newRanges)).toBeTruthy();
  //   });

  //   it('should return false because date is outside range - will reset initial range', () => {
  //     const startDate = new Date('2019-01-01 00:00:00');
  //     const endDate = new Date('2019-03-31 23:59:59');

  //     const fullRange = {
  //       startDate,
  //       endDate,
  //     };

  //     const selectedDate = new Date('2018-06-12');

  //     const newRanges = getNewRanges({ selectedDate, ...fullRange });

  //     const expected = {
  //       fullRange: false,
  //       fetchMoreRange: false,
  //     };

  //     expect(isEqual(expected, newRanges)).toBeTruthy();
  //   });
  // });

  // describe('Get outside range for calendar fetch more', () => {
  //   it('should reset the range', () => {
  //     const selectedDates = [
  //       new Date('2019-06-12'),
  //       new Date('2018-01-01'),
  //       new Date('2018-01-31'),
  //       new Date('2018-02-28'),
  //       new Date('2020-02-29'),
  //     ];

  //     selectedDates.forEach(selectedDate => {
  //       const newRanges = getNewRangeOutsideRange(selectedDate);

  //       const expected = {
  //         viewerCalendarStart: toISO(
  //           startOfMonth(subMonths(selectedDate, monthPadding))
  //         ),
  //         viewerCalendarEnd: toISO(
  //           endOfMonth(addMonths(selectedDate, monthPadding))
  //         ),
  //       };

  //       expect(isEqual(expected, newRanges)).toBeTruthy();
  //     });
  //   });
});
