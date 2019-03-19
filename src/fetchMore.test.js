import moment from 'moment';
import { getNewRanges, getNewRangeOutsideRange } from './fetchMore';

const monthPadding = 1;

const toString = date => {
  return date.format('YYYY-MM-DD');
};

describe('Get new ranges for calendar fetch more', () => {
  it('should extend the start date by the month padding', () => {
    const startDate = moment(new Date('2019-01-01 00:00:00'));
    const endDate = moment(new Date('2019-03-31 23:59:59'));

    const fullRange = {
      startDate,
      endDate,
    };
    const selectedDate = moment(new Date('2019-01-12'));

    const newRanges = getNewRanges({
      selectedDate,
      ...fullRange,
      monthPadding,
    });

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

    const result = {
      fullRange: {
        start: toString(newRanges.fullRange.start),
        end: toString(newRanges.fullRange.end),
      },
      fetchMoreRange: {
        start: toString(newRanges.fetchMoreRange.start),
        end: toString(newRanges.fetchMoreRange.end),
      },
    };

    expect(result).toEqual(expected);
  });

  it('should extend the end date by the month padding', () => {
    const startDate = moment(new Date('2019-01-01 00:00:00'));
    const endDate = moment(new Date('2019-03-31 23:59:59'));

    const fullRange = {
      startDate,
      endDate,
    };
    const selectedDate = moment(new Date('2019-03-12'));

    const newRanges = getNewRanges({
      selectedDate,
      ...fullRange,
      monthPadding,
    });

    const newEndDate = endDate
      .clone()
      .add(monthPadding, 'months')
      .add(1, 'milliseconds');

    const expected = {
      fullRange: {
        start: toString(startDate),
        end: toString(newEndDate),
      },
      fetchMoreRange: {
        start: toString(endDate),
        end: toString(newEndDate),
      },
    };

    const result = {
      fullRange: {
        start: toString(newRanges.fullRange.start),
        end: toString(newRanges.fullRange.end),
      },
      fetchMoreRange: {
        start: toString(newRanges.fetchMoreRange.start),
        end: toString(newRanges.fetchMoreRange.end),
      },
    };

    expect(result).toEqual(expected);
  });

  it('should return false because date is outside range - will reset initial range', () => {
    const startDate = moment(new Date('2019-01-01 00:00:00'));
    const endDate = moment(new Date('2019-03-31 23:59:59'));

    const fullRange = {
      startDate,
      endDate,
    };

    const selectedDate = moment(new Date('2018-06-12'));

    const newRanges = getNewRanges({
      selectedDate,
      ...fullRange,
      monthPadding,
    });

    const expected = {
      fullRange: false,
      fetchMoreRange: false,
    };

    expect(newRanges).toEqual(expected);
  });
});

describe('Get outside range for calendar fetch more', () => {
  it('should reset the range', () => {
    const selectedDates = [
      moment(new Date('2019-06-12')),
      moment(new Date('2018-01-01')),
      moment(new Date('2018-01-31')),
      moment(new Date('2018-02-28')),
      moment(new Date('2020-02-29')),
    ];

    selectedDates.forEach(selectedDate => {
      const newRanges = getNewRangeOutsideRange({ selectedDate, monthPadding });

      const expected = {
        start: toString(
          selectedDate
            .clone()
            .subtract(monthPadding, 'months')
            .startOf('month')
        ),
        end: toString(
          selectedDate
            .clone()
            .add(monthPadding, 'months')
            .endOf('month')
        ),
      };

      const result = {
        start: toString(newRanges.start),
        end: toString(newRanges.end),
      };

      expect(result).toEqual(expected);
    });
  });
});
