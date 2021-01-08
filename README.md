# Acuity Calendar

- [Acuity Calendar](#acuity-calendar)
  - [Installation](#installation)
  - [Anatomy](#anatomy)
  - [Datatypes](#datatypes)
    - [Event](#event)
    - [View](#view)
    - [Date](#date)
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



_This package is not production ready. It will be changing extensively. Use at your own risk._

Acuity calendar is an open source set of react calendar components used in the [Acuity Scheduling](https://acuityscheduling.com) app.

## Installation

TODO:

## Anatomy

TODO:

## Datatypes

### Event

TODO: Write about event structure

### View

TODO: Write about view structure

### Date

TODO: Write about accepted date formats

TODO:

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
| events                     | `array`                      | `[]`          | Array of [events](#events)                                                                                                 |
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
