/**
 * This function handles all of the custom event pagination that has to happen with navigating through
 * the calendar
 */
import { useState } from 'react';
import moment from 'moment';

const useFetchEvents = ({
  cursorDate,
  monthPadding = 1,
  currentFullRange = null,
}) => {
  const actualFullRange = currentFullRange
    ? currentFullRange
    : {
        start: moment()
          .subtract(monthPadding, 'months')
          .startOf('month'),
        end: moment()
          .add(monthPadding, 'months')
          .endOf('month'),
      };
  const [fullRange, setFullRange] = useState(actualFullRange);
  return {
    fetchMore: onFetchEvents => {
      fetchMore({
        cursorDate,
        monthPadding,
        fullRange,
        setFullRange,
        onFetchEvents,
      });
    },
    fullRange,
  };
};

const fetchMore = ({
  cursorDate,
  fullRange,
  onFetchEvents,
  monthPadding,
  onResetRange,
  setFullRange,
}) => {
  const selectedDate = moment(new Date(cursorDate));
  const { start, end } = fullRange;

  const adjustedRanges = getNewRanges({
    selectedDate,
    startDate: moment(new Date(start)),
    endDate: moment(new Date(end)),
    monthPadding,
  });

  const shouldExtendRange = !!adjustedRanges.fullRange;
  if (shouldExtendRange) {
    setFullRange({
      start: new Date(adjustedRanges.fullRange.start),
      end: new Date(adjustedRanges.fullRange.end),
    });
    const finalRanges = {
      fetchMoreRange: {
        start: new Date(adjustedRanges.fetchMoreRange.start),
        end: new Date(adjustedRanges.fetchMoreRange.end),
      },
      fullRange: {
        start: new Date(adjustedRanges.fullRange.start),
        end: new Date(adjustedRanges.fullRange.end),
      },
    };
    return onFetchEvents(finalRanges);
  }

  //  If there is no fetchMoreRange that means the user navigated far outside our current
  //  range. So we can't just extend the range by our month padding. In this case we want
  //  to actually restart our initial range with where they navigated to
  if (shouldResetRange({ selectedDate, startDate: start, endDate: end })) {
    const outsideRange = getNewRangeOutsideRange({
      selectedDate,
      monthPadding,
    });
    setFullRange({
      start: new Date(outsideRange.start),
      end: new Date(outsideRange.end),
    });
    const finalRanges = {
      fetchMoreRange: {
        start: null,
        end: null,
      },
      fullRange: {
        start: new Date(outsideRange.start),
        end: new Date(outsideRange.end),
      },
    };
    return onResetRange({ ...finalRanges, resetRange: true });
  }

  // If we don't want to fetch any more events do nothing
  return null;
};

/**
 * Get the range of the event query variables depending on if the
 * selected date is inside or outside of our full range. An example of
 * A range is we're pulling events from Oct 1, 2018 - Jan 31 2018. Those two
 * dates consist of our range. If the user navigates to January 1st in the calendar
 * we would want to extend our range out an extra month and the end would change to Feb 28
 *
 * This function returns both the fullRange in this case of Oct 1, 2018 - Feb 28, 2018
 * AND the fetchMoreRange of Jan 31 2018 - Feb 28 2018. The fetchMore function will just use
 * the fetchMore range. But the full range will be used in the future to know whether or
 * not we need to extend the range based on the selected date
 *
 * @param {Object} params
 * @param {moment} params.selectedDate
 * @param {Object} params.startDate - Current full range start date
 * @param {Object} params.endDate - Current full range end date
 * @param {number} params.monthPadding
 */
export const getNewRanges = ({
  selectedDate,
  startDate,
  endDate,
  monthPadding,
}) => {
  let ranges = { fetchMoreRange: false, fullRange: false };

  if (shouldExtendStart({ selectedDate, startDate, monthPadding })) {
    ranges = getExtendedStartRange({
      startDate,
      endDate,
      monthPadding,
    });
  }
  if (shouldExtendEnd({ selectedDate, endDate, monthPadding })) {
    ranges = getExtendedEndRange({ startDate, endDate, monthPadding });
  }
  return ranges;
};

const shouldExtendStart = ({ selectedDate, startDate, monthPadding }) =>
  selectedDate.isBefore(startDate.clone().add(monthPadding, 'months')) &&
  selectedDate.isAfter(startDate);

/**
 * Get new variables if we need to extend the start date out - get the full range
 * of variables and the fetch more range
 */
const getExtendedStartRange = ({ startDate, endDate, monthPadding }) => {
  const fetchMoreRange = {
    start: startDate
      .clone()
      .subtract(monthPadding, 'months')
      .subtract(1, 'milliseconds'),
    end: startDate,
  };
  let fullRange = false;
  if (fetchMoreRange) {
    fullRange = {
      start: fetchMoreRange.start,
      end: endDate,
    };
  }
  return { fetchMoreRange, fullRange };
};

const shouldExtendEnd = ({ selectedDate, endDate, monthPadding }) =>
  selectedDate.isAfter(endDate.clone().subtract(monthPadding, 'months')) &&
  selectedDate.isBefore(endDate);

/**
 * Get new variables if we need to extend the end date out - get the full range
 * of variables and the fetch more range
 */
const getExtendedEndRange = ({ startDate, endDate, monthPadding }) => {
  const fetchMoreRange = {
    start: endDate,
    end: endDate
      .clone()
      .startOf('month')
      .add(monthPadding, 'months')
      .add(1, 'milliseconds')
      .endOf('month'),
  };
  let fullRange = false;
  if (fetchMoreRange) {
    fullRange = {
      start: startDate,
      end: fetchMoreRange.end,
    };
  }
  return { fetchMoreRange, fullRange };
};

const shouldResetRange = ({ selectedDate, startDate, endDate }) =>
  selectedDate.isBefore(startDate) || selectedDate.isAfter(endDate);

// If the selected date IS NOT within the start and end date then
// Set the new range to be like the initial plus and minus start and end by
// month padding
export const getNewRangeOutsideRange = ({ selectedDate, monthPadding }) => {
  const newStart = selectedDate
    .clone()
    .subtract(monthPadding, 'months')
    .startOf('month');
  const newEnd = selectedDate
    .clone()
    .add(monthPadding, 'months')
    .endOf('month');
  return {
    start: newStart,
    end: newEnd,
  };
};

export default useFetchEvents;
