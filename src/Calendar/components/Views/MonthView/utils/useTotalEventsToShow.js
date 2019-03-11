import get from 'lodash/get';
import throttle from 'lodash/throttle';
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
  const [totalEventsToShow, setTotalEventsToShow] = useState(0);

  if (eventRef.current) {
    const currentEventHeight = eventRef.current.offsetHeight;
    if (currentEventHeight !== eventHeight) {
      setEventHeight(currentEventHeight);
    }
  }

  const rowHeightThrottled = throttle(() => {
    setRowHeight(get(rowRef, 'current.offsetHeight', 0));
    setCellWidth(get(rowRef, 'current.offsetWidth', 0));
  }, 300);

  useEffect(() => {
    if (rowRef.current) {
      setRowHeight(rowRef.current.offsetHeight);
      setCellWidth(cellRef.current.offsetWidth);
      addListener(rowRef.current, rowHeightThrottled);
    }
    return () => removeListener(rowRef.current, rowHeightThrottled);
  });

  useEffect(() => {
    if (eventHeight > 0) {
      setTotalEventsToShow(
        Math.floor((rowHeight - eventWrapperMargin) / eventHeight) - 1
      );
    }
  }, [rowHeight]);

  // Get the margin above all of the events
  useEffect(() => {
    const newMargin = get(eventWrapperRef, 'current.offsetTop', 0);
    setEventWrapperMargin(newMargin);
  }, [get(eventWrapperRef, 'current.offsetTop', 0)]);

  return {
    rowRef,
    eventRef,
    eventWrapperRef,
    eventWrapperMargin,
    cellRef,
    cellDimensions: { width: cellWidth, height: rowHeight },
    totalEventsToShow,
  };
};

export default useTotalEventsToShow;
