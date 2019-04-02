import makeClass from '../../utils/makeClass';

/**
 * The height of steps at each "stepMinutes" range in pixels. The total height of the
 * block gets slightly bigger at each step. 5 is minutes per step, 10 is 10 minutes per
 * step etc. Prolly overengineered as we prolly won't use more than 30
 */
export const STEP_HEIGHTS = {
  5: 22,
  10: 27,
  15: 31,
  20: 34,
  30: 42,
  60: 65,
};
export const STEP_BORDER_WIDTH = 1;
export const handleCenterClass = makeClass('time-grid__event-handle-center');
export const extendHandleClass = makeClass('time-grid__event-handle');
