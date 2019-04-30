import { STEP_HEIGHTS, STEP_BORDER_WIDTH } from '../constants';

const getClickedTime = ({
  stepMinutes,
  selectMinutes,
  columnDate,
  stepHeight,
}) => e => {
  const rect = e.currentTarget.getBoundingClientRect();
  const verticalClick = e.clientY - rect.top;

  const totalStepsPerHour = 60 / stepMinutes;
  const pixelsPerMinute =
    ((stepHeight || STEP_HEIGHTS[stepMinutes]) +
      STEP_BORDER_WIDTH / totalStepsPerHour) /
    stepMinutes;
  const minutesFromMidnight = verticalClick / pixelsPerMinute;
  const selectedTime = columnDate
    .clone()
    .startOf('day')
    .add(minutesFromMidnight, 'minutes');

  const rounded =
    Math.round(selectedTime.clone().minute() / selectMinutes) * selectMinutes;

  return selectedTime
    .clone()
    .minute(rounded)
    .second(0);
};

export default getClickedTime;
