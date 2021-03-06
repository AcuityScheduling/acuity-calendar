import { useState } from 'react';
import {
  getDragVerticalChange,
  getSelectMinutesHeight,
  getMinutesMoved,
} from '../components/Event/utils';
import { getClickedTime } from '.';
import { handleCenterClass, extendHandleClass } from '../constants';

const useSelectRange = ({
  isSelectable,
  stepMinutes,
  selectMinutes,
  columnDate,
  stepHeight,
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startMousePosition, setStartMousePosition] = useState(0);
  const [endMousePosition, setEndMousePosition] = useState(0);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [range, setRange] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [originalTop, setOriginalTop] = useState(0);

  const selectMinutesHeight = getSelectMinutesHeight({
    stepMinutes,
    selectMinutes,
    stepHeight,
  });

  const onMouseUp = e => {
    setTop(0);
    setIsMouseDown(false);
  };

  const onContextMenu = e => {
    setIsMouseDown(false);
  };

  const onMouseDown = e => {
    if (
      e.target.className.split(' ').includes(handleCenterClass) ||
      e.target.className.split(' ').includes(extendHandleClass) ||
      !isSelectable
    )
      return false;
    setIsMouseDown(true);
    setStartMousePosition(e.clientY);
    const rect = e.currentTarget.getBoundingClientRect();
    const exactPosition = e.clientY - rect.top;
    const positionsMoved = exactPosition / selectMinutesHeight;
    const top = Math.round(positionsMoved) * selectMinutesHeight;

    setTop(top);
    setOriginalTop(top);
    const clickedTime = getClickedTime({
      stepHeight,
      stepMinutes,
      selectMinutes,
      columnDate,
    })(e);
    setStartTime(clickedTime);
  };

  const onMouseMove = e => {
    if (!isSelectable || !isMouseDown) return false;
    if (e.clientY !== startMousePosition) {
      const pixelsMoved = e.clientY - startMousePosition;

      const height = Math.abs(
        getDragVerticalChange({
          originalStart: startTime,
          originalEnd: startTime,
          pixelsMoved: Math.abs(pixelsMoved),
          selectMinutes,
          selectMinutesHeight,
        })
      );

      let minutesMoved = getMinutesMoved({
        originalStart: startTime,
        originalEnd: startTime,
        pixelsMoved: pixelsMoved,
        selectMinutes,
        selectMinutesHeight,
      });

      const newRange = {};
      if (e.clientY < startMousePosition) {
        setTop(originalTop - height);
        newRange.start = startTime.clone().add(minutesMoved, 'minutes');
        newRange.end = startTime;
      } else {
        newRange.start = startTime;
        newRange.end = startTime.clone().add(minutesMoved, 'minutes');
      }

      setRange(newRange);
      setHeight(height);
      setEndMousePosition(e.clientY);
    }
  };

  const isSelectRangeFinished =
    Math.abs(endMousePosition) > selectMinutesHeight / 2;

  const resetSelectRangeDrag = () => {
    setIsMouseDown(false);
    setEndMousePosition(0);
    setStartMousePosition(0);
    setHeight(0);
  };

  return {
    selectRangeHandlers: { onMouseUp, onMouseDown, onMouseMove, onContextMenu },
    isSelectRangeFinished,
    resetSelectRangeDrag,
    selectRangeHeight: height,
    selectRangeTop: top,
    selectRange: range,
  };
};

export default useSelectRange;
