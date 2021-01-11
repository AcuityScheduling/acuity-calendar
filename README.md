# Acuity Calendar
_This package is not production ready. It will be changing extensively. Use at your own risk._

Acuity calendar is an open source set of react calendar components used in the [Acuity Scheduling](https://acuityscheduling.com) app.

---

## Table of contents

- [Acuity Calendar](#acuity-calendar)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Anatomy](#anatomy)
  - [Datatypes](#datatypes)
    - [Date](#date)
    - [Event](#event)
    - [View](#view)
  - [Usage](#usage)
    - [Components](#components)
      - [FullCalendar](#fullcalendar)
      - [CalendarGroups](#calendargroups)
      - [CalendarMonth](#calendarmonth)
      - [CalendarMonthHeatmap](#calendarmonthheatmap)
      - [CalendarWeek](#calendarweek)
      - [DayList](#daylist)
      - [DayGrid](#daygrid)
      - [TimeGrid](#timegrid)
      - [Toolbar](#toolbar)
  - [Storybook](#storybook)

---

## Installation

TODO:

---

## Anatomy

TODO:

---

## Datatypes

The Acuity calendar is a generalized appointment calendar with supports CRUD like operations. We defines a few key datatypes for working within the appointment space as presented below.

### Date

Naturally when working with appointments we are also working with representations of date and time.

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

A _view_ is a particular calendar representation of a date range. Think of these as the daily, monthly and yearly views found on most digital calendars.

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

## Usage

TODO:

### Components

The following components are exposed in this package.
For usage examples please refer to the supplied [Storybook](#storybook)

#### FullCalendar

TODO:

#### CalendarGroups

TODO:
  
#### CalendarMonth

TODO:

#### CalendarMonthHeatmap

TODO:

#### CalendarWeek

TODO:

---

#### DayList

TODO:

```jsx
import { DayList } from 'acuity-calendar';

const dayGridProps = {
  events: [],
  ...
};

<DayList
  firstDay={2}
  totalDays={5}
  renderCell={() => <div>Cell</div>}
  renderHeader={() => <div>Header</div>}
  {...dayGridProps}
/>
```

| Prop         | Type     | Default value | Description                                                                   |
| ------------ | -------- | ------------- | ----------------------------------------------------------------------------- |
| renderCell   | `func`   | `() => null`  |                                                                               |
| renderHeader | `func`   | `null`        |                                                                               |
| firstDay     | `Number` | `0`           |                                                                               |
| totalDays    | `Number` | `7`           |                                                                               |
| ...rest      | `any`    |               | Any additional prop will be passed to the inner [DayGrid](#daygrid) component |

---

#### DayGrid

TODO:

```jsx
import { DayGrid } from 'acuity-calendar';

<DayGrid 
    events={}
    isEventDraggable={}
    grid={}
    renderCell={() => <div>Cell</div>}
    renderHeader={() => <div>Header</div>}
    onDragEnd={}
    onSelectSlot={}
    onSelectDate={}
    onSelectMoreEvents={}
    onSelectEvent={}
    visibleEventGroups={}
/>
```

| Prop               | Type             | Default value | Description |
| ------------------ | ---------------- | ------------- | ----------- |
| events             | `Event[]`        | `[]`          |             |
| grid               | `DAY_GRID_TYPE`* |               |             |
| isEventDraggable   | `func`           | `() => true`  |             |
| onDragEnd          | `func`           | `() => null`  |             |
| onSelectDate       | `func`           | `null`        |             |
| onSelectEvent      | `func`           | `() => null`  |             |
| onSelectMoreEvents | `func`           | `() => null`  |             |
| onSelectSlot       | `func`           | `() => null`  |             |
| renderCell         | `func`           | `null`        |             |
| renderHeader       | `func`           | `null`        |             |
| visibleEventGroups | `Number[]`       | `null`        |             |

#### TimeGrid

TODO

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

| Prop                       | Type                         | Default value | Description                                                                                                                |
| -------------------------- | ---------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| children                   | `func`                       | `null`        | Optional. If no custom Toolbar is passed a default will be rendered                                                        |
| currentView                | `string`                     | `undefined`   | Specifies the current view. Should be member of the provided `views`                                                       |
| events                     | `array`                      | `[]`          | Array of [Events](#event)                                                                                                  |
| fetchEventInitialFullRange | `object`                     | `null`        | Object containing `start` and `end` [Dates](#date) key. Specifies the range of which the first full fetch should span over |
| fetchEventPadding          | `number`                     | `1`           | TODO: Ask Brian                                                                                                            |
| firstDay                   | `Number`                     | `0`           | The first day of the week                                                                                                  |
| onFetchEvents              | `func`                       | `() => null`  | Callback triggered when toolbar navigation is exceeds currently fetched window and we should fetch more events             |
| onNavigate                 | `func`                       | `undefined`   | Callback triggered when the current date is changed                                                                        |
| onViewChange               | `func`                       | `undefined`   | Callback triggered the view is changed                                                                                     |
| selectedDate               | `Date`, `moment` or `string` | `undefined`   | The selected date                                                                                                          |
| views                      | `string[]` or `object[]`     | `undefined`   | The list of views supported by the calendar instance. See [View](#view)                                                    |

---

## Storybook

Run storybook with `npm run storybook`
