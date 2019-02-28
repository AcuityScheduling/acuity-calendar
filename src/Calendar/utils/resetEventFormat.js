/**
 * After events have been munged, moments were added to dates and height
 * and top were added. It would be easier if we were able to remove all that extra stuff
 * that's what this function is for
 *
 * @param {Object} event
 */
const resetEventFormat = event => {
  const newEvent = { ...event };
  delete newEvent.height;
  delete newEvent.top;
  newEvent.start = new Date(event.start.format('YYYY-MM-DD HH:mm:ss'));
  newEvent.end = new Date(event.end.format('YYYY-MM-DD HH:mm:ss'));
  return newEvent;
};

export default resetEventFormat;
