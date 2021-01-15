import throttle from 'lodash.throttle';
import { useRef, useState, useEffect } from 'react';
import { addListener, removeListener } from 'resize-detector';

const useTotalEventsToShow = () => {
  const rowRef = useRef(null);
  const eventRef = useRef(null);
  const eventWrapperRef = useRef(null);
  const cellRef = useRef(null);
  const [rowHeight, setRowHeight] = useState(0);
  const [cellWidth, setCellWidth] = useState(0);
  const [eventHeight, setEventHeight] = useState(0);
  const [eventWrapperMargin, setEventWrapperMargin] = useState(0);
  // We need to start with showing at least one event so we can get the event height
  // even if there are no events show right away
  const [totalEventsToShow, setTotalEventsToShow] = useState(0);

  useEffect(() => {
    if (eventRef.current) {
      const currentEventHeight = eventRef.current.offsetHeight;
      if (currentEventHeight !== eventHeight) {
        setEventHeight(currentEventHeight);
      }
    }
  }, [eventHeight]);

  useEffect(() => {
    const rowHeightThrottled = throttle(() => {
      setRowHeight(rowRef?.current?.offsetHeight || 0);
      setCellWidth(rowRef?.current?.offsetWidth || 0);
    }, 300);

    const currentRowRef = rowRef.current;
    if (currentRowRef) {
      setRowHeight(currentRowRef.offsetHeight);
      setCellWidth(cellRef.current.offsetWidth);
      addListener(currentRowRef, rowHeightThrottled);
    }
    return () => {
      if (currentRowRef) {
        return removeListener(currentRowRef, rowHeightThrottled);
      }
    };
  }, []);

  useEffect(() => {
    if (eventHeight > 0) {
      setTotalEventsToShow(
        Math.floor((rowHeight - eventWrapperMargin) / eventHeight) - 1
      );
    }
  }, [rowHeight, eventHeight, eventWrapperMargin]);

  // Get the margin above all of the events
  useEffect(() => {
    setEventWrapperMargin(eventWrapperRef?.current?.offsetTop || 0);
  }, [eventWrapperRef?.current?.offsetTop]);

  return {
    rowRef,
    eventRef,
    eventHeight,
    eventWrapperRef,
    eventWrapperMargin,
    cellRef,
    cellDimensions: { width: cellWidth, height: rowHeight },
    totalEventsToShow,
  };
};

export default useTotalEventsToShow;
