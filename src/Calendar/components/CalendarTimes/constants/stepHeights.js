/**
 * The height of steps at each "stepMinutes" range in pixels. The total height of the
 * block gets slightly bigger at each step. 5 is minutes per step, 10 is 10 minutes per
 * step etc. Prolly overengineered as we prolly won't use more than 30
 */
const STEP_HEIGHTS = {
  5: 22,
  10: 27,
  15: 31,
  20: 34,
  30: 42,
  60: 65
};

export default STEP_HEIGHTS;
