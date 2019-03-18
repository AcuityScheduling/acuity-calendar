import { useRef, useEffect, useState } from 'react';
import get from 'lodash.get';
import throttle from 'lodash.throttle';
import { addListener, removeListener } from 'resize-detector';

const useCalendarSticky = totalWidth => {
  const wrapperRef = useRef(null);
  const timeGutterRef = useRef(null);
  const headerRef = useRef(null);
  const cornerRef = useRef(null);
  const timeIndicatorRef = useRef(null);
  const stepLinesRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const onScroll = getOnScroll({
    wrapperRef,
    headerRef,
    timeGutterRef,
    cornerRef,
    timeIndicatorRef,
    stepLinesRef,
    timeIndicatorWidth: totalWidth,
  });

  // Make sure stepLines and time indicator are the full width of the scroll
  if (
    timeIndicatorRef.current &&
    wrapperRef.current &&
    stepLinesRef.current &&
    timeGutterRef.current
  ) {
    timeIndicatorRef.current.style.width = `${totalWidth}px`;

    stepLinesRef.current.style.left = `${timeGutterRef.current.offsetWidth}px`;
    stepLinesRef.current.style.width = `${totalWidth}px`;
  }

  const wrapperWidthThrottled = throttle(() => {
    setWrapperWidth(get(wrapperRef, 'current.clientWidth'));
  }, 300);

  // Add listener to wrapper to update when needed
  useEffect(() => {
    if (!wrapperWidth) {
      setWrapperWidth(get(wrapperRef, 'current.clientWidth'));
    }

    if (wrapperRef.current) {
      addListener(wrapperRef.current, wrapperWidthThrottled);
    }
    return () => removeListener(wrapperRef.current, wrapperWidthThrottled);
  });

  useEffect(() => {
    wrapperRef.current.addEventListener('scroll', onScroll, false);

    return () => {
      wrapperRef.current.removeEventListener('scroll', onScroll, false);
    };
  });

  return {
    wrapperRef,
    timeGutterRef,
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
  timeGutterRef,
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
  timeGutterRef.current.style.transform = `translateX(${latestKnownScrollX}px)`;

  // Make sure the time indicator stays in the right place while scrolling horiz
  timeIndicatorRef.current.style.transform = `translateX(${latestKnownScrollX}px)`;
  if (timeIndicatorWidth) {
    timeIndicatorRef.current.style.width = `${timeIndicatorWidth -
      latestKnownScrollX}px`;
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
