import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from '../constants';

const getTopOffset = ({ stepMinutes, date }) => {
  const stepHeight = STEP_HEIGHTS[stepMinutes];
  const pixelsPerMinute = stepHeight / stepMinutes;

  const minutesSinceMidnight = getMinutesSinceMidnight(date);

  return (
    minutesSinceMidnight * pixelsPerMinute + date.hour() * STEP_BORDER_WIDTH
  );
};

const getMinutesSinceMidnight = start => {
  const hour = start.get('hour');
  const minute = start.get('minute');
  return hour * 60 + minute;
};

export default getTopOffset;
