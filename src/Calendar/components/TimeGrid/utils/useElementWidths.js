import { useRef, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { addListener, removeListener } from 'resize-detector';
import throttle from 'lodash.throttle';

/**
 * Create the ref Map for all the elements and get the widths
 * of said elements when the refs have propagated
 */
const useElementWidths = props => {
  const elementRefs = useRef(new Map()).current;
  const TimeGridRef = useRef(null);
  const [elementWidths, setElementWidths] = useState([]);

  const getElementsMeasurements = () => {
    const widths = [];
    elementRefs.forEach((element, day) => {
      widths.push(element.offsetWidth);
    });
    return widths;
  };

  const setAllWidths = () => {
    if (!isEqual(getElementsMeasurements(), elementWidths)) {
      setElementWidths(getElementsMeasurements());
    }
  };

  const resizable = throttle(() => {
    setAllWidths();
  }, 300);

  useEffect(() => {
    if (TimeGridRef.current) {
      addListener(TimeGridRef.current, resizable);
    }
    setAllWidths();
    return () => {
      removeListener(TimeGridRef.current, resizable);
    };
  });

  // A function used to assign to the element for multiple refs
  // used like this ref={assignRef(key)}
  const assignRef = key => inst =>
    inst === null ? elementRefs.delete() : elementRefs.set(key, inst);

  return {
    TimeGridRef,
    elementWidths,
    assignRef,
  };
};

export default useElementWidths;
