import { STEP_BORDER_WIDTH, STEP_HEIGHTS } from '../../../constants';

/**
 * Get the height of the total amount of select minutues
 *
 * @param {Object} params
 * @param {5|10|15|20|30|60} stepMinutes
 * @param {5|10|15|20|30|60} selectMinutes
 */
const getSelectMinutesHeight = ({ stepMinutes, selectMinutes, stepHeight }) => {
  const selectMinutesRatio = stepMinutes / selectMinutes;
  const blockMinutesRatio = 60 / selectMinutes;
  const selectMinutesHeight =
    (stepHeight || STEP_HEIGHTS[stepMinutes]) / selectMinutesRatio +
    STEP_BORDER_WIDTH / blockMinutesRatio;

  return selectMinutesHeight;
};

export default getSelectMinutesHeight;
