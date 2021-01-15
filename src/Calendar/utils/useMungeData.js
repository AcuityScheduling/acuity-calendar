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
    [events, stepMinutes, stepHeight, withColumns]
  );

  const eventsWithSelectedEventGroups = useMemo(
    () =>
      getEventsWithEventGroups({
        mungedEvents,
        visibleEventGroups,
      }),
    [mungedEvents, visibleEventGroups]
  );

  const mungedStepDetails = useMemo(
    () =>
      stepDetails &&
      getMungedEvents({
        events: stepDetails,
        stepMinutes,
        stepHeight,
        withColumns,
      }),
    [stepDetails, stepMinutes, stepHeight, withColumns]
  );

  const mungedStepDetailsGroups = useMemo(
    () =>
      stepDetails &&
      getEventsWithEventGroups({
        mungedEvents: mungedStepDetails,
        visibleEventGroups,
      }),
    [stepDetails, mungedStepDetails, visibleEventGroups]
  );

  return {
    mungedEvents,
    eventsWithSelectedEventGroups,
    ...(stepDetails && { mungedStepDetails, mungedStepDetailsGroups }),
  };
};

export default useMungeData;
