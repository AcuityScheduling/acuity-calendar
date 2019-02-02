import moment from "moment";

export const event1 = {
  id: 1,
  start: moment("2019-01-02T12:00:00+00:00"),
  end: moment("2019-01-02T13:00:00+00:00"),
  title: "Jan 2nd at 12pm",
  allDay: false
};

export const event2 = {
  id: 2,
  start: moment("2019-01-02T19:00:00+00:00"),
  end: moment("2019-01-02T19:25:25+00:00"),
  title: "Jan 2nd at 7pm",
  allDay: false
};

export const event3 = {
  id: 3,
  start: moment("2019-02-01T09:00:00+00:00"),
  end: moment("2019-02-01T09:30:00+00:00"),
  title: "Feb 1st at 9am",
  allDay: false
};

export const event4 = {
  id: 4,
  start: moment("2019-03-07T14:00:00+00:00"),
  end: moment("2019-03-07T16:00:00+00:00"),
  title: "March 3rd at 2pm",
  allDay: false
};

const eventsMocked = [event1, event2, event3, event4];

export default eventsMocked;
