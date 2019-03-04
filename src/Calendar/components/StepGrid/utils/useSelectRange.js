import { useState } from 'react';
import {
  getDragVerticalChange,
  getSelectMinutesHeight,
  getMinutesMoved,
} from '../../Event/utils';
import { getClickedTime } from '.';

const useSelectRange = ({
  isSelectable,
  stepMinutes,
  selectMinutes,
  columnHeight,
  columnDate,
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startMousePosition, setStartMousePosition] = useState(0);
  const [endMousePosition, setEndMousePosition] = useState(0);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [range, setRange] = useState(0);
  const [startTime, setStartTime] = useState(null);

  const selectMinutesHeight = getSelectMinutesHeight({
    stepMinutes,
    selectMinutes,
  });

  const onMouseUp = e => {
    setTop(0);
    setIsMouseDown(false);
  };

  const onMouseDown = e => {
    if (!isSelectable) return false;
    setIsMouseDown(true);
    setStartMousePosition(e.clientY);
    const rect = e.currentTarget.getBoundingClientRect();
    const exactPosition = e.clientY - rect.top;
    const positionsMoved = exactPosition / selectMinutesHeight;
    const top = Math.round(positionsMoved) * selectMinutesHeight;

    setTop(top);
    const clickedTime = getClickedTime({
      stepMinutes,
      selectMinutes,
      columnDate,
    })(e);
    setStartTime(clickedTime);
  };

  const onMouseMove = e => {
    if (!isSelectable || !isMouseDown) return false;
    if (e.clientY > startMousePosition) {
      const pixelsMoved = e.clientY - startMousePosition;

      const height = getDragVerticalChange({
        originalStart: startTime,
        originalEnd: startTime,
        pixelsMoved,
        selectMinutes,
        selectMinutesHeight,
      });

      let minutesMoved = getMinutesMoved({
        originalStart: startTime,
        originalEnd: startTime,
        pixelsMoved: pixelsMoved,
        selectMinutes,
        selectMinutesHeight,
      });

      setRange({
        start: startTime,
        end: startTime.clone().add(minutesMoved, 'minutes'),
      });
      setHeight(height);
      setEndMousePosition(e.clientY);
    }
  };

  const isSelectRangeFinished = endMousePosition > startMousePosition;

  const resetSelectRangeDrag = () => {
    setIsMouseDown(false);
    setEndMousePosition(0);
    setHeight(0);
  };

  return {
    selectRangeHandlers: { onMouseUp, onMouseDown, onMouseMove },
    isSelectRangeFinished,
    resetSelectRangeDrag,
    selectRangeHeight: height,
    selectRangeTop: top,
    selectRange: range,
  };
};

export default useSelectRange;
