import React, { useState, Fragment } from "react";
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

storiesOf("Calendar", module)
  .add("day calendar", () => (
    <SillyWrappingComponentToUseHooks view={CALENDAR_VIEWS.week} />
  ))
  .add("week calendar", () => (
    <SillyWrappingComponentToUseHooks view={CALENDAR_VIEWS.week} />
  ))
  .add("month calendar", () => (
    <SillyWrappingComponentToUseHooks view={CALENDAR_VIEWS.month} />
  ))
  .add("month heatmap", () => {
    const events = [
      {
        id: 3,
        calendar_id: 5,
        start: "2019-02-11 00:00:00",
        end: "2019-02-11 00:00:00",
        weight: 0.7
      },
      {
        id: 3,
        calendar_id: 5,
        start: "2019-02-12 00:00:00",
        end: "2019-02-12 00:00:00",
        weight: 0.4
      },
      {
        id: 3,
        calendar_id: 5,
        start: "2019-02-13 00:00:00",
        end: "2019-02-13 00:00:00",
        weight: 0.5
      },
      {
        id: 3,
        calendar_id: 5,
        start: "2019-02-14 00:00:00",
        end: "2019-02-14 00:00:00",
        weight: 0.8
      }
    ];
    const calendars = [{ id: 5, name: "Brian Jenkins" }];
    const styles = `
      .acuity-calendar__month__cell {
        position: relative;
      }
      .acuity-calendar__step-grid__event {
        background: transparent;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
      }
      .acuity-calendar__month__date {
        text-align: center;
        position: relative;
        z-index: 10;
      }
      .heatmap__cell {
        position: absolute;
        top: 10%;
        bottom: 15%;
        left: 4px;
        right: 4px;
        padding: 0px;
        border-radius: 50%;
      }
    `;
    return (
      <Fragment>
        <style>{styles}</style>
        <Calendar
          events={events}
          calendars={calendars}
          selectedCalendars={[5]}
          renderEvent={event => (
            <div
              className="heatmap__cell"
              style={{
                background: "rgba(0, 0, 255, " + event.weight + ")"
              }}
            />
          )}
        />
      </Fragment>
    );
  });
