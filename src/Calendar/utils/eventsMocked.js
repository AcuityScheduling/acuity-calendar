import moment from "moment";

export const event1 = {
  id: 1,
  start: moment(new Date("2019-01-02 12:00:00")),
  end: moment(new Date("2019-01-02 12:30:00")),
  title: "Jan 2nd at 12pm",
  allDay: false
};

export const event2 = {
  id: 2,
  start: moment(new Date("2019-01-02 19:00:00")),
  end: moment(new Date("2019-01-02 19:25:25")),
  title: "Jan 2nd at 7pm",
  allDay: false
};

export const event3 = {
  id: 3,
  start: moment(new Date("2019-02-01 09:00:00")),
  end: moment(new Date("2019-02-01 09:30:00")),
  title: "Feb 1st at 9am",
  allDay: false
};

export const event4 = {
  id: 4,
  start: moment(new Date("2019-03-07 14:00:00")),
  end: moment(new Date("2019-03-07 15:00:00")),
  title: "March 7th at 2pm",
  allDay: false
};

const eventsMocked = [event1, event2, event3, event4];

export default eventsMocked;
