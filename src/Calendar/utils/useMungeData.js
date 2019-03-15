import { useMemo } from 'react';
import getMungedEvents from './getMungedEvents';
import getEventsWithEventGroups from './getEventsWithEventGroups';

const useMungeData = ({
  events,
  stepMinutes,
  stepHeight,
  visibleEventGroups,
  stepDetails,
}) => {
  const mungedEvents = useMemo(
    () => getMungedEvents({ events, stepMinutes, stepHeight }),
    [events, stepMinutes]
  );

  const eventsWithSelectedEventGroups = useMemo(
    () =>
      getEventsWithEventGroups({
        mungedEvents,
        visibleEventGroups,
      }),
    [mungedEvents, visibleEventGroups]
  );

  if (!stepDetails) {
    return {
      mungedEvents: eventsWithSelectedEventGroups,
    };
  }

  const mungedStepDetails = useMemo(
    () => getMungedEvents({ events: stepDetails, stepMinutes, stepHeight }),
    [stepDetails, stepMinutes]
  );

  const mungedStepDetailsGroups = useMemo(
    () =>
      getEventsWithEventGroups({
        mungedEvents: mungedStepDetails,
        visibleEventGroups,
      }),
    [mungedStepDetails, visibleEventGroups]
  );

  return {
    mungedEvents,
    eventsWithSelectedEventGroups,
    mungedStepDetails,
    mungedStepDetailsGroups,
  };
};

export default useMungeData;
