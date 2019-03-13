import moment from 'moment';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';
const now = moment().format(dateFormat);

export const MOCKED_EVENTS = [
  {
    id: 1,
    group_id: 5,
    start: '2019-01-02 12:00:00',
    end: '2019-01-02 12:30:00',
    title: 'My Meeting',
    allDay: false,
  },
  {
    id: 2,
    group_id: 5,
    start: '2019-01-02 19:00:00',
    end: '2019-01-02 19:25:25',
    title: '1:1 with Jordan',
    allDay: false,
  },
  {
    id: 3,
    group_id: 5,
    start: moment()
      .hour(9)
      .minute(0)
      .format(dateFormat),
    end: moment()
      .hour(9)
      .minute(30)
      .format(dateFormat),
    title: 'Unicorns are pretty no seriously they are super duper pretty',
    allDay: false,
  },
  {
    id: 4,
    group_id: 6,
    start: '2019-03-07 14:00:00',
    end: '2019-03-07 15:00:00',
    title: 'Interview Today',
    allDay: false,
  },
  {
    id: 5,
    group_id: 6,
    start: '2019-02-12 09:15:00',
    end: '2019-02-12 09:30:00',
    title: 'Piano Recital',
    allDay: false,
    paddingTopStart: '2019-02-12 08:45:00',
    paddingBottomEnd: '2019-02-12 10:00:00',
  },
  {
    id: 6,
    group_id: 6,
    start: '2019-02-12 09:29:00',
    end: '2019-02-12 09:50:00',
    title: 'Band Practice',
    allDay: false,
  },

  {
    id: 7,
    group_id: 6,
    start: '2019-02-12 22:00:00',
    end: '2019-02-12 23:00:00',
    title: "Valentine's Day",
    allDay: false,
  },
  {
    id: 8,
    group_id: 6,
    start: '2019-02-14 10:00:00',
    end: '2019-02-14 16:00:00',
    title: 'Big Group Meeting',
    allDay: false,
  },
];

export const MOCKED_CALENDARS = [
  { id: 5, name: 'Shannah Miriam' },
  { id: 6, name: 'Mari Barker' },
  { id: 7, name: 'Arissa Farmer' },
];

export const MOCKED_STEP_DETAILS = [
  {
    id: 1,
    group_id: 6,
    start: '2019-02-12 08:00:00',
    end: '2019-02-13 13:30:00',
    availability: true,
  },
  {
    id: 2,
    group_id: 6,
    start: '2019-02-13 04:00:00',
    end: '2019-02-13 19:11:00',
    availability: true,
  },
  {
    id: 3,
    group_id: 6,
    start: now,
    end: moment(now)
      .add(12, 'hours')
      .format('YYYY-MM-DD HH:mm:ss'),
    schedulingLimits: true,
  },
];
