/**
 * The base height used to calculate all the other heights
 * this was really trial and error. Making this bigger or smaller
 * will make every other size for the stepMinutes bigger and smaller
 */
const timeBlockBaseHeight = 50;

const getStepHeight = stepMinutes => {
  const totalSteps = 60 / stepMinutes;
  const evenDivision = timeBlockBaseHeight / totalSteps;
  const addedDivision =
    evenDivision + totalSteps * (timeBlockBaseHeight / 3 / totalSteps);
  return (addedDivision * totalSteps) / totalSteps;
};

export default getStepHeight;
