/**
 * The events must be sorted by start time for the rest of the logic to work
 *
 * @param {Object[]} events
 */
const getSortedEvents = events => {
  return events.sort((a, b) => {
    if (a.start.isAfter(b.start)) return 1;
    if (a.start.isBefore(b.start)) return -1;
    return 0;
  });
};

export default getSortedEvents;
