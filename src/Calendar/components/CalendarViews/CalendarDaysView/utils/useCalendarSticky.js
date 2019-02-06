import { useRef, useEffect } from "react";
import getOnScroll from "./getOnScroll";

const useCalendarSticky = () => {
  const wrapperRef = useRef(null);
  const timeColumnRef = useRef(null);
  const daysHeaderRef = useRef(null);
  const cornerRef = useRef(null);
  const timeIndicatorRef = useRef(null);

  const onScroll = getOnScroll({
    daysHeaderRef,
    timeColumnRef,
    cornerRef,
    timeIndicatorRef
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
    daysHeaderRef,
    cornerRef,
    timeIndicatorRef
  };
};

export default useCalendarSticky;
