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
    headerRef,
    timeColumnRef,
    cornerRef,
    timeIndicatorRef,
    stepLinesRef
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
