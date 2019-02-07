import getMungedEvents from "./getMungedEvents";
import { eventsMocked } from "../utils";

describe("Munged Event Object", () => {
  it("has keys that are dates", () => {
    const mungedEvents = getMungedEvents({
      events: eventsMocked,
      stepMinutes: 30
    });

    expect(mungedEvents).toHaveProperty("2019-01-02");
    expect(mungedEvents).toHaveProperty("2019-02-07");
    expect(mungedEvents).toHaveProperty("2019-03-07");
  });

  it("has new keys needed for calendar", () => {
    const mungedEvents = getMungedEvents({
      events: eventsMocked,
      stepMinutes: 30
    });

    const event = mungedEvents["2019-01-02"][0];

    expect(event).toHaveProperty("top");
    expect(event).toHaveProperty("height");
    expect(event).toHaveProperty("column");
  });

  it("increases columns when it's supposed", () => {
    const mungedEvents = getMungedEvents({
      events: eventsMocked,
      stepMinutes: 30
    });

    const event1 = mungedEvents["2019-02-07"][0];
    const event2 = mungedEvents["2019-02-07"][1];
    const event3 = mungedEvents["2019-02-07"][2];
    const event4 = mungedEvents["2019-02-07"][3];

    expect(event1.column).toEqual(1);
    expect(event2.column).toEqual(2);
    expect(event3.column).toEqual(3);
    expect(event4.column).toEqual(1);
  });
});
