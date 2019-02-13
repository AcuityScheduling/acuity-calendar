import React from "react";
import PropTypes from "prop-types";
import { makeClass } from "../../../utils";
import "./Corner.scss";

const Corner = React.forwardRef(({ renderCorner, currentTime }, ref) => {
  return (
    <div className={makeClass("step-grid__corner")} ref={ref}>
      {renderCorner && renderCorner({ currentTime })}
    </div>
  );
});

Corner.defaultProps = {
  renderCorner: null
};

Corner.propTypes = {
  renderCorner: PropTypes.func
};

export default Corner;
