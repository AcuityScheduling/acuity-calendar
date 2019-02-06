import moment from "moment";

export const event1 = {
  id: 1,
  start: moment(new Date("2019-01-02 12:00:00")),
  end: moment(new Date("2019-01-02 12:30:00")),
  title: "Jan 2nd - 12-12:30pm",
  allDay: false
};

export const event2 = {
  id: 2,
  start: moment(new Date("2019-01-02 19:00:00")),
  end: moment(new Date("2019-01-02 19:25:25")),
  title: "Jan 2nd - 7-7:25pm",
  allDay: false
};

export const event3 = {
  id: 3,
  start: moment(new Date("2019-02-07 09:00:00")),
  end: moment(new Date("2019-02-07 09:30:00")),
  title: "Feb 7st - 9-9:30am",
  allDay: false
};

export const event4 = {
  id: 4,
  start: moment(new Date("2019-03-07 14:00:00")),
  end: moment(new Date("2019-03-07 15:00:00")),
  title: "March 7th - 2-3pm",
  allDay: false
};

const event5 = {
  id: 3,
  start: moment(new Date("2019-02-07 09:15:00")),
  end: moment(new Date("2019-02-07 09:30:00")),
  title: "Feb 7th - 9:15-9:30am",
  allDay: false
};

const event6 = {
  id: 3,
  start: moment(new Date("2019-02-07 09:29:00")),
  end: moment(new Date("2019-02-07 09:50:00")),
  title: "Feb 7th - 9:29-9:50am",
  allDay: false
};

const eventsMocked = [event1, event2, event3, event4, event5, event6];

export default eventsMocked;
