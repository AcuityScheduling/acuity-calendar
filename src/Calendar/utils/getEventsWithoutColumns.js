/**
 * Events come in keyed by column for day/week view. We should be able to remove those
 * columns. This will remove the columns when necessary
 *
 * @param {array} eventsByColumn - these events must be WITHOUT the calendar id
 */
const getEventsWithoutColumns = eventsByColumn => {
  return Object.keys(eventsByColumn).reduce((eventsNoColumns, columnKey) => {
    return [...eventsNoColumns, ...eventsByColumn[columnKey]];
  }, []);
};

export default getEventsWithoutColumns;
