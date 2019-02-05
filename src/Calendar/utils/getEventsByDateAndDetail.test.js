import getEventsByDateAndDetail, {
  getEventDetails
} from "./getEventsByDateAndDetail";
import eventsMocked, { event1, event2, event3, event4 } from "./eventsMocked";

describe("Events keyed by date", () => {
  it("key events by date", () => {
    const weekdays = getEventsByDateAndDetail({
      events: eventsMocked,
      stepMinutes: 30
    });

    const expected = {
      "2019-01-02": [
        getEventDetails({ event: event1, stepMinutes: 30 }),
        getEventDetails({ event: event2, stepMinutes: 30 })
      ],
      "2019-02-01": [getEventDetails({ event: event3, stepMinutes: 30 })],
      "2019-03-07": [getEventDetails({ event: event4, stepMinutes: 30 })]
    };

    expect(weekdays).toEqual(expected);
  });
});
