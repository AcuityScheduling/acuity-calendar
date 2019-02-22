import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import moment from "moment";
import { CALENDAR_VIEWS } from "../Calendar/constants";
import {
  CALENDAR_VIEW_TYPE,
  MOMENT_TYPE,
  FIRST_DAY_TYPE,
  CALENDAR_TYPE
} from "../Calendar/types";
import { getWeekList } from "../Calendar/components/Views/WeekView/utils";

const { month, week, calendar } = CALENDAR_VIEWS;

/**
 * Get the next date we're navigating to in the calendar depending on the view
 *
 * @param {object} params
 * @param {string} params.view - The calendar view
 * @param {number} params.direction - 1 for next -1 for previous
 * @param {moment} params.currentDate - the current date we're using to navigate
 */
const getNavigateDate = ({ view, direction, currentDate }) => {
  const { month, week, calendar } = CALENDAR_VIEWS;

  const getDate = time => {
    return currentDate.clone().add(direction, time);
  };

  const viewMap = {
    [month]: getDate("months"),
    [week]: getDate("weeks"),
    [calendar]: getDate("days")
  };

  return viewMap[view];
};

/**
 * Get the title to return for the range of the currently selected date
 * in the calendar toolbar
 *
 * @param {Object} params
 * @param {moment} params.date
 * @param {string} params.view
 * @param {0|1|2|3|4|5|6} params.firstDay
 */
const getRangeTitle = ({ date, view, firstDay }) => {
  const weekList = getWeekList({ firstDay, date });

  const viewMap = {
    [month]: date.format("MMMM YYYY"),
    [week]: `Week of ${weekList[0].format("MMMM D, YYYY")}`,
    [calendar]: date.format("dddd, MMMM D, YYYY")
  };

  return viewMap[view];
};

const Toolbar = ({
  view,
  onViewChange,
  selectedDate,
  onNavigate,
  firstDay,
  calendars,
  selectedCalendars,
  setSelectedCalendars
}) => {
  const prevDate = getNavigateDate({
    view,
    direction: -1,
    currentDate: selectedDate
  });

  const nextDate = getNavigateDate({
    view,
    direction: 1,
    currentDate: selectedDate
  });

  const toggleSelectedCalendar = ({ isSelected, calendar }) => {
    if (isSelected) {
      return setSelectedCalendars(
        selectedCalendars.filter(calendarId => calendarId !== calendar.id)
      );
    }
    setSelectedCalendars([...selectedCalendars, calendar.id]);
  };

  return (
    <div>
      <h1>{getRangeTitle({ date: selectedDate, view, firstDay })}</h1>
      <div>
        <button type="button" onClick={() => onViewChange(month)}>
          Month
        </button>
        <button type="button" onClick={() => onViewChange(week)}>
          Week
        </button>
        <button type="button" onClick={() => onViewChange(calendar)}>
          Day
        </button>
      </div>
      <div>
        <button type="button" onClick={() => onNavigate(prevDate)}>
          Back
        </button>
        <button type="button" onClick={() => onNavigate(nextDate)}>
          Next
        </button>
      </div>
      <div>
        {calendars.map(calendar => {
          const isSelected = selectedCalendars.includes(calendar.id);
          return (
            <label key={`selectCalendar${calendar.id}`}>
              {calendar.name}
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() =>
                  toggleSelectedCalendar({ isSelected, calendar })
                }
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  view: CALENDAR_VIEW_TYPE.isRequired,
  onViewChange: PropTypes.func.isRequired,
  selectedDate: MOMENT_TYPE.isRequired,
  onNavigate: PropTypes.func.isRequired,
  firstDay: FIRST_DAY_TYPE.isRequired,
  calendars: PropTypes.arrayOf(CALENDAR_TYPE).isRequired,
  selectedCalendars: PropTypes.arrayOf(PropTypes.number).isRequired,
  setSelectedCalendars: PropTypes.func.isRequired
};

export default Toolbar;
