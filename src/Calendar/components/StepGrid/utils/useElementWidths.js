import { useRef, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { addListener, removeListener } from 'resize-detector';

/**
 * Create the ref Map for all the elements and get the widths
 * of said elements when the refs have propagated
 */
const useElementWidths = props => {
  const elementRefs = useRef(new Map()).current;
  const stepGridRef = useRef(null);
  const [elementWidths, setElementWidths] = useState([]);
  let resizeId = setTimeout(() => null);

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

  const resizable = () => {
    // If the user stopped resizing the browser
    clearTimeout(resizeId);
    resizeId = setTimeout(setAllWidths, 500);
  };

  useEffect(() => {
    if (stepGridRef.current) {
      addListener(stepGridRef.current, resizable);
    }
    setAllWidths();
    return () => {
      removeListener(stepGridRef.current, resizable);
    };
  });

  // A function used to assign to the element for multiple refs
  // used like this ref={assignRef(key)}
  const assignRef = key => inst =>
    inst === null ? elementRefs.delete() : elementRefs.set(key, inst);

  return {
    stepGridRef,
    elementWidths,
    assignRef,
  };
};

export default useElementWidths;
