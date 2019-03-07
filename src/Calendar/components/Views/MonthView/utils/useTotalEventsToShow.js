import get from 'lodash/get';
import { useRef, useState, useEffect } from 'react';

const useTotalEventsToShow = () => {
  const rowRef = useRef(null);
  const eventRef = useRef(null);
  const eventWrapperRef = useRef(null);
  const [rowHeight, setRowHeight] = useState(0);
  const [eventHeight, setEventHeight] = useState(0);
  const [eventWrapperMargin, setEventWrapperMargin] = useState(0);

  if (eventRef.current) {
    const currentEventHeight = eventRef.current.offsetHeight;
    if (currentEventHeight !== eventHeight) {
      setEventHeight(currentEventHeight);
    }
  }

  // Get the height for the row
  useEffect(() => {
    const newHeight = get(rowRef, 'current.offsetHeight', 0);
    setRowHeight(newHeight);
  }, [get(rowRef, 'current.offsetHeight', 0)]);

  // Get the margin above all of the events
  useEffect(() => {
    const newMargin = get(eventWrapperRef, 'current.offsetTop', 0);
    setEventWrapperMargin(newMargin);
  }, [get(eventWrapperRef, 'current.offsetTop', 0)]);

  const totalEventsToShow =
    eventHeight > 0 &&
    Math.floor((rowHeight - eventWrapperMargin) / eventHeight) - 1;

  return {
    rowRef,
    eventRef,
    eventWrapperRef,
    totalEventsToShow,
  };
};

export default useTotalEventsToShow;
