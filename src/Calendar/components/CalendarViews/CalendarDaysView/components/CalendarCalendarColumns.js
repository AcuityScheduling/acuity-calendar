import React, { Fragment } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import styles from "./CalendarDayColumns.module.css";
import { MOMENT_TYPE, CALENDAR_TYPE } from "../../../../types";

const CalendarCalendarColumns = React.forwardRef(
	({ renderCalendarDays, selectedDate, events, selectedCalendars, calendars }, ref) => {
		if (selectedCalendars.length === 0) {
			return false;
		}
		const date = selectedDate.format("YYYY-MM-DD");
		return (
			<Fragment>
				<div className={styles.header} ref={ref}>
					{selectedCalendars.map(calendarId => {
						const calendarName = get(
							calendars.find(calendar => calendar.id === calendarId),
							"name",
							""
						);
						return (
							<h2
								key={`header${calendarId}`}
								style={{
									minWidth: `${100 / 7}%`,
								}}
							>
								{calendarName}
							</h2>
						);
					})}
				</div>
				<div className={styles.day_wrapper}>
					{selectedCalendars.map(calendarId => {
                        console.log('events: ', events);
                        const eventsForDay = get(events, `${calendarId}.${date}`, {});
						return renderCalendarDays({ calendarId, date: selectedDate, eventsForDay });
					})}
				</div>
			</Fragment>
		);
	}
);

CalendarCalendarColumns.displayName = "CalendarCalendarColumns";

CalendarCalendarColumns.propTypes = {
	selectedDate: MOMENT_TYPE.isRequired,
	renderCalendarDays: PropTypes.func.isRequired,
	events: PropTypes.object.isRequired,
	selectedCalendars: PropTypes.arrayOf(PropTypes.number).isRequired,
	calendars: PropTypes.arrayOf(CALENDAR_TYPE).isRequired,
};

export default CalendarCalendarColumns;
