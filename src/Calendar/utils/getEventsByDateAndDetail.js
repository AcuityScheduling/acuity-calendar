import get from "lodash/get";
import { getMinutesSinceMidnight } from "../components/CalendarViews/CalendarDaysView/utils";
import { STEP_HEIGHTS } from "../components/CalendarViews/CalendarDaysView/constants";

export const getEventDetails = ({ event, stepMinutes }) => {
  const detailedEvent = Object.assign({}, event);

  const stepHeight = STEP_HEIGHTS[stepMinutes];
  const pixelsPerMinute = stepHeight / stepMinutes;

  const minutesSinceMidnight = getMinutesSinceMidnight(event.start);
  const duration = event.end.clone().diff(event.start, "minutes");

  detailedEvent.height = duration * pixelsPerMinute;
  detailedEvent.top = minutesSinceMidnight * pixelsPerMinute;
  return detailedEvent;
};

/**
 * Get all the events keyed by date for easy lookup - and add some
 * details that are needed when displaying - we're doing it all here
 * so we don't have to do more than one loop
 *
 * @param {Object[]} events
 * @returns {Object}
 */
const getEventsByDateAndDetails = ({ events, stepMinutes }) => {
  return events.reduce((eventsByDate, event) => {
    eventsByDate[event.start.format("YYYY-MM-DD")] = [
      ...get(eventsByDate, event.start.format("YYYY-MM-DD"), []),
      getEventDetails({ event, stepMinutes })
    ];
    return eventsByDate;
  }, {});
};

export default getEventsByDateAndDetails;
