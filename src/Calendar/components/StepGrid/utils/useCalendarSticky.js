import { useRef, useEffect } from "react";
import getOnScroll from "./getOnScroll";

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
    timeIndicatorWidth
  });

  // Make sure stepLines and time indicator are the full width of the scroll
  useEffect(() => {
    if (
      timeIndicatorRef.current &&
      wrapperRef.current &&
      stepLinesRef.current
    ) {
      wrapperRef.current.scrollLeft = 0;
      timeIndicatorRef.current.style.width = "100%";
      stepLinesRef.current.style.width = "100%";

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
    wrapperRef.current.addEventListener("scroll", onScroll, false);

    return () => {
      wrapperRef.current.removeEventListener("scroll", onScroll, false);
    };
  });

  return {
    wrapperRef,
    timeColumnRef,
    headerRef,
    cornerRef,
    timeIndicatorRef,
    stepLinesRef
  };
};

export default useCalendarSticky;
