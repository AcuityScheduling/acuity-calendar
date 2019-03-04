import { useState } from 'react';

const useSelectRange = isSelectable => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startMousePosition, setStartMousePosition] = useState(0);
  const [endMousePosition, setEndMousePosition] = useState(0);

  const onMouseUp = e => {
    setIsMouseDown(false);
  };

  const onMouseDown = e => {
    if (!isSelectable) return false;
    setIsMouseDown(true);
    setStartMousePosition(e.clientY);
  };

  const onMouseMove = e => {
    if (!isSelectable || !isMouseDown) return false;
    if (e.clientY > startMousePosition) {
      const difference = e.clientY - startMousePosition;
      console.log('difference: ', difference);
      setEndMousePosition(e.clientY);
    }
  };

  const isSelectRangeFinished = endMousePosition > startMousePosition;

  const resetSelectRangeDrag = () => {
    setEndMousePosition(0);
  };

  return {
    selectRangeHandlers: { onMouseUp, onMouseDown, onMouseMove },
    isSelectRangeFinished,
    resetSelectRangeDrag,
  };
};

export default useSelectRange;
