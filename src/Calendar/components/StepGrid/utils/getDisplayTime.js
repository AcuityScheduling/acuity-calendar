/**
 * Get the display time for an event.
 *
 * @param {Object} event - The event we're displaying time for
 */
const getDisplayTime = ({ start, end }) => {
  let startMinutes = `:${start.format('mm')}`;
  if (startMinutes === ':00') {
    startMinutes = '';
  }
  let startMeridiem = '';
  if (start.format('a') !== end.format('a')) {
    startMeridiem = start.format('a');
  }
  const newStart = `${start.format('h')}${startMinutes}${startMeridiem}`;

  let endMinutes = `:${end.format('mm')}`;
  if (endMinutes === ':00') {
    endMinutes = '';
  }

  const newEnd = `${end.format('h')}${endMinutes}${end.format('a')}`;

  return `${newStart} - ${newEnd}`;
};

export default getDisplayTime;
