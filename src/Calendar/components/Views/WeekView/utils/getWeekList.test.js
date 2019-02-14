import { getFirstDayIndex } from "./getWeekList";

describe("The correct index for weekly array", () => {
  it("get the correct index for a monday start", () => {
    const result = getFirstDayIndex({ firstDay: 1, dateDay: 0 });
    expect(result).toEqual(0);
  });

  it("get the correct index for a thursday start", () => {
    const result = getFirstDayIndex({ firstDay: 4, dateDay: 0 });
    expect(result).toEqual(3);
  });

  it("get the correct index for a monday with a monday selected day", () => {
    const result = getFirstDayIndex({ firstDay: 1, dateDay: 4 });
    expect(result).toEqual(3);
  });
});
