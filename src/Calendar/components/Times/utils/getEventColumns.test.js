import getEventColumns from "./getEventColumns";
import { eventsMocked } from "../../../utils";
import {
  getMungedEvents,
  getEventsWithSelectedCalendars
} from "../../../utils";

describe("Add column numbers to events", () => {
  it("has column keys and correct events in each column", () => {
    const mungedEvents = getMungedEvents({
      events: eventsMocked,
      stepMinutes: 30
    });

    const eventsWithSelectedCalendars = getEventsWithSelectedCalendars({
      mungedEvents,
      selectedCalendars: [5, 6]
    });

    const eventsWithColumn = getEventColumns(
      eventsWithSelectedCalendars["2019-02-12"]
    );

    expect(eventsWithColumn).toHaveProperty("1");
    expect(eventsWithColumn).toHaveProperty("2");
    expect(eventsWithColumn).toHaveProperty("3");
    expect(eventsWithColumn[1].length).toEqual(2);
  });
});
