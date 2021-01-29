# Acuity Calendar

_This package is not production ready. It will be changing extensively. Use at your own risk._

Acuity calendar is an open source set of react calendar components used in the [Acuity Scheduling](https://acuityscheduling.com) app.

---

## Table of contents

- [Acuity Calendar](#acuity-calendar)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Anatomy](#anatomy)
    - [DayGrid views (Monthly)](#daygrid-views-monthly)
    - [TimeGrid views (Daily/Weekly)](#timegrid-views-dailyweekly)
  - [Datatypes](#datatypes)
    - [Date](#date)
    - [Event](#event)
    - [View](#view)
    - [Step details](#step-details)
  - [Usage](#usage)
    - [Components](#components)
      - [CalendarGroups](#calendargroups)
      - [CalendarMonth](#calendarmonth)
      - [CalendarMonthHeatmap](#calendarmonthheatmap)
      - [CalendarWeek](#calendarweek)
      - [Column](#column)
      - [FullCalendar](#fullcalendar)
      - [DayList](#daylist)
      - [DayGrid](#daygrid)
      - [TimeGrid](#timegrid)
      - [Toolbar](#toolbar)
  - [Storybook](#storybook)
  - [Testing](#testing)

---

## Installation

TODO:

---

## Anatomy

TODO:

### DayGrid views (Monthly)

### TimeGrid views (Daily/Weekly)

---

## Datatypes

The Acuity calendar is a generalized event calendar with support for read and update-like operations. 
We define a few key datatypes for working within the event calendar space as presented below.

### Date

Naturally when working with events we are also working with representations of date and time.
To allow maximum flexibility, most date fields, inputs and props in the calendar accepts data in one of the following formats

```js
const DATE_TYPE = PropTypes.oneOfType([
  PropTypes.instanceOf(Date),
  PropTypes.instanceOf(moment),
  PropTypes.string,
]);
```

meaning that the plain old JavaScript `Date` object instance as well as [`moment`](https://momentjs.com/) instances are accepted. Any `moment` parsable date-time string is also accepted.

### Event

An _event_ represents a single unit appointment within the calendar. Events are required to be of the following simple structure

```js
const EVENT_TYPE = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  group_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  start: DATE_TYPE.isRequired,
  end: DATE_TYPE.isRequired,
});
```

The `id` field is required to be a unique idenfier for a particular event.
The optional `group_id` field ties multiple event to a bundle, batch or specific calendar.
The optional `title` of the event is what will be displayed on the rendered calendar event.
Finally, the `start` and `end` dates are naturally required.

### View

A _view_ is a particular calendar representation of a date range. Think of these as the daily, weekly and monthly views found on most digital calendars.

Custom views are specifiable if you, say, want to represent seperate columns for a list of appointment groups or columns for different timezones.

Views are defined by the following structure

```js
const VIEWS_TYPE = PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.oneOf(['groups', 'week', 'month']),
    PropTypes.shape({
      view: PropTypes.string.isRequired,
      grid: PropTypes.oneOf(['time', 'day']),
      render: PropTypes.func,
      displayName: PropTypes.string,
    }),
  ])
);
```

The built-in views consists of `groups`, `week` and `month`, where the latter two should be self-explanatory. The `groups` view can be considered a generalized "day" view in which one or more columns can display events for a single date in time.
Note that the calender currently does not support a `year` view.

For custom views, a view "template" has to be provided via the `view` field. The `grid` field in a matrix representation using nested arrays to represent how and where appointments should be positioned. The `render` field can be used to specify a custom render functions for events. The function is supplied a specific set of props depending on which type of grid is selected, either `time` or `day`.

For `day` grids the list render function would look like:

```jsx
const render = ({
  isEventDraggable,
  onDragEnd,
  onSelectEvent,
  onSelectSlot,
  events,
  selectedDate,
  firstDay,
  visibleEventGroups,
  onSelectMore,
  onSelectDate,
  forceSixWeeks,
  renderCell,
  renderEvent,
}) => {
  return <div>...</div>
}
```

and for `time` grids the render function would look like

```jsx
const render = ({
  isEventDraggable,
  onDragEnd,
  onSelectEvent,
  onSelectSlot,
  events,
  selectedDate,
  firstDay,
  visibleEventGroups,
  isEventExtendable,
  onExtendEnd,
  onCurrentTimeChange,
  onSelectRangeEnd,
  stepDetails,
  minWidthColumn,
  minWidthColumnEmpty,
  renderCorner,
  renderEventPaddingBottom,
  renderEventPaddingTop,
  renderSelectRange,
  renderStepDetail,
  selectMinutes,
  stepHeight,
  stepMinutes,
  renderSelectSlotIndicator,
  renderEvent,
  scrollToTime,
  withGroups,
}) => {
  return <div>...</div>
}
```

---

### Step details

Step details can be considered generic _blocks_ that render on the calendar. These blocks can span over a number of time steps and contain details, hence the name "step details".
Think of these as abstractions for blocking off periods of time on a calendar with an optional note.

Semantically, step details and events are similar, but functionally you can consider step details as a non-interactable event, i.e. not extendable, dragable or selectable.

The data model for step details is as follows:

```js
export const STEP_DETAILS_TYPE = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  group_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  start: DATE_TYPE.isRequired,
  end: DATE_TYPE.isRequired,
});
```

## Usage

TODO:

### Components

The following components are exposed in this package.
For usage examples please refer to the supplied [Storybook](#storybook)



#### CalendarGroups

```jsx
import { CalendarGroups } from 'acuity-calendar';
import { addMinutes } from 'date-fns';

const now = new Date();

const events = [
  { id: 1, group_id: 4, title: 'Some event', start: addMinutes(now, 10), end: addMinutes(now, 20)},
  { id: 2, group_id: 5, title: 'Some event', start: addMinutes(now, 20), end: addMinutes(now, 30)},
  { id: 3, group_id: 6, title: 'Some event', start: addMinutes(now, 30), end: addMinutes(now, 40)},
];

const eventGroups = [
  { id: 4, title: 'Group A' },
  { id: 5, title: 'Group B' },
  { id: 6, title: 'Group C' },
];

<CalendarGroups
  events={events}
  eventGroups={eventGroups}
  visibleEventGroups={[4, 5, 6]}
  selectedDate={now}
/>
```

The `CalendarGroups` component makes it easy to render a daily view for a list of events where each column represents a common identifier for the events, like their date or group id. 
If the shared identifier is the date, this view will simply be a daily view found on most calendars.

Within our data model, event groups are not formally defined, but must at least have an `id` and a `title`.
As with the [`CalendarWeek`](#calendarweek) component, the `CalendarGroups` is a shorthand for instantiating a partially preconfigured [`TimeGrid`](#timegrid) instance.

| Prop               | Type                         | Default value | Description                                                                              |
| ------------------ | ---------------------------- | ------------- | ---------------------------------------------------------------------------------------- |
| events             | `array`                      | `[]`          | Array of [Events](#event)                                                                |
| eventGroups        | `array`                      | `undefined`   | Required. Array of event groups. An event group must at minimum contain `{ id, title }`. |
| renderHeader       | `func`                       | `null`        | Custom render function for grid headers. Given `{ group, events }`.                      |
| selectedDate       | `Date`, `moment` or `string` | `new Date()`  | The currently selected date. See [Date](#date)                                           |
| visibleEventGroups | `number[]`                   | `null`        | Array of visible `group_id`. Controls which groups are rendered on the view.             |
| ...rest            | `any`                        |               | Any additional prop will be passed to the inner [TimeGrid](#timegrid) component          |

---

#### CalendarMonth

```jsx
import { CalendarMonth } from 'acuity-calendar';
import { addMinutes } from 'date-fns';

const now = new Date();

const events = [
  { id: 1, group_id: 1, title: 'Some event', start: addMinutes(now, 10), end: addMinutes(now, 20)},
  { id: 2, group_id: 1, title: 'Some event', start: addMinutes(now, 20), end: addMinutes(now, 30)},
  { id: 3, group_id: 1, title: 'Some event', start: addMinutes(now, 30), end: addMinutes(now, 40)},
];

// Memoized handlers
const handlers = useMemo(() => {
  return {
    isEventDraggable: ({ event }) => { ... },
    onDragEnd: ({ e, event }) => { ... },
    onSelectDate: ({ e, date, isInRange }) => { ... },
    onSelectEvent: ({ e, event}) => { ... },
    onSelectMore: ({ e, events, eventsMore }) => { ... },
    onSelectSlot: ({ e, date, isInRange }) => { ... },
  }
}, []);

<CalendarMonth 
  events={events}
  {...handlers}
/>
```

The `CalendarMonth` is along with the [`DayList`](#daylist) a shorthand to render a specified [`DayGrid`](#daygrid), in this case for a monthly view in a grid structure. 
Besides controlling start of week via `firstDay` and the number of week via `forceSixWeeks`, most of the configuration consists of various interaction event handlers.

| Prop               | Type                         | Default value | Description                                                                                                                  |
| ------------------ | ---------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| events             | `array`                      | `[]`          | Array of [Events](#event)                                                                                                    |
| firstDay           | `number`                     | `0`           | Must be one of `[0, 1, 2, 3, 4, 5, 6]`. The first day of the week in numerical form, starting with Sunday as `0`             |
| forceSixWeeks      | `bool`                       | `false`       | Forces the 6 weeks in the calendar for short months for consistant height while navigating                                   |
| isEventDraggable   | `func`                       | `() => true`  | Callback to determine if an even is draggable. Given `{ event }`.                                                            |
| onDragEnd          | `func`                       | `() => null`  | Callback when a drag event ends. Given `{ e, event }`, where `e` is the synthetic event                                      |
| onSelectDate       | `func`                       | `() => null`  | Callback when a date is clicked. Given `{e, date, isInRange }`. TODO: what is isInRange??                                    |
| onSelectEvent      | `func`                       | `() => null`  | Callback when a event is clicked. Given `{e, date, isInRange }`. TODO: what is isInRange??                                   |
| onSelectMore       | `func`                       | `() => null`  | Callback when the "see more events" text is clicked. Given `{ e, events, eventsMore }`. TODO: determine what `eventsMore` is |
| onSelectSlot       | `func`                       | `() => null`  | Callback for when a cell is clicked. Given `{ e, date, isInRange }`. TODO: what is isInRange??                               |
| renderCell         | `func`                       | `null`        | Custom render function for cell contents. Given `{ date, isInRange, events }`.                                               |
| renderHeader       | `func`                       | `null`        | Custom render function for grid headers. Given `{ date }`.                                                                   |
| selectedDate       | `Date`, `moment` or `string` | `new Date()`  | The currently selected date. See [Date](#date)                                                                               |
| visibleEventGroups | `number[]`                   | `null`        | Array of visible `group_id`. Controls which groups are rendered on the view.                                                 |

---

#### CalendarMonthHeatmap

```jsx
import { CalendarMonthHeatMap } from 'acuity-calendar';
import { addMinutes } from 'date-fns';

const now = new Date();

const events = [
  { id: 1, group_id: 1, title: 'Some event', start: addMinutes(now, 10), end: addMinutes(now, 20)},
  { id: 2, group_id: 1, title: 'Some event', start: addMinutes(now, 20), end: addMinutes(now, 30)},
  { id: 3, group_id: 1, title: 'Some event', start: addMinutes(now, 30), end: addMinutes(now, 40)},
];

const counts = useMemo(() => {
  return events.reduce((acc, event) => {
    if (!acc[event.start])a acc[event.start] = 0
    acc[event.start] = (acc[event.start] + 1) % 100
    return acc;
  }, {})
}, [events])

<CalendarMonthHeatMap 
  counts={counts}
  events={events}
  selectedDate={events[0].start}
/>
```

The `CalendarMonthHeatMap` visuelizes the _weight_ of each day in a monthly view. 
The weight of day is specified by passing the `counts` object mapping `YYYY-MM-DD` formatted dates to a value between 0 and 100. 
The heavier the weight, the deeper the day will be colored.

| Prop          | Type                         | Default value | Description                                                                                                      |
| ------------- | ---------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------- |
| counts        | `object`                     | `{}`          | Object mapping the "heat" a `YYYY-MM-DD` formatted date to an opacity value (0-100).                             |
| events        | `array`                      | `[]`          | Array of [Events](#event)                                                                                        |
| firstDay      | `number`                     | `0`           | Must be one of `[0, 1, 2, 3, 4, 5, 6]`. The first day of the week in numerical form, starting with Sunday as `0` |
| forceSixWeeks | `bool`                       | `true`        | Forces the 6 weeks in the calendar for short months for consistant height while navigating                       |
| onSelectCell  | `func`                       | `() => null`  | Callback when selecting a date. Given `{ e, date, isInRange, weight, count }`.                                   |
| renderCell    | `func`                       | `undefined`   | Custom render function for cells. Given `{ date, isInRange, events, weight, count }`.                            |
| renderHeader  | `func`                       | `undefined`   | Custom render function for headers. Given `{ date }`.                                                            |
| selectedDate  | `Date`, `moment` or `string` | `new Date()`  | The currently selected date. See [Date](#date)                                                                   |

---

#### CalendarWeek

```jsx
import { CalendarWeek } from 'acuity-calendar';

const timeGridProps = { ... }

const renderHeader = useCallback(({  date, events }) => {
  ...
}, []);

<CalendarWeek
  renderHeader={renderHeader}
  {...timeGridProps}
/>
```

Analogous to the [`DayList`](#daylist) component, the `CalendarWeek` is a shorthand for initializing a [`TimeGrid`](#timegrid).
Note that the `renderHeader` custom render function differs from that of [`CalendarMonth`](#calendarmonth) as it also is given the full list of `events`.
This is useful if, say, you want to render the amount of appointments in each column directly in the column header.

| Prop         | Type   | Default value | Description                                                                                                                                        |
| ------------ | ------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| renderHeader | `func` | `null`        | Callback to render the header. Given `{  date, events }`. See [Column](#column) for more details on configuration of the internal Column component |
| ...rest      | `any`  |               | Any additional prop will be passed to the inner [TimeGrid](#timegrid) component                                                                    |

---

#### Column

```jsx

const handlers = useMemo(() => {
  return {
    getUpdatedDraggedEvent: ({ event, start, end, columnMoves }) => { ... },
    isEventDraggable: ({ event }) => { ... },
    isEventExtendable: ({ event }) => { ... },
    onDragEnd: ({ e, event }) => { ... },
    onExtendEnd: event => { ... },
    onSelectEvent: ({ e, event }) => { ... },
    onSelectRangeEnd: ({ e, start, end, column }) => { ... },
    onSelectSlot: ({ e, date, column }) => { ... },
  }
}, []);

const renderers = useMemo(() => {
  return {
    renderEvent: event => { ... },
    renderEventPaddingTop: event => { ... },
    renderEventPaddingBottom: event => { ... },
    renderSelectRange: ({ start, end }) => { ... },
    renderSelectSlotIndicator: ({ time, column }) => { ... },
    renderStepDetail: stepDetail => { ... },
  }
}, []);

const events = {
  '2021-01-01': [ ... ]
}

<Column
  columnId={1}
  columnIndex={1}
  columnWidths={[190]}
  { ...handlers }
  { ...renderers }
  events={events}
  date="2021-01-01"
/>

```

While the `Column` component is not publically exposed in this package, it is an important component for when custom render functions are defined for for [`TimeGrid`](#timegrid) utilizing views, such as the [`weekly`](#calendarweek) and [`group`](#calendargroups) views.
In particular, the `renderHeader` and `renderColumns` prop on [`TimeGrid`](#timegrid) are required to define their markup via an instanced `Column`.

| Prop                      | Type                         | Default value | Description                                                                                                                 |
| ------------------------- | ---------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| columnId                  | `Date`, `number` or `string` | `undefined`   | Required. The unique identifier for the column                                                                              |
| columnIndex               | `number`                     | `undefined`   | Required. The column index for the current column group                                                                     |
| columnWidths              | `number[]`                   | `undefined`   | Required. Array mapping `columnIndex` to a pixel width                                                                      |
| currentTime               | `moment`                     | `null`        | The current time as a [`moment`](momentjs.com) instance                                                                     |
| date                      | `Date` or `string`           | `new Date()`  | The date which the column represents                                                                                        |
| events                    | `object`                     | `{}`          | Unlike the exposed components in this package, this `events` prop is a map `'YYYY-MM-DD'` formatted date keys to grid cells |
| getUpdatedDraggedEvent    | `func`                       |               | Callback to obtain the event after a drag event. Given `{ event, start, end, columnMoves }`                                 |
| gridHeight                | `number`                     |               | Required. The height of the grid                                                                                            |
| isEventDraggable          | `func`                       | `() => trur`  | Callback to determine if an event is dragable. Given `{ event }`                                                            |
| isEventExtendable         | `func`                       | `() => true`  | Callback to determine if an event is extendable. Given `{ event }`                                                          |
| minWidth                  | `number`                     | `190`         | The width a non-empty column should expand to                                                                               |
| minWidthEmpty             | `number`                     | `100`         | The min width an empty column should expand to                                                                              |
| onDragEnd                 | `func`                       | `() => null`  | Callback when a drag event ends. Given `{ e, event }`                                                                       |
| onExtendEnd               | `func`                       | `() => null`  | Callback when an extend event ends. Given `event`                                                                           |
| onSelectEvent             | `func`                       | `() => null`  | Callback when a select event occurs. Given `{ e, event }`                                                                   |
| onSelectRangeEnd          | `func`                       | `() => null`  | Callback when a range selection event ends. Given `{ e, start, end, column }`                                               |
| onSelectSlot              | `func`                       | `() => null`  | Callback when selecting a slot. Given `{ e, date, column }`                                                                 |
| renderEvent               | `func`                       | `null`        | Render function for events. Given `event`                                                                                   |
| renderEventPaddingTop     | `func`                       | `() => null`  | Render function to render the padding above events in the column. Given `event`                                             |
| renderEventPaddingBottom  | `func`                       | `() => null`  | Render function to render the padding below events in the column. Given `event`                                             |
| renderSelectRange         | `func`                       | `null`        | Render function for the range selection. Given `{ start, end }`                                                             |
| renderSelectSlotIndicator | `func`                       | `null`        | Render function for the selected slot indicator. Given `{ time, column }`                                                   |
| renderStepDetail          | `func`                       | `() => null`  | Render function for [`Step details`](#step-details). Given `stepDetail`.                                                    |
| selectMinutes             | `number`                     | `15`          | Must be one of `[5, 10, 15, 20, 30, 60]`. The minute interval in which selecting clicking the calendar should occur in      |
| stepDetails               | `array`                      | `[]`          | Array of [`StepDetails`](#stepDetails)                                                                                      |
| stepHeight                | `number`                     | `null`        | The pixel value height between each step in the TimeGrid                                                                    |
| stepMinutes               | `number`                     | `30`          | Must be one of `[5, 10, 15, 20, 30, 60]`. The minute interval between each horizontal line in the column                    |

---

#### FullCalendar

```jsx
import FullCalendar from 'acuity-calendar';
import { addMinutes } from 'date-fns';

const now = new Date();

const events = [
  { id: 1, group_id: 4, title: 'Some event', start: addMinutes(now, 10), end: addMinutes(now, 20)},
  { id: 2, group_id: 5, title: 'Some event', start: addMinutes(now, 20), end: addMinutes(now, 30)},
  { id: 3, group_id: 6, title: 'Some event', start: addMinutes(now, 30), end: addMinutes(now, 40)},
];

const eventGroups = [
  { id: 4, title: 'Group A' },
  { id: 5, title: 'Group B' },
  { id: 6, title: 'Group C' },
];

const stepDetails = [
  { id: 1, group_id: 6, title: 'Blocked off time', start: addMinutes(now, 40), end: addMinutes(now, 50)},
];

const customRenderers = useMemo(() => {
  return {
    renderTimeGridEvent: event => { ... },
    renderStepDetail: stepDetail => { ... },
  }
}, [])

const handlers = useMemo(() => {
  return {
    isEventDraggable: ({ event }) => { ... },
    isEventExtendable: ({ event }) => { ... }, 
    onCurrentTimeChange: date => { ... },
    onDragEnd: ({ e, event }) => { ... }, // TODO: VERIFY THESE ARGUMENTS
    onExtendEnd: ({ event }) => { ... }, // TODO: VERIFY THESE ARGUMENTS
    onFetchEvents: ({ fetchMoreRange, fullRange, initialFetch, outsideRange }) => { ... },
    onNavigate: date => { ... },
    onSelectDate: ({ e, date, isInRange }) => { ... },
    onSelectEvent: ({ e, event}) => { ... },
    onSelectMore: ({ e, events, eventsMore }) => { ... },
    onSelectRangeEnd: ({ e, start, end, column }) => { ... },
    onSelectSlot: ({ e, date, isInRange }) => { ... },
    onViewChange: view => { ... },
  }
}, []);

<FullCalendar
  currentView="month"
  eventGroups={eventGroups}
  events={events}
  selectedDate={now}
  stepDetails={stepDetails}
  views={['month', 'week', { view: 'groups', displayName: 'Day' }]}
  visibleEventGroups={[4, 5, 6]}
  {...handlers}
  {...customRenderers}
/>
```

The `FullCalendar` is a composite component, providing a fully fledged calendar consisting of a [`Toolbar`](#toolbar) and three default views; [`monthly`](#calendarmonth), [`weekly`](#calendarweek) and [`daily`](#calendargroups).
Under the hood it is orchestrates wiring between the lowest level of exposed components in this library, in particular the  [`TimeGrid`](#timegrid) and [`DayGrid`](#daygrid).

| Prop                       | Type                         | Default value                 | Description                                                                                                      |
| -------------------------- | ---------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| currentView                | `string`                     | `undefined`                   | Required. The currently showing view                                                                             |
| eventGroups                | `array`                      | `undefined`                   | Required. Array of event groups. An event group must at minimum contain `{ id, title }`.                         |
| events                     | `array`                      | `[]`                          | Array of [Events](#event)                                                                                        |
| fetchEventInitialFullRange | `object`                     | `null`                        | Passed to the inner [`Toolbar`](#toolbar)                                                                        |
| firstDay                   | `number`                     | `0`                           | Must be one of `[0, 1, 2, 3, 4, 5, 6]`. The first day of the week in numerical form, starting with Sunday as `0` |
| forceSixWeeks              | `bool`                       | `false`                       | Passed to the inner [`DayGrid`](#daygrid)                                                                        |
| isEventDraggable           | `func`                       | `() => true`                  | Passed to the inner [`DayGrid`](#daygrid) and [`TimeGrid`](#timegrid)                                            |
| isEventExtendable          | `func`                       | `() => true`                  | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| minWidthColumn             | `number`                     | `190`                         | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| minWidthColumnEmpty        | `number`                     | `100`                         | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| onCurrentTimeChange        | `func`                       | `() => null`                  | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| onDragEnd                  | `func`                       | `() => null`                  | Passed to the inner [`DayGrid`](#daygrid) and [`TimeGrid`](#timegrid)                                            |
| onExtendEnd                | `func`                       | `() => null`                  | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| onFetchEvents              | `func`                       | `() => null`                  | Passed to the inner [`Toolbar`](#toolbar)                                                                        |
| onNavigate                 | `func`                       | `null`                        | Passed to the inner [`Toolbar`](#toolbar)                                                                        |
| onSelectDate               | `func`                       | `undefined`                   | Passed to the inner [`DayGrid`](#daygrid)                                                                        |
| onSelectEvent              | `func`                       | `() => null`                  | Passed to the inner [`DayGrid`](#daygrid) and [`TimeGrid`](#timegrid)                                            |
| onSelectMore               | `func`                       | `() => null`                  | Passed to the inner [`DayGrid`](#daygrid)                                                                        |
| onSelectRangeEnd           | `func`                       | `() => null`                  | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| onSelectSlot               | `func`                       | `() => null`                  | Passed to the inner [`DayGrid`](#daygrid) and [`TimeGrid`](#timegrid)                                            |
| onViewChange               | `func`                       | `() => null`                  | Passed to the inner [`Toolbar`](#toolbar)                                                                        |
| renderCell                 | `func`                       | `null`                        | Passed to the inner [`DayGrid`](#daygrid)                                                                        |
| renderCorner               | `func`                       | `() => null`                  | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| renderEventPaddingBottom   | `func`                       | `() => null`                  | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| renderEventPaddingTop      | `func`                       | `() => null`                  | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| renderGroupsHeader         | `func`                       | `null`                        | Custom daily view header render function. See `renderHeader` prop for [`CalendarGroups`](#calendargroups)        |
| renderMonthHeader          | `func`                       | `null`                        | Custom monthly view header render function. See `renderHeader` prop for [`CalendarMonth`](#calendarmonth)        |
| renderSelectRange          | `func`                       | `null`                        | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| renderSelectSlotIndicator  | `func`                       | `null`                        | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| renderStepDetail           | `func`                       | `() => null`                  | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| renderTimeGridEvent        | `func`                       | `null`                        | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| renderToolbar              | `func`                       | `null`                        | Custom Toolbar render function. See `children` prop for [`Toolbar`](#toolbar)                                    |
| renderWeekHeader           | `func`                       | `null`                        | Custom weekly view header render function. See `renderHeader` prop for [`CalendarWeek`](#calendarweek)           |
| scrollToTime               | `String`, `moment` or `Date` | `'firstEvent'`                | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| selectMinutes              | `number`                     | `15`                          | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| selectedDate               | `Date`, `moment` or `string` | `new Date()`                  | The currently selected date. See [Date](#date)                                                                   |
| stepDetails                | `array`                      | `null`                        | Array of [Step details](#step-details)                                                                           |
| stepHeight                 | `number`                     | `null`                        | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| stepMinutes                | `number`                     | `30`                          | Passed to the inner [`TimeGrid`](#timegrid)                                                                      |
| style                      | `object`                     | `{}`                          | Object to pass custom styles to the calendar                                                                     |
| views                      | `array`                      | `['month', 'week', 'groups']` | The list of views supported by the calendar instance. See [View](#view)                                          |
| visibleEventGroups         | `number[]`                   | `null`                        | Passed to the inner [`DayGrid`](#daygrid) and [`TimeGrid`](#timegrid)                                            |

---

#### DayList

```jsx
import { DayList } from 'acuity-calendar';

const dayGridProps = {
  events: [],
  ...
};

<DayList
  firstDay={2}
  totalDays={5}
  renderCell={({ full, small, min, int }) => <div>Cell</div>}
  renderHeader={({ full, small, min, int }) => <div>Header</div>}
  {...dayGridProps}
/>
```

The `DayList` renders a grid view of at least one row where each cell represents a day, which commonly is used for monthly calendar views or weekly views where events aren't ordered horizontally with respect to their starting time.
This component can be considered shorthand syntactic sugar for initializing a [`DayGrid`](#daygrid) with an easier interface for controlling the first day of the week and the number of cells in the grid.

| Prop         | Type     | Default value | Description                                                                                                                                                                                                                                                                                                                |
| ------------ | -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| renderCell   | `func`   | `() => null`  | Callback to render the cell contents. The callback is given the following object `{ full: date.format('dddd'), small: date.format('ddd'), min: date.format('dd'), int: Number(date.format('d')) }`. See [`moment.js` formatting](https://momentjs.com/docs/#/displaying/format/) and [Anatomy](#anatomy) for more details. |
| renderHeader | `func`   | `null`        | Callback to render the header. Given the same object as `renderCell`. See [Anatomy](#anatomy) for more details                                                                                                                                                                                                             |
| firstDay     | `Number` | `0`           | Must be one of `[0, 1, 2, 3, 4, 5, 6]`. The first day of the week in numerical form, starting with Sunday as `0`                                                                                                                                                                                                           |
| totalDays    | `Number` | `7`           | The total days in the week                                                                                                                                                                                                                                                                                                 |
| ...rest      | `any`    |               | Any additional prop will be passed to the inner [DayGrid](#daygrid) component                                                                                                                                                                                                                                              |

---

#### DayGrid

```jsx
import { DayGrid } from 'acuity-calendar';
import { format, addMinutes } from 'date-fns';

const now = new Date();

const GROUP_1 = 1;
const GROUP_2 = 2;
const GROUP_3 = 3;

const events = [
  { id: 1, group_id: GROUP_1, title: 'Some event', start: addMinutes(now, 10), end: addMinutes(now, 20)},
  { id: 2, group_id: GROUP_2, title: 'Some other event', start: addMinutes(now, 20), end: addMinutes(now, 30)},
  { id: 3, group_id: GROUP_3, title: 'Some third event', start: addMinutes(now, 30), end: addMinutes(now, 40)},
];

const SUNDAY_INDEX = 0;

const grid = {
  firstDate: moment().day(SUNDAY_INDEX),
  lastDate: moment().day(SUNDAY_INDEX).add(7, 'days'),
  totalColumns: 7,
};

const renderCell = useCallback(({ date, isInRange, events }) => (
  <div>
    {events.map(event => isInRange && (
       <div key={event.id}>
        <small>{event.start.format('HH:mm')}:</small> {event.title}
      </div>}
    ))}
  </div>
), []);

<DayGrid 
  events={events}
  isEventDraggable={({ event }) => { ... }}
  grid={grid}
  renderCell={renderCell}
  renderHeader={({ date }) => <div>{format(date, 'dddd')}</div>}
  onDragEnd={({ e, event }) => { ... }}
  onSelectSlot={({ e, date, isInRange }) => { ... }}
  onSelectDate={({ e, date, isInRange }) => { ... }}
  onSelectMoreEvents={({ e, events, eventsMore }) => { ... }}
  onSelectEvent={({ e, event}) => { ... }}
  visibleEventGroups={[ GROUP_1, GROUP_2, GROUP_3 ]}
/>
```

The `DayGrid` renders a fully customizable grid calendar view in which each cells represents a day. Individual handlers can be specified to handle day/event selection and dragging. See [Anatomy](#anatomy) for more information about grids, headers, cells and events.

| Prop               | Type                  | Default value | Description                                                                                                                                                                                                           |
| ------------------ | --------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| events             | `array`               | `[]`          | Array of [Events](#event)                                                                                                                                                                                             |
| grid               | `array[]` or `object` | `undefined`   | Required. Accepts a `grid` constisting of an array of arrays of `{ isInRange, date}` or a grid configuration in the shape of `{ firstDate, lastDate, totalColumns, allowPartialRows, getExcludedDates, getIsInRange}` |
| isEventDraggable   | `func`                | `() => true`  | Callback to determine if an even is draggable. Given `{ event }`.                                                                                                                                                     |
| onDragEnd          | `func`                | `() => null`  | Callback when a drag event ends. Given `{ e, event }`, where `e` is the synthetic event                                                                                                                               |
| onSelectDate       | `func`                | `null`        | Callback when a date is clicked. Given `{e, date, isInRange }`. TODO: what is isInRange??                                                                                                                             |
| onSelectEvent      | `func`                | `() => null`  | Callback when a event is clicked. Given `{e, date, isInRange }`. TODO: what is isInRange??                                                                                                                            |
| onSelectMoreEvents | `func`                | `() => null`  | Callback when the "see more events" text is clicked. Given `{ e, events, eventsMore }`. TODO: determine what `eventsMore` is                                                                                          |
| onSelectSlot       | `func`                | `() => null`  | Callback for when a cell is clicked. Given `{ e, date, isInRange }`. TODO: what is isInRange??                                                                                                                        |
| renderCell         | `func`                | `null`        | Custom render function for cell contents. Given `{ date, isInRange, events }`.                                                                                                                                        |
| renderHeader       | `func`                | `null`        | Custom render function for grid headers. Given `{ date }`.                                                                                                                                                            |
| visibleEventGroups | `Number[]`            | `null`        | Array of visible `group_id`. Controls which groups are rendered on the view.                                                                                                                                          |

---

#### TimeGrid

```jsx
import { TimeGrid } from 'acuity-calendar';
import { addMinutes } from 'date-fns';

const now = new Date();

const events = [
    { id: 1, group_id: 1, title: 'Some event', start: addMinutes(now, 10), end: addMinutes(now, 20)},
    { id: 2, group_id: 1, title: 'Some event', start: addMinutes(now, 20), end: addMinutes(now, 30)},
    { id: 3, group_id: 1, title: 'Some event', start: addMinutes(now, 30), end: addMinutes(now, 40)},
];

const Header = ({ ColumnComponent, week, events }) => {
  return (
    {week.map(day => (
      <ColumnComponent 
        key={day.toISOString()}
        totalEventColumns={week.length}  
        date={day.toISOString()}
        columnClass="week"
      >
        <div>
          <div className={`time-grid__week-header__date`}>
            {moment(date).format('M/D')}
          </div>
          <div className={`time-grid__week-header__day`}>
            {moment(date).format('dddd')}
          </div>
        </div>
      </ColumnComponent>
    ))}
  ):
);

const Columns = ({ ColumnComponent, week, events, stepDetails }) => {
  return week.map((day, i) => {
    const columnId = moment(day).format("YYYY-MM-DD");
    return (
      <ColumnComponent
        key={columnId}
        eventsForColumn={events[columnId]}
        eventsForColumn={stepDetails[columnId]}
        date={day.toISOString()}
        columnKey={columnId}
        columnIndex={index}
        columnId={columnId}
      />
    );
  });
};

const handlers = useMemo(() => {
  return {
    isEventDraggable: () => { ... }, // TODO: Describe this
    isEventExtendable: () => { ... }, // TODO: Describe this
    onCurrentTimeChange: () => { ... }, // TODO: Describe this
    onDragEnd: () => { ... }, // TODO: Describe this
    onExtendEnd: () => { ... }, // TODO: Describe this
    onSelectEvent: () => { ... }, // TODO: Describe this
    onSelectRangeEnd: () => { ... }, // TODO: Describe this
    onSelectSlot: () => { ... }, // TODO: Describe this
  }
}, [])


<TimeGrid events={events} renderHeader={Header} renderColumns={Columns} {...handlers} />
```

The TimeGrid component renders a grid consisting of time "steps" on the y-axis and any number of columns representing anything, depending on function defintions. These columns could represent days, calendars, user groups, etc.
The grid allows user to completely customize time-related views by defining callback functions to render headers and column based on event data input.
Additionally, it's configuration allows for complete control on how selection, dragging, extension and events are handled and rendered.

| Prop                      | Type                                         | Default value  | Description                                                                                                                                                                                           |
| ------------------------- | -------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| events                    | `Array`                                      | `[]`           | Array of [Events](#event)                                                                                                                                                                             |
| firstDay                  | `Number`                                     | `0`            | Must be one of `[0, 1, 2, 3, 4, 5, 6]`. The first day of the week in numerical form, starting with Sunday as `0`                                                                                      |
| isEventDraggable          | `func`                                       | `() => null`   | Callback to determine if an event is draggable. The callback is given the `event`                                                                                                                     |
| isEventExtendable         | `func`                                       | `() => null`   | Callback to determine if an event is extendable. The callback is given the `event`                                                                                                                    |
| minWidthColumn            | `Number`                                     | `190`          | The minimum width in pixels that a column should span                                                                                                                                                 |
| minWidthColumnEmpty       | `Number`                                     | `100`          | The minimum width in pixels that an empty column should span                                                                                                                                          |
| onCurrentTimeChange       | `func`                                       | `() => null`   | Callback for when the current time changes. The callback is given an instance of `Date`                                                                                                               |
| onDragEnd                 | `func`                                       | `() => null`   | Callback for when a drag event ends. The callback is given the the `event`                                                                                                                            |
| onExtendEnd               | `func`                                       | `() => null`   | Callback for when an extend event ends. The callback is given the `event`                                                                                                                             |
| onSelectEvent             | `func`                                       | `() => null`   | Callback for when an event is selected. The callback is given an object containing the synthetic event, `e`, and the selected `event`                                                                 |
| onSelectRangeEnd          | `func`                                       | `() => null`   | Callback for when a range is selected in a column. The callback is given an object containign the sythetic event, `e`, the `start` and `end` of the range and the `columnId`                          |
| onSelectSlot              | `func`                                       | `() => null`   | Callback for when an open slot in a column is clicked. The callback is given the sythentic event, `e`, the `date` of the clicked time and the `columnId`                                              |
| renderColumns             | `func`                                       | `undefined`    | Required. Callback function to render each column. The callback function is given the object: `{ ColumnComponent, week, events, eventsWithGroups, stepDetails, stepDetailsWithGroups }`               |
| renderCorner              | `func`                                       | `() => null`   | Callback to render something, like a clock, in the top left corner of the time grid. The callback is given the an object with `currentTime`                                                           |
| renderEvent               | `func`                                       | `null`         | Function to override the default render method for `events`. If passed, the callback is given `event`                                                                                                 |
| renderEventPaddingBottom  | `func`                                       | `() => null`   | Callback to render bottom padding to an event. The callback is given `event`.                                                                                                                         |
| renderEventPaddingTop     | `func`                                       | `() => null`   | Callback to render top padding to an event. The callback is given `event`.                                                                                                                            |
| renderHeaders             | `func`                                       | `undefined`    | Required. Callback function to render the header of each column. The callback function is given the object: `{ ColumnComponent, week, events, eventsWithGroups, stepDetails, stepDetailsWithGroups }` |
| renderSelectRange         | `func`                                       | `null`         | Function to override the way selecting a range is rendered. The callback is given an object with `start` and `end`                                                                                    |
| renderSelectSlotIndicator | `func`                                       | `null`         | Function to override the way the selected slot indicator is rendered. Given an object of `time` and `column`                                                                                          |
| renderStepDetail          | `func`                                       | `() => null`   | Custom function to render [`StepDetails`](#stepDetails)                                                                                                                                               |
| scrollToTime              | `'firstEvent'`, `String`, `moment` or `Date` | `'firstEvent'` | Either `'firstEvent'` or [Date](#date) type. Scrolls to either the first event or a particular moment in time                                                                                         |
| selectedDate              | `Date`, `moment` or `String`                 | `new Date()`   | The currently selected date. See [Date](#date)                                                                                                                                                        |
| selectMinutes             | `Number`                                     | `15`           | Must be one of `[5, 10, 15, 20, 30, 60]` (TODO: Ask Brian)                                                                                                                                            |
| stepDetails               | `Array`                                      | `null`         | Array of [`StepDetails`](#stepDetails)                                                                                                                                                                |
| stepHeight                | `Number`                                     | `null`         | The height of each row in grid                                                                                                                                                                        |
| stepMinutes               | `Number`                                     | `15`           | Must be one of `[5, 10, 15, 20, 30, 60]` (TODO: Ask Brian)                                                                                                                                            |
| visibleEventGroups        | `Number[]`                                   | `null`         | Determines which provided columns are rendered or hidden                                                                                                                                              |
| withColumns               | `Bool`                                       | `true`         | TODO: Ask Brian                                                                                                                                                                                       |

---

#### Toolbar

```jsx
import { Toolbar } from 'acuity-calendar';
import { addMinutes } from 'date-fns';

const now = new Date();

const events = [
    { id: 1, group_id: 1, title: 'Some event', start: addMinutes(now, 10), end: addMinutes(now, 20)},
    { id: 2, group_id: 1, title: 'Some event', start: addMinutes(now, 20), end: addMinutes(now, 30)},
    { id: 3, group_id: 1, title: 'Some event', start: addMinutes(now, 30), end: addMinutes(now, 40)},
];

<Toolbar currentView="month" views={['month', 'week', 'day']} events={events} />
```

The Toolbar component provides control over the calendar by allowing users to switch between views and change the current date selection.
A custom Toolbar can be implemented via the `children` prop like so:

```jsx
import { Toolbar } from 'acuity-calendar';

const MyCustomToolbar = ({onNext, onPrev, onToday, title, eventsForView}) => {
    return (
        <header>
            <button onClick={onNext}>Prev</button>
            <button onClick={onToday}>Today</button>
            <button onClick={onPrev}>Next</button>
            <h1>{title}</h1>
        </header>
    );
}

<Toolbar currentView="month" views={['month', 'week', 'day']} children={MyCustomToolbar} />
```

| Prop                       | Type                         | Default value | Description                                                                                                                             |
| -------------------------- | ---------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| children                   | `func`                       | `null`        | Optional. If no custom Toolbar is passed a default will be rendered                                                                     |
| currentView                | `String`                     | `undefined`   | Specifies the current view. Should be member of the provided `views`                                                                    |
| events                     | `Array`                      | `[]`          | Array of [Events](#event)                                                                                                               |
| fetchEventInitialFullRange | `Object`                     | `null`        | Object containing `start` and `end` [Dates](#date) key. Specifies the range of which the first full fetch should span over              |
| fetchEventPadding          | `Number`                     | `1`           | TODO: Ask Brian                                                                                                                         |
| firstDay                   | `Number`                     | `0`           | Must be one of `[0, 1, 2, 3, 4, 5, 6]`. The first day of the week in numerical form, starting with Sunday as `0`                        |
| onFetchEvents              | `func`                       | `() => null`  | Callback triggered when toolbar navigation is exceeds currently fetched window and we should fetch more events. TODO: describe callback |
| onNavigate                 | `func`                       | `undefined`   | Callback triggered when the current date is changed. TODO: Describe callback structure                                                  |
| onViewChange               | `func`                       | `undefined`   | Callback triggered the view is changed. TODO: describe callbacks structure                                                              |
| selectedDate               | `Date`, `moment` or `String` | `undefined`   | The selected date. See [Date](#date)                                                                                                    |
| views                      | `String[]` or `Object[]`     | `undefined`   | The list of views supported by the calendar instance. See [View](#view)                                                                 |

---

## Storybook

Run storybook with `npm run storybook`

## Testing

Tests are written using [`jest`](https://jestjs.io/) and can be run by invoking

```bash
npm test
```
