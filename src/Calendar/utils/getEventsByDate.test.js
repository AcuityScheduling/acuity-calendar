import getEventsByDate from "./getEventsByDate";
import eventsMocked, { event1, event2, event3, event4 } from "./eventsMocked";

describe("Events keyed by date", () => {
  it("key events by date", () => {
    const weekdays = getEventsByDate(eventsMocked);

    const expected = {
      "2019-01-02": [event1, event2],
      "2019-02-01": [event3],
      "2019-03-07": [event4]
    };

    expect(weekdays).toEqual(expected);
  });
});
