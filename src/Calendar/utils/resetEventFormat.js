/**
 * After events have been munged, moments were added to dates and height
 * and top were added. When we send back events to the top level we want all
 * of that info to be hidden from the consumer. They shouldn't care about it right?
 * that's what this function is for
 *
 * @param {Object} event
 */
const resetEventFormat = event => {
  const newEvent = { ...event };
  delete newEvent.height;
  delete newEvent.top;
  delete newEvent.paddingTopHeight;
  delete newEvent.paddingBottomHeight;
  newEvent.start = new Date(event.start);
  newEvent.end = new Date(event.end);
  if (newEvent.paddingTopStart) {
    newEvent.paddingTopStart = new Date(event.paddingTopStart);
  }
  if (newEvent.paddingBottomEnd) {
    newEvent.paddingBottomEnd = new Date(event.paddingBottomEnd);
  }
  console.log('newEvent: ', newEvent);
  return newEvent;
};

export default resetEventFormat;
