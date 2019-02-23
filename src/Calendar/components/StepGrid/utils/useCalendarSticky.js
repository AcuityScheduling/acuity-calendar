import { useRef, useEffect } from 'react';

let timeIndicatorWidth = 0;
let stepLinesWidth = 0;

const useCalendarSticky = () => {
  const wrapperRef = useRef(null);
  const timeColumnRef = useRef(null);
  const headerRef = useRef(null);
  const cornerRef = useRef(null);
  const timeIndicatorRef = useRef(null);
  const stepLinesRef = useRef(null);

  const onScroll = getOnScroll({
    wrapperRef,
    headerRef,
    timeColumnRef,
    cornerRef,
    timeIndicatorRef,
    stepLinesRef,
    timeIndicatorWidth,
  });

  // Make sure stepLines and time indicator are the full width of the scroll
  useEffect(() => {
    if (
      timeIndicatorRef.current &&
      wrapperRef.current &&
      stepLinesRef.current
    ) {
      wrapperRef.current.scrollLeft = 0;
      timeIndicatorRef.current.style.width = '100%';
      stepLinesRef.current.style.width = '100%';

      // We have to wait for the width to be set to 100% before
      // we can do more calculations
      const timeout = setTimeout(() => {
        timeIndicatorWidth = wrapperRef.current.clientWidth - 51;
        stepLinesWidth = wrapperRef.current.scrollWidth;
        timeIndicatorRef.current.style.width = `${timeIndicatorWidth}px`;
        stepLinesRef.current.style.width = `${stepLinesWidth}px`;
      });

      return () => clearTimeout(timeout);
    }
  });

  useEffect(() => {
    wrapperRef.current.addEventListener('scroll', onScroll, false);

    return () => {
      wrapperRef.current.removeEventListener('scroll', onScroll, false);
    };
  });

  return {
    wrapperRef,
    timeColumnRef,
    headerRef,
    cornerRef,
    timeIndicatorRef,
    stepLinesRef,
  };
};

/**
 * This uses requestAnimationFrame for performance. There seems
 * to be a real difference between using this code and just a normal event listener for
 * scroll. Not gonna lie I didn't really profile it, it was just perception at 6x slowdown
 * in the browser
 */

let latestKnownScrollX = 0;
let ticking = false;

const update = ({
  headerRef,
  timeColumnRef,
  cornerRef,
  timeIndicatorRef,
  stepLinesRef,
  wrapperRef,
  timeIndicatorWidth,
}) => () => {
  // reset the tick so we can
  // capture the next onScroll
  ticking = false;

  headerRef.current.style.transform = `translateX(-${latestKnownScrollX}px)`;
  timeColumnRef.current.style.transform = `translateX(${latestKnownScrollX}px)`;

  // Make sure the time indicator stays in the right place while scrolling horiz
  timeIndicatorRef.current.style.transform = `translateX(${latestKnownScrollX}px)`;
  if (timeIndicatorWidth) {
    timeIndicatorRef.current.style.width = `${timeIndicatorWidth}px`;
  }
};

const getOnScroll = elements => e => {
  latestKnownScrollX = e.target.scrollLeft;
  requestTick(elements);
};

const requestTick = elements => {
  if (!ticking) {
    requestAnimationFrame(update(elements));
  }
  ticking = true;
};

export default useCalendarSticky;
