import React from "react";
import PropTypes from 'prop-types';

const CalendarWeekView = ({ eventOverlap }) => {
  return <div>Week View</div>;
};

CalendarWeekView.defaultProps = {
  eventOverlap: false
};

CalendarWeekView.propTypes = {
  eventOverlap: PropTypes.bool
};

export default CalendarWeekView;
