import { getGrid } from './getMonthGrid';
import moment from 'moment';

const getTestInfo = ({ dateString, firstDay }) => {
  const date = moment(dateString);
  return getGrid({ date, firstDay });
};

describe('The monthly grid function', () => {
  it('should have 42 days and 6 columns', () => {
    const result = getTestInfo({
      dateString: '2019-01-15',
      firstDay: 0,
    });

    expect(result.length).toEqual(6);
    expect([].concat.apply([], result).length).toEqual(42);
  });

  it('should have the correct grid for Sunday as the first day', () => {
    const result = getTestInfo({
      dateString: '2019-01-15',
      firstDay: 0,
    });
    const expected = [
      [30, 31, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24, 25, 26],
      [27, 28, 29, 30, 31, 1, 2],
      [3, 4, 5, 6, 7, 8, 9],
    ];
    expect(result).toEqual(expected);
  });

  it('should have the correct grid for Monday as the first day', () => {
    const result = getTestInfo({
      dateString: '2019-02-15',
      firstDay: 1,
    });
    const expected = [
      [28, 29, 30, 31, 1, 2, 3],
      [4, 5, 6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15, 16, 17],
      [18, 19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 1, 2, 3],
      [4, 5, 6, 7, 8, 9, 10],
    ];

    expect(result).toEqual(expected);
  });

  it('should have the correct grid for Friday as the first day', () => {
    const result = getTestInfo({
      dateString: '2019-03-15',
      firstDay: 5,
    });
    const expected = [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, 1, 2, 3, 4],
      [5, 6, 7, 8, 9, 10, 11],
    ];
    expect(result).toEqual(expected);
  });

  it('should have the correct grid for Thursday as the first day', () => {
    const result = getTestInfo({
      dateString: '2019-01-15',
      firstDay: 4,
    });
    const expected = [
      [27, 28, 29, 30, 31, 1, 2],
      [3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23],
      [24, 25, 26, 27, 28, 29, 30],
      [31, 1, 2, 3, 4, 5, 6],
    ];
    expect(result).toEqual(expected);
  });

  it('should have the correct grid for Sunday as the first day on leap year', () => {
    const result = getTestInfo({
      dateString: '2020-02-15',
      firstDay: 0,
    });
    const expected = [
      [26, 27, 28, 29, 30, 31, 1],
      [2, 3, 4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20, 21, 22],
      [23, 24, 25, 26, 27, 28, 29],
      [1, 2, 3, 4, 5, 6, 7],
    ];

    expect(result).toEqual(expected);
  });
});
