import React, { useState, Fragment } from "react";
import moment from "moment";
import Calendar from "./Calendar";
import CalendarToolbar from "./CalendarToolbar";
import { CALENDAR_VIEWS } from "./Calendar/constants";
import { eventsMocked, calendarsMocked } from "./Calendar/utils";

const App = () => {
	const { week } = CALENDAR_VIEWS;
	const [view, setView] = useState(week);
	const [selectedDate, setSelectedDate] = useState(moment());
	const [selectedCalendars, setSelectedCalendars] = useState([]);

	const stepMinutes = 30;
	const firstDay = 0;

	return (
		<Fragment>
			<CalendarToolbar
				view={view}
				onViewChange={setView}
				selectedDate={selectedDate}
				onNavigate={setSelectedDate}
				firstDay={firstDay}
				calendars={calendarsMocked}
				selectedCalendars={selectedCalendars}
				setSelectedCalendars={setSelectedCalendars}
			/>
			<Calendar
				events={eventsMocked}
				view={view}
				onViewChange={setView}
				calendars={calendarsMocked}
				selectedCalendars={selectedCalendars}
				selectedDate={selectedDate}
				onNavigate={setSelectedDate}
				// First day of the week - 0 indexed on Sunday - Sunday = 0, Monday = 1
				firstDay={firstDay}
				onSelectEvent={event => {
					console.log(`Selected ${event.title}`);
				}}
				onSelecting={({ start, end }) => console.log(`Selecting ${start} - ${end}`)}
				// A callback fired when a date selection is made
				onSelectSlot={start => console.log(start.toDate())}
				// How many grid lines there are between an hour. 30 means
				// break the hour into 30 minute blocks. 20 means to break it into 20 etc.
				stepMinutes={stepMinutes}
				// What range of minutes is selectable - for new events
				// and for drag and drop
				selectMinutes={15}
			/>
		</Fragment>
	);
};

export default App;
