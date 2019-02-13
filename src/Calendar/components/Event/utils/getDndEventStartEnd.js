/**
 * Get a new start and end depending on where the event has been dragged to
 *
 * @param {Object} params
 * @param {Object} params.event
 * @param {Object} params.deltaPosition - An object with x/y telling how far the event moved
 * @param {number} params.selectMinutesHeight - the height of one movement on grid
 * @param {number} params.selectMinutes - The amount of minutes of one movement on grid
 */
const getDndEventStartEnd = ({
  event,
  deltaPosition,
  selectMinutesHeight,
  selectMinutes
}) => {
  let start = event.start.clone();
  let end = event.end.clone();
  if (deltaPosition.y !== 0) {
    const totalPositionMoves = deltaPosition.y / selectMinutesHeight;
    const totalMinutes = totalPositionMoves * selectMinutes;

    start.add(totalMinutes, "minutes");
    end.add(totalMinutes, "minutes");
  }
  return {
    start,
    end
  };
};

export default getDndEventStartEnd;
