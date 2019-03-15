import DayGrid from './components/DayGrid';
import TimeGrid from './components/TimeGrid';

export { DayGrid, TimeGrid };

// import React, { useMemo } from 'react';
// import moment from 'moment';
// import PropTypes from 'prop-types';
// import { CALENDARS } from './constants';
// import {
//   FIRST_DAY_TYPE,
//   STEP_MINUTES_TYPE,
//   EVENT_TYPE,
//   DATE_TYPE,
//   CALENDAR_TYPE,
//   GRID_TYPE,
// } from './types';
// import { getMungedEvents, getEventsWithEventGroups } from './utils';
// import {
//   SELECTED_DATE_DEFAULT,
//   MIN_WIDTH_COLUMN_DEFAULT,
//   MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
//   STEP_MINUTES_DEFAULT,
//   SELECT_MINUTES_DEFAULT,
//   FIRST_DAY_DEFAULT,
// } from './defaultProps';
// import DayGrid from './components/DayGrid';
// import TimeGrid from './components/TimeGrid';

// const Calendar = ({
//   calendarType,
//   events,
//   stepDetails,
//   selectedDate,
//   visibleEventGroups,
//   onExtendEnd,
//   onCurrentTimeChange,
//   onDragEnd,
//   firstDay,
//   forceSixWeeks,
//   grid,
//   onSelectEvent,
//   onSelectRangeEnd,
//   onSelectSlot,
//   onSelectMonthDate,
//   onSelectMoreEvents,
//   stepMinutes,
//   stepHeight,
//   selectMinutes,
//   renderEvent,
//   renderCorner,
//   renderHeader,
//   renderSelectSlotIndicator,
//   renderStepDetail,
//   renderSelectRange,
//   minWidthColumn,
//   minWidthColumnEmpty,
//   renderEventPaddingTop,
//   renderEventPaddingBottom,
//   renderDayCell,
// }) => {
//   const getCalendarType = () => {
//     const { day, time } = CALENDARS;
//     const calendarTypes = {
//       [day]: DayGrid,
//       [time]: TimeGrid,
//     };
//     return calendarTypes[calendarType];
//   };

//   const CalendarType = getCalendarType();

//   return (
//     <CalendarType
//       eventsWithEventGroups={mungedEvents}
//       events={eventsWithSelectedEventGroups}
//       grid={grid}
//       stepDetails={mungedStepDetailsGroups}
//       stepDetailsWithEventGroups={mungedStepDetails}
//       selectedDate={moment(new Date(selectedDate))}
//       onExtendEnd={onExtendEnd}
//       onCurrentTimeChange={onCurrentTimeChange}
//       onDragEnd={onDragEnd}
//       onSelectEvent={onSelectEvent}
//       onSelectRangeEnd={onSelectRangeEnd}
//       onSelectSlot={onSelectSlot}
//       onSelectMonthDate={onSelectMonthDate}
//       onSelectMoreEvents={onSelectMoreEvents}
//       forceSixWeeks={forceSixWeeks}
//       firstDay={firstDay}
//       stepMinutes={stepMinutes}
//       selectMinutes={selectMinutes}
//       visibleEventGroups={visibleEventGroups}
//       stepHeight={stepHeight}
//       renderEvent={renderEvent}
//       renderCorner={renderCorner}
//       renderSelectRange={renderSelectRange}
//       renderHeader={renderHeader}
//       minWidthColumn={minWidthColumn}
//       minWidthColumnEmpty={minWidthColumnEmpty}
//       renderStepDetail={renderStepDetail}
//       renderSelectSlotIndicator={renderSelectSlotIndicator}
//       renderEventPaddingTop={renderEventPaddingTop}
//       renderEventPaddingBottom={renderEventPaddingBottom}
//       renderCell={renderDayCell}
//     />
//   );
// };

// Calendar.defaultProps = {
//   renderEvent: null,
//   renderCorner: () => null,
//   renderEventPaddingTop: () => null,
//   renderHeader: null,
//   renderEventPaddingBottom: () => null,
//   stepDetails: [],
//   events: [],
//   visibleEventGroups: null,
//   firstDay: FIRST_DAY_DEFAULT,
//   selectedDate: SELECTED_DATE_DEFAULT,
//   calendarType: CALENDARS.time,
//   calendars: [],
//   onExtendEnd: () => null,
//   onDragEnd: () => null,
//   minWidthColumn: MIN_WIDTH_COLUMN_DEFAULT,
//   minWidthColumnEmpty: MIN_WIDTH_COLUMN_EMPTY_DEFAULT,
//   renderStepDetail: () => null,
//   onCurrentTimeChange: () => null,
//   renderSelectSlotIndicator: null,
//   onSelectRangeEnd: () => null,
//   renderSelectRange: null,
//   renderDayCell: null,
//   forceSixWeeks: false,
//   onSelectMonthDate: null,
//   stepHeight: null,
//   stepMinutes: STEP_MINUTES_DEFAULT,
//   selectMinutes: SELECT_MINUTES_DEFAULT,
//   onSelectMoreEvents: () => null,
//   onSelectEvent: () => null,
//   onSelectSlot: () => null,
// };

// Calendar.propTypes = {
//   calendarType: CALENDAR_TYPE,
//   // First day of the week - 0 indexed on Sunday - Sunday = 0, Monday = 1
//   events: PropTypes.arrayOf(EVENT_TYPE),
//   firstDay: FIRST_DAY_TYPE,
//   forceSixWeeks: PropTypes.bool,
//   grid: GRID_TYPE.isRequired,
//   minWidthColumn: PropTypes.number,
//   minWidthColumnEmpty: PropTypes.number,
//   onCurrentTimeChange: PropTypes.func,
//   onDragEnd: PropTypes.func,
//   onExtendEnd: PropTypes.func,
//   onSelectEvent: PropTypes.func,
//   onSelectMonthDate: PropTypes.func,
//   onSelectMoreEvents: PropTypes.func,
//   onSelectRangeEnd: PropTypes.func,
//   onSelectSlot: PropTypes.func,
//   renderCorner: PropTypes.func,
//   renderDayCell: PropTypes.func,
//   renderEvent: PropTypes.func,
//   renderEventPaddingBottom: PropTypes.func,
//   renderEventPaddingTop: PropTypes.func,
//   renderHeader: PropTypes.func,
//   renderSelectRange: PropTypes.func,
//   renderSelectSlotIndicator: PropTypes.func,
//   // What range of minutes is selectable - for new events
//   // and for drag and drop
//   renderStepDetail: PropTypes.func,
//   selectMinutes: STEP_MINUTES_TYPE,
//   selectedDate: DATE_TYPE,
//   stepDetails: PropTypes.array,
//   // The height in pixels that we want each step to be. This will be like
//   // zooming in and out on the calendar
//   stepHeight: PropTypes.number,
//   // How many grid lines there are between an hour. 30 means
//   // break the hour into 30 minute blocks. 20 means to break it into 20 etc.
//   stepMinutes: STEP_MINUTES_TYPE,
//   visibleEventGroups: PropTypes.arrayOf(PropTypes.number),
// };

// export default Calendar;
