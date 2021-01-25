import throttle from 'lodash.throttle';
import { useState, useEffect, useCallback } from 'react';
import { addListener, removeListener } from 'resize-detector';

const useTotalEventsToShow = () => {
  const [rowNode, setRowNode] = useState(null);
  const [rowHeight, setRowHeight] = useState(0);
  const [cellWidth, setCellWidth] = useState(0);
  const [eventHeight, setEventHeight] = useState(0);
  const [eventWrapperMargin, setEventWrapperMargin] = useState(0);
  // We need to start with showing at least one event so we can get the event height
  // even if there are no events show right away
  const [totalEventsToShow, setTotalEventsToShow] = useState(0);

  /**
   * Using callbacks instead of refs as detailed here:
   * https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
   */
  const eventRef = useCallback(node => {
    if (node !== null) setEventHeight(node.offsetHeight);
  }, []);

  const rowRef = useCallback(node => {
    if (node !== null) {
      setRowNode(node);
      setRowHeight(node.offsetHeight);
    }
  }, []);

  const cellRef = useCallback(node => {
    if (node !== null) setCellWidth(node.offsetWidth);
  }, []);

  const eventWrapperRef = useCallback(node => {
    if (node !== null) setEventWrapperMargin(node.offsetTop || 0);
  }, []);

  useEffect(() => {
    const rowHeightThrottled = throttle(() => {
      setRowHeight(rowNode.offsetHeight || 0);
      setCellWidth(rowNode.offsetWidth || 0);
    }, 300);

    if (rowNode) addListener(rowNode, rowHeightThrottled);

    return () => {
      if (rowNode) removeListener(rowNode, rowHeightThrottled);
    };
  }, [rowNode]);

  useEffect(() => {
    if (eventHeight > 0) {
      setTotalEventsToShow(
        Math.floor((rowHeight - eventWrapperMargin) / eventHeight) - 1
      );
    }
  }, [rowHeight, eventHeight, eventWrapperMargin]);

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
