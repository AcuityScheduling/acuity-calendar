/**
 * Get the display time for an event.
 *
 * @param {Object} event - The event we're displaying time for
 */
const getDisplayTime = event => {
  let startMinutes = `:${event.start.format("mm")}`;
  if (startMinutes === ":00") {
    startMinutes = "";
  }
  let startMeridiem = "";
  if (event.start.format("a") !== event.end.format("a")) {
    startMeridiem = event.start.format("a");
  }
  const start = `${event.start.format("h")}${startMinutes}${startMeridiem}`;

  let endMinutes = `:${event.end.format("mm")}`;
  if (endMinutes === ":00") {
    endMinutes = "";
  }

  const end = `${event.end.format("h")}${startMinutes}${event.end.format("a")}`;

  return `${start} - ${end}`;
};

export default getDisplayTime;
