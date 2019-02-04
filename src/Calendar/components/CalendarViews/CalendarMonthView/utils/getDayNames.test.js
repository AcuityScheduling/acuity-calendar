import getDayNames from "./getDayNames";

describe("The weekdays to array function", () => {
  it("should start with sunday", () => {
    const weekdays = getDayNames({});
    const expected = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    expect(weekdays).toEqual(expected);
  });

  it("should start with monday", () => {
    const weekdays = getDayNames({ firstDay: 1 });
    const expected = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    expect(weekdays).toEqual(expected);
  });

  it("should format weekdays", () => {
    const weekdays = getDayNames({ format: "dd" });
    const expected = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    expect(weekdays).toEqual(expected);
  });

  it("should start with Thursday", () => {
    const weekdays = getDayNames({ firstDay: 4 });
    const expected = [
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday"
    ];

    expect(weekdays).toEqual(expected);
  });
});