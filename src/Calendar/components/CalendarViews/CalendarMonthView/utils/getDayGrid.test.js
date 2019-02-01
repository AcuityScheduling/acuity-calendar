import getDayGrid, { getArrayOfDays } from "./getDayGrid";
import isEqual from "lodash/isEqual";
import moment from "moment";

const getTestInfo = ({ dateString, firstDay }) => {
  const date = moment(dateString);
  const arrayOfDays = getArrayOfDays(date);
  const result = getDayGrid({ date, firstDay });
  return {
    result,
    arrayOfDays
  };
};

describe("The monthly grid function", () => {
  it("should have 42 days", () => {
    const { result } = getTestInfo({
      dateString: "2019-01-15",
      firstDay: 0
    });
    expect(result.length === 42).toBeTruthy();
  });

  it("should have the correct grid for Sunday as the first day", () => {
    const { result, arrayOfDays } = getTestInfo({
      dateString: "2019-01-15",
      firstDay: 0
    });
    const expected = [30, 31, ...arrayOfDays, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(isEqual(result, expected)).toBeTruthy();
  });

  it("should have the correct grid for Monday as the first day", () => {
    const { result, arrayOfDays } = getTestInfo({
      dateString: "2019-02-15",
      firstDay: 1
    });
    const expected = [
      28,
      29,
      30,
      31,
      ...arrayOfDays,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ];
    expect(isEqual(result, expected)).toBeTruthy();
  });

  it("should have the correct grid for Friday as the first day", () => {
    const { result, arrayOfDays } = getTestInfo({
      dateString: "2019-03-15",
      firstDay: 5
    });
    const expected = [...arrayOfDays, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(isEqual(result, expected)).toBeTruthy();
  });

  it("should have the correct grid for Sunday as the first day on leap year", () => {
    const { result, arrayOfDays } = getTestInfo({
      dateString: "2020-02-15",
      firstDay: 0
    });
    const expected = [
      26,
      27,
      28,
      29,
      30,
      31,
      ...arrayOfDays,
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ];

    expect(isEqual(result, expected)).toBeTruthy();
  });
});
