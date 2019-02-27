import getMinutesSinceMidnight from './getMinutesSinceMidnight';
import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from '../constants';

const getTopOffset = ({ stepMinutes, date }) => {
  const stepHeight = STEP_HEIGHTS[stepMinutes];
  const pixelsPerMinute = stepHeight / stepMinutes;

  const minutesSinceMidnight = getMinutesSinceMidnight(date);

  return (
    minutesSinceMidnight * pixelsPerMinute + date.hour() * STEP_BORDER_WIDTH
  );
};

export default getTopOffset;
