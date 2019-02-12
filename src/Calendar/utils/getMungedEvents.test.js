import getMungedEvents from "./getMungedEvents";
import { eventsMocked } from "../utils";

describe("Munged Event Object", () => {
  it("has keys that are calendar ids", () => {
    const mungedEvents = getMungedEvents({
      events: eventsMocked,
      stepMinutes: 30
    });

    expect(mungedEvents).toHaveProperty("5");
    expect(mungedEvents).toHaveProperty("6");
  });

  it("has keys that are dates", () => {
    const mungedEvents = getMungedEvents({
      events: eventsMocked,
      stepMinutes: 30
    });

    const calendar5 = mungedEvents[5];
    const calendar6 = mungedEvents[6];

    expect(calendar5).toHaveProperty("2019-01-02");
    expect(calendar6).toHaveProperty("2019-02-12");
    expect(calendar6).toHaveProperty("2019-03-07");
  });

  it("has new keys needed for calendar", () => {
    const mungedEvents = getMungedEvents({
      events: eventsMocked,
      stepMinutes: 30
    });

    const event = mungedEvents[5]["2019-01-02"][0];

    expect(event).toHaveProperty("top");
    expect(event).toHaveProperty("height");
  });
});
