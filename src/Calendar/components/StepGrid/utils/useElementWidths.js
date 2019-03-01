import { useRef, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';

/**
 * Create the ref Map for all the elements and get the widths
 * of said elements when the refs have propagated
 */
const useElementWidths = props => {
  const elementRefs = useRef(new Map()).current;
  const [elementWidths, useElementWidths] = useState([]);

  const getElementsMeasurements = () => {
    const widths = [];
    elementRefs.forEach((element, day) => {
      widths.push(element.offsetWidth);
    });
    return widths;
  };

  useEffect(() => {
    if (!isEqual(getElementsMeasurements(), elementWidths)) {
      useElementWidths(getElementsMeasurements());
    }
  });

  // A function used to assign to the element for multiple refs
  // used like this ref={assignRef(key)}
  const assignRef = key => inst =>
    inst === null ? elementRefs.delete() : elementRefs.set(key, inst);

  return {
    elementWidths,
    assignRef,
  };
};

export default useElementWidths;
