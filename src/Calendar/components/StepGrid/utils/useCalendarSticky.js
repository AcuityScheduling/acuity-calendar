import { useRef, useEffect } from "react";
import getOnScroll from "./getOnScroll";

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
    stepLinesRef
  });

  useEffect(() => {
    wrapperRef.current.addEventListener("scroll", onScroll, false);
    if (timeIndicatorRef.current && wrapperRef.current) {
      timeIndicatorRef.current.style.width = "100%";
      stepLinesRef.current.style.width = "100%";

      const scrollWidth = wrapperRef.current.scrollWidth;
      console.log("scrollWidth: ", scrollWidth);
      timeIndicatorRef.current.style.width = `${wrapperRef.current.scrollWidth -
        51}px`;
    }

    if (stepLinesRef.current && wrapperRef.current) {
      stepLinesRef.current.style.width = `${wrapperRef.current.scrollWidth}px`;
    }
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
