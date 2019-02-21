import React from "react";
import PropTypes from "prop-types";
import { makeClass } from "../../../utils";
import "./Corner.scss";
import { TIME_GUTTER_WIDTH } from "../constants";

const Corner = React.forwardRef(({ renderCorner, width, currentTime }, ref) => {
  return (
    <div
      className={makeClass("step-grid__corner")}
      style={{ width: `${width}px` }}
      ref={ref}
    >
      {renderCorner && renderCorner({ currentTime })}
    </div>
  );
});

Corner.defaultProps = {
  renderCorner: null,
  width: TIME_GUTTER_WIDTH
};

Corner.propTypes = {
  renderCorner: PropTypes.func,
  width: PropTypes.number
};

export default Corner;
