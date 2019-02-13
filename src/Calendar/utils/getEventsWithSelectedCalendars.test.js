import getEventsWithSelectedCalendars from "./getEventsWithSelectedCalendars";
import getMungedEvents from "./getMungedEvents";
import eventsMocked from "./eventsMocked";

describe("Munged Event Object", () => {
  it("Must have an event from two calendars", () => {
    const mungedEvents = getMungedEvents({
      events: eventsMocked,
      stepMinutes: 30
    });

    const events = getEventsWithSelectedCalendars({
      mungedEvents,
      selectedCalendars: [5, 6]
    });

    const hasEvent3 = events["2019-02-12"].some(event => {
      return event.id === 3;
    });

    const hasEvent5 = events["2019-02-12"].some(event => {
      return event.id === 5;
    });

    expect(hasEvent3).toBeTruthy();
    expect(hasEvent5).toBeTruthy();
  });
});
