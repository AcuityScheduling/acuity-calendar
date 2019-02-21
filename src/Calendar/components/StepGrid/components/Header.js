import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeClass } from "../../../utils";
import { getScrollbarWidth } from "../utils";
import Corner from "./Corner";
import { STEP_BORDER_WIDTH, TIME_GUTTER_WIDTH } from "../constants";
import { REF_TYPE, MOMENT_TYPE } from "../../../types";
import "./Header.scss";

const Header = ({
  headerRef,
  cornerRef,
  renderCorner,
  renderHeader,
  currentTime,
  timeGutterWidth,
  hasScrollbarGutter
}) => {
  const scrollbarWidth = getScrollbarWidth();

  // If the header is rendered outside of the scrolling grid, then
  // we need a gutter for the width of the scroll bar next to the header
  // columns to make up for the scroll bar that isn't showing in the header
  const renderScrollbarGutter = () => {
    return (
      <Fragment>
        {/* The actual scroll gutter has to be absoluteley positioned
            but we still need something taking the width up so width 100%
            on the header works, so this invisible div does that */}
        <div
          className={makeClass("step-grid__header-scroll-gutter-padding")}
          style={{
            width: `${scrollbarWidth}px`
          }}
        />
        <div
          className={makeClass("step-grid__header-scroll-gutter")}
          style={{ width: `${scrollbarWidth - STEP_BORDER_WIDTH}px` }}
        >
          <div
            className={makeClass("step-grid__header-scroll-gutter-connector")}
          />
        </div>
      </Fragment>
    );
  };

  return (
    <div className={makeClass("step-grid__header-wrapper")}>
      <Corner
        currentTime={currentTime}
        renderCorner={renderCorner}
        ref={cornerRef}
        width={timeGutterWidth}
      />
      <div
        style={{
          width: "100%"
        }}
        className={makeClass("step-grid__header")}
        ref={headerRef}
      >
        {renderHeader()}
      </div>
      {hasScrollbarGutter && renderScrollbarGutter()}
    </div>
  );
};

Header.defaultProps = {
  currentTime: null,
  timeGutterWidth: TIME_GUTTER_WIDTH,
  hasScrollbarGutter: false,
  renderCorner: null,
  headerRef: null
};

Header.propTypes = {
  headerRef: REF_TYPE,
  cornerRef: REF_TYPE.isRequired,
  renderCorner: PropTypes.func,
  renderHeader: PropTypes.func.isRequired,
  currentTime: MOMENT_TYPE,
  timeGutterWidth: PropTypes.number,
  hasScrollbarGutter: PropTypes.bool
};

export default Header;
