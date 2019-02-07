/**
 * Events come in keyed by column for day/week view. We should be able to remove those
 * columns. This will remove the columns when necessary
 *
 * @param {array} eventsByColumn - these events must be with a column as a key
 */
const getEventsWithoutColumns = eventsByColumn => {
  return Object.keys(eventsByColumn).reduce((eventsNoColumns, columnKey) => {
    return Object.assign(eventsNoColumns, eventsByColumn[columnKey]);
  }, {});
};

export default getEventsWithoutColumns;
