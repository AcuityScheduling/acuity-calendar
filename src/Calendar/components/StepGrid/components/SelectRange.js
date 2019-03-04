import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DraggableCore } from 'react-draggable';
import { makeClass } from '../../../utils';

const SelectRange = ({ children }) => {
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [isSelectingRange, setIsSelectingRange] = useState(false);

  return (
    <DraggableCore
      onDrag={(e, ui) => {
        e.stopPropagation();
        console.log('DRAGGING');
        const { x, y } = deltaPosition;
        setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
        setIsSelectingRange(true);
      }}
      handle={`.${makeClass('step-grid__column')}`}
      onStop={(e, ui) => {
        // Check if we hit the onDrag event. If we didn't, this is a click
        if (!isSelectingRange) return false;
        setDeltaPosition({ x: 0, y: 0 });
        setTimeout(() => setIsSelectingRange(false));
      }}
    >
      {children}
    </DraggableCore>
  );
};

SelectRange.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SelectRange;
