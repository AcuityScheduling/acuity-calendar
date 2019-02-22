import React, { useState } from "react";
import moment from "moment";

import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

import Calendar from "../src/Calendar";
import { CALENDAR_VIEWS } from "../src/Calendar/constants";

import { Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

const eventsMocked = [];

const SillyWrappingComponentToUseHooks = ({ view }) => {
  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <Calendar
      events={eventsMocked}
      view={view}
      // onViewChange={setView}
      // calendars={calendarsMocked}
      // selectedCalendars={selectedCalendars}
      selectedDate={selectedDate}
      onNavigate={setSelectedDate}
      // First day of the week - 0 indexed on Sunday - Sunday = 0, Monday = 1
      firstDay={0}
      // onSelectEvent={event => {
      // console.log(`Selected ${event.title}`);
      // }}
      // When clicking and dragging to create a new event on a stepgrid view
      // onSelecting={({ start, end }) =>
      //   console.log(`Selecting ${start} - ${end}`)
      // }
      // A callback fired when a date selection is made
      onSelectSlot={start => console.log(start.toDate())}
      // How many grid lines there are between an hour. 30 means
      // break the hour into 30 minute blocks. 20 means to break it into 20 etc.
      stepMinutes={20}
      // What range of minutes is selectable - for new events
      // and for drag and drop
      selectMinutes={15}
    />
  );
};

console.log(CALENDAR_VIEWS);

storiesOf("Calendar", module)
  .add("day calendar", () => (
    <SillyWrappingComponentToUseHooks view={CALENDAR_VIEWS.week} />
  ))
  .add("week calendar", () => (
    <SillyWrappingComponentToUseHooks view={CALENDAR_VIEWS.week} />
  ))
  .add("month calendar", () => (
    <SillyWrappingComponentToUseHooks view={CALENDAR_VIEWS.month} />
  ));
