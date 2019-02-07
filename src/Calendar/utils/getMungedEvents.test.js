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
    expect(calendar6).toHaveProperty("2019-02-07");
    expect(calendar6).toHaveProperty("2019-03-07");
  });

  it("has keys for columns", () => {
    const mungedEvents = getMungedEvents({
      events: eventsMocked,
      stepMinutes: 30
    });

    const firstDate = mungedEvents[5]["2019-01-02"];
    const secondDate = mungedEvents[6]["2019-02-07"];
    const thirdDate = mungedEvents[6]["2019-03-07"];

    expect(firstDate).toHaveProperty("column_1");
    expect(secondDate).toHaveProperty("column_1");
    expect(secondDate).toHaveProperty("column_2");
    expect(secondDate).toHaveProperty("column_3");
    expect(thirdDate).toHaveProperty("column_1");
  });

  it("has new keys needed for calendar", () => {
    const mungedEvents = getMungedEvents({
      events: eventsMocked,
      stepMinutes: 30
    });

    const event = mungedEvents[5]["2019-01-02"]["column_1"][0];

    expect(event).toHaveProperty("top");
    expect(event).toHaveProperty("height");
  });
});
