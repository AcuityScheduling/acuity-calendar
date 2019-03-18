import getGrid from './getGrid';
import moment from 'moment';

const getGridStrings = grid => {
  return grid.map(row => {
    return row.map(dayDetails => {
      return dayDetails.date.format('YYYY-MM-DD');
    });
  });
};

describe('The grid function for the daily grid', () => {
  it('should get a correct grid for one week', () => {
    const grid = getGrid({
      firstDate: moment(new Date('2019-02-01 00:00:00')),
      lastDate: moment(new Date('2019-02-07 00:00:00')),
    });
    const result = getGridStrings(grid);
    const expected = [
      [
        '2019-02-01',
        '2019-02-02',
        '2019-02-03',
        '2019-02-04',
        '2019-02-05',
        '2019-02-06',
        '2019-02-07',
      ],
    ];
    expect(result).toEqual(expected);
  });

  it('should remove the partial row', () => {
    const grid = getGrid({
      firstDate: moment(new Date('2019-02-01 00:00:00')),
      lastDate: moment(new Date('2019-02-07 00:00:00')),
      totalColumns: 3,
    });
    const result = getGridStrings(grid);
    const expected = [
      ['2019-02-01', '2019-02-02', '2019-02-03'],
      ['2019-02-04', '2019-02-05', '2019-02-06'],
    ];
    expect(result).toEqual(expected);
  });

  it('should not remove the partial row', () => {
    const grid = getGrid({
      firstDate: moment(new Date('2019-02-01 00:00:00')),
      lastDate: moment(new Date('2019-02-07 00:00:00')),
      totalColumns: 3,
      allowPartialRows: true,
    });
    const result = getGridStrings(grid);
    const expected = [
      ['2019-02-01', '2019-02-02', '2019-02-03'],
      ['2019-02-04', '2019-02-05', '2019-02-06'],
      ['2019-02-07'],
    ];
    expect(result).toEqual(expected);
  });

  it('should get a month correctly from the first to last day', () => {
    const grid = getGrid({
      firstDate: moment(new Date('2019-02-01 00:00:00')),
      lastDate: moment(new Date('2019-03-01 00:00:00')),
    });
    const result = getGridStrings(grid);
    // The lastDate is inclusive, but in this case it would be on it's own
    // row and we're not setting allowPartialRows to true in this test
    const expected = [
      [
        '2019-02-01',
        '2019-02-02',
        '2019-02-03',
        '2019-02-04',
        '2019-02-05',
        '2019-02-06',
        '2019-02-07',
      ],
      [
        '2019-02-08',
        '2019-02-09',
        '2019-02-10',
        '2019-02-11',
        '2019-02-12',
        '2019-02-13',
        '2019-02-14',
      ],
      [
        '2019-02-15',
        '2019-02-16',
        '2019-02-17',
        '2019-02-18',
        '2019-02-19',
        '2019-02-20',
        '2019-02-21',
      ],
      [
        '2019-02-22',
        '2019-02-23',
        '2019-02-24',
        '2019-02-25',
        '2019-02-26',
        '2019-02-27',
        '2019-02-28',
      ],
    ];
    expect(result).toEqual(expected);
  });

  it('should exclude days based on exclude function', () => {
    const grid = getGrid({
      firstDate: moment(new Date('2019-02-01 00:00:00')),
      lastDate: moment(new Date('2019-03-01 00:00:00')),
      getExcludedDates: date => {
        if (date.format('dddd') === 'Sunday') {
          return true;
        }
        return false;
      },
    });
    const result = getGridStrings(grid);
    // The lastDate is inclusive, but in this case it would be on it's own
    // row and we're not setting allowPartialRows to true in this test
    const expected = [
      [
        '2019-02-01',
        '2019-02-02',
        '2019-02-04',
        '2019-02-05',
        '2019-02-06',
        '2019-02-07',
        '2019-02-08',
      ],
      [
        '2019-02-09',
        '2019-02-11',
        '2019-02-12',
        '2019-02-13',
        '2019-02-14',
        '2019-02-15',
        '2019-02-16',
      ],
      [
        '2019-02-18',
        '2019-02-19',
        '2019-02-20',
        '2019-02-21',
        '2019-02-22',
        '2019-02-23',
        '2019-02-25',
      ],
    ];
    expect(result).toEqual(expected);
  });

  it('should allow a dynamic total of columns ', () => {
    const grid = getGrid({
      firstDate: moment(new Date('2019-02-01 00:00:00')),
      lastDate: moment(new Date('2019-03-01 00:00:00')),
      totalColumns: 5,
    });
    const result = getGridStrings(grid);
    const expected = [
      ['2019-02-01', '2019-02-02', '2019-02-03', '2019-02-04', '2019-02-05'],
      ['2019-02-06', '2019-02-07', '2019-02-08', '2019-02-09', '2019-02-10'],
      ['2019-02-11', '2019-02-12', '2019-02-13', '2019-02-14', '2019-02-15'],
      ['2019-02-16', '2019-02-17', '2019-02-18', '2019-02-19', '2019-02-20'],
      ['2019-02-21', '2019-02-22', '2019-02-23', '2019-02-24', '2019-02-25'],
    ];
    expect(result).toEqual(expected);
  });
});
