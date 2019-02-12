import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import CalendarTimeColumn from "./components/CalendarTimeColumn";
import CalendarDayColumns from "./components/CalendarDayColumns";
import CalendarCorner from "./components/CalendarCorner";
import CalendarDay from "./components/CalendarDay";
import CalendarStepLines from "./components/CalendarStepLines";
import CalendarCurrentTimeIndicator from "./components/CalendarCurrentTimeIndicator";
import { STEP_HEIGHTS } from "./constants";
import { useCalendarSticky, useCurrentTime } from "./utils";
import styles from "./index.module.css";
import { CALENDAR_VIEWS } from "../../../constants";
import {
	CALENDAR_VIEW_TYPE,
	MOMENT_TYPE,
	FIRST_DAY_TYPE,
	STEP_MINUTES_TYPE,
	CALENDAR_TYPE,
} from "../../../types";
import CalendarCalendarColumns from "./components/CalendarCalendarColumns";

const CalendarColumns = ({
	view,
	selectedDate,
	calendars,
	selectedCalendars,
	firstDay,
	events,
	stepMinutes,
	onSelectEvent,
	onSelectSlot,
	selectMinutes,
}) => {
	const { wrapperRef, timeColumnRef, headerRef, cornerRef, timeIndicatorRef } = useCalendarSticky();
	const currentTime = useCurrentTime();

	const totalStepsPerBlock = 60 / stepMinutes;

	const renderCalendarDay = ({ date, calendarId, eventsForDay }) => (
		<CalendarDay
			events={eventsForDay}
			date={date}
			key={`timeBlocks${calendarId || date.date()}`}
			totalStepsPerBlock={totalStepsPerBlock}
			stepMinutes={stepMinutes}
			selectMinutes={selectMinutes}
			onSelectEvent={onSelectEvent}
			onSelectSlot={onSelectSlot}
			currentTime={currentTime}
			renderCurrentTimeIndicator={
				date.isSame(moment(), "day") && (
					<CalendarCurrentTimeIndicator
						stepMinutes={stepMinutes}
						currentTime={currentTime}
						isToday
					/>
				)
			}
		/>
	);

	return (
		<div className={styles.wrapper} ref={wrapperRef}>
			<CalendarCorner ref={cornerRef} />
			<CalendarCurrentTimeIndicator
				ref={timeIndicatorRef}
				stepMinutes={stepMinutes}
				currentTime={currentTime}
			/>
			<CalendarTimeColumn
				blockHeight={totalStepsPerBlock * STEP_HEIGHTS[stepMinutes]}
				ref={timeColumnRef}
			/>
			<CalendarStepLines totalStepsPerBlock={totalStepsPerBlock} stepMinutes={stepMinutes} />
			{view === CALENDAR_VIEWS.week && (
				<CalendarDayColumns
					selectedDate={selectedDate}
					firstDay={firstDay}
					ref={headerRef}
					view={view}
					events={events}
					renderCalendarDays={renderCalendarDay}
				/>
			)}
			{view === CALENDAR_VIEWS.calendar && (
				<CalendarCalendarColumns
					selectedDate={selectedDate}
					selectedCalendars={selectedCalendars}
					calendars={calendars}
					ref={headerRef}
					events={events}
					renderCalendarDays={renderCalendarDay}
				/>
			)}
		</div>
	);
};

CalendarColumns.defaultProps = {
	eventOverlap: false,
};

CalendarColumns.propTypes = {
	view: CALENDAR_VIEW_TYPE.isRequired,
	selectedDate: MOMENT_TYPE.isRequired,
	firstDay: FIRST_DAY_TYPE.isRequired,
	stepMinutes: STEP_MINUTES_TYPE.isRequired,
	onSelectEvent: PropTypes.func.isRequired,
	onSelectSlot: PropTypes.func.isRequired,
	selectMinutes: STEP_MINUTES_TYPE.isRequired,
	calendars: PropTypes.arrayOf(CALENDAR_TYPE).isRequired,
	selectedCalendars: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CalendarColumns;
