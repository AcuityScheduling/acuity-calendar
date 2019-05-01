import { useMemo } from 'react';
import getMungedEvents from './getMungedEvents';
import getEventsWithEventGroups from './getEventsWithEventGroups';

const useMungeData = ({
  events,
  stepMinutes,
  stepHeight,
  visibleEventGroups,
  stepDetails,
  withColumns = true,
}) => {
  const mungedEvents = useMemo(
    () => getMungedEvents({ events, stepMinutes, stepHeight, withColumns }),
    [events, stepMinutes, stepHeight]
  );

  const eventsWithSelectedEventGroups = useMemo(
    () =>
      getEventsWithEventGroups({
        mungedEvents,
        visibleEventGroups,
      }),
    [mungedEvents, visibleEventGroups, stepHeight]
  );

  if (!stepDetails) {
    return {
      mungedEvents,
      eventsWithSelectedEventGroups,
    };
  }

  const mungedStepDetails = useMemo(
    () =>
      getMungedEvents({
        events: stepDetails,
        stepMinutes,
        stepHeight,
        withColumns,
      }),
    [stepDetails, stepMinutes, stepHeight]
  );

  const mungedStepDetailsGroups = useMemo(
    () =>
      getEventsWithEventGroups({
        mungedEvents: mungedStepDetails,
        visibleEventGroups,
      }),
    [mungedStepDetails, visibleEventGroups, stepHeight]
  );

  return {
    mungedEvents,
    eventsWithSelectedEventGroups,
    mungedStepDetails,
    mungedStepDetailsGroups,
  };
};

export default useMungeData;
