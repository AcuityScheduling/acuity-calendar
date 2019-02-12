import React from "react";
import PropTypes from "prop-types";
import { getRangeTitle, getNavigateDate } from "./utils";
import { CALENDAR_VIEWS } from "../Calendar/constants";
import { CALENDAR_VIEW_TYPE, MOMENT_TYPE, FIRST_DAY_TYPE, CALENDAR_TYPE } from "../Calendar/types";

const { month, week, calendar } = CALENDAR_VIEWS;

const Toolbar = ({
	view,
	onViewChange,
	selectedDate,
	onNavigate,
	firstDay,
	calendars,
	selectedCalendars,
	setSelectedCalendars,
}) => {
	const prevDate = getNavigateDate({
		view,
		direction: -1,
		currentDate: selectedDate,
	});

	const nextDate = getNavigateDate({
		view,
		direction: 1,
		currentDate: selectedDate,
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
								onChange={() => toggleSelectedCalendar({ isSelected, calendar })}
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
	setSelectedCalendars: PropTypes.func.isRequired,
};

export default Toolbar;
