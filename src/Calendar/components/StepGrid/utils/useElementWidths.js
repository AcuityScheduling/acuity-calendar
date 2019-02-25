import { useRef, useEffect, useState } from 'react';
import { isArrayEqual } from '../../../utils';

/**
 * Create the ref Map for all the elements and get the widths
 * of said elements when the refs have propagated
 */
const useElementWidths = props => {
  const elementRefs = useRef(new Map()).current;
  const [elementWidths, setElementWidths] = useState([]);

  const getElementWidths = () => {
    const widths = [];
    elementRefs.forEach((element, day) => {
      widths.push(element.offsetWidth);
    });
    return widths;
  };

  useEffect(() => {
    if (!isArrayEqual(getElementWidths(), elementWidths)) {
      setElementWidths(getElementWidths());
    }
  });

  return {
    elementRefs,
    elementWidths,
  };
};

export default useElementWidths;
