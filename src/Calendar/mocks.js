import moment from 'moment';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';
const now = moment().format(dateFormat);
const today = moment();
const tomorrow = moment().add(1, 'days');
const twoDays = moment().add(2, 'days');
const threeDays = moment().add(3, 'days');
const eightDays = moment().add(8, 'days');
const yesterday = moment().subtract(1, 'days');
const twoDaysAgo = moment().subtract(2, 'days');
const fifteenDaysAgo = moment().subtract(15, 'days');

export const MOCKED_EVENTS = [
  {
    id: 1,
    group_id: 5,
    start: today.set({ hour: 12, minute: 15 }).format(dateFormat),
    end: today.set({ hour: 13, minute: 15 }).format(dateFormat),
    title: 'Group Meeting',
    column_id: 'America/Los_Angeles',
  },
  {
    id: 2,
    group_id: 5,
    start: today.set({ hour: 19, minute: 15 }).format(dateFormat),
    end: today.set({ hour: 20, minute: 0 }).format(dateFormat),
    title: '1:1 with Mari',
    column_id: 'America/New_York',
  },
  {
    id: 3,
    group_id: 5,
    start: today.set({ hour: 15, minute: 30 }).format(dateFormat),
    end: today.set({ hour: 16, minute: 0 }).format(dateFormat),
    title: 'Analytics/Conversion Tracking Specialty Meeting',
    column_id: 'America/Los_Angeles',
  },
  {
    id: 4,
    group_id: 5,
    start: tomorrow.set({ hour: 15, minute: 30 }).format(dateFormat),
    end: tomorrow.set({ hour: 16, minute: 0 }).format(dateFormat),
    title: 'Analytics/Conversion Tracking Specialty Meeting',
    column_id: 'America/New_York',
  },
  {
    id: 5,
    group_id: 5,
    start: yesterday.set({ hour: 15, minute: 30 }).format(dateFormat),
    end: yesterday.set({ hour: 16, minute: 0 }).format(dateFormat),
    title: 'Analytics/Conversion Tracking Specialty Meeting',
    column_id: 'America/New_York',
  },
  {
    id: 6,
    group_id: 5,
    start: fifteenDaysAgo.set({ hour: 4, minute: 23 }).format(dateFormat),
    end: fifteenDaysAgo.set({ hour: 5, minute: 12 }).format(dateFormat),
    title: 'Flight to Development Conference',
    column_id: 'America/New_York',
  },
  {
    id: 7,
    group_id: 5,
    start: eightDays.set({ hour: 22, minute: 30 }).format(dateFormat),
    end: eightDays.set({ hour: 24, minute: 0 }).format(dateFormat),
    title: 'Server Maintenance',
    column_id: 'America/New_York',
  },
  {
    id: 8,
    group_id: 6,
    start: today.set({ hour: 19, minute: 15 }).format(dateFormat),
    end: today.set({ hour: 20, minute: 0 }).format(dateFormat),
    title: '1:1 with Shannah',
    column_id: 'America/New_York',
  },
  {
    id: 9,
    group_id: 6,
    start: twoDaysAgo.set({ hour: 7, minute: 0 }).format(dateFormat),
    end: twoDaysAgo.set({ hour: 7, minute: 45 }).format(dateFormat),
    title: 'Morning Scrum Meeting',
    column_id: 'America/New_York',
  },
  {
    id: 10,
    group_id: 6,
    start: twoDays.set({ hour: 12, minute: 0 }).format(dateFormat),
    end: twoDays.set({ hour: 13, minute: 0 }).format(dateFormat),
    title: 'Lunch with Shannah',
    column_id: 'America/New_York',
  },
  {
    id: 11,
    group_id: 6,
    start: threeDays.set({ hour: 14, minute: 0 }).format(dateFormat),
    end: threeDays.set({ hour: 15, minute: 0 }).format(dateFormat),
    title: 'Sales Call with Acuity',
    column_id: 'America/New_York',
  },
  {
    id: 12,
    group_id: 7,
    start: today.set({ hour: 5, minute: 0 }).format(dateFormat),
    end: today.set({ hour: 8, minute: 0 }).format(dateFormat),
    title: 'Arrisa Farmer: 1/2 day support coverage',
    column_id: 'America/New_York',
  },
  {
    id: 13,
    group_id: 7,
    start: tomorrow.set({ hour: 5, minute: 0 }).format(dateFormat),
    end: tomorrow.set({ hour: 11, minute: 0 }).format(dateFormat),
    title: 'Mari Barker: Full day support coverage',
    column_id: 'America/New_York',
  },
  {
    id: 14,
    group_id: 7,
    start: threeDays.set({ hour: 9, minute: 0 }).format(dateFormat),
    end: threeDays.set({ hour: 17, minute: 0 }).format(dateFormat),
    title: 'Shannah Miriam Time Off',
    column_id: 'America/New_York',
  },
];

export const MOCKED_CALENDARS = [
  { id: 5, title: 'Shannah Miriam', color: '#63b5f7' },
  { id: 6, title: 'Mari Barker', color: '#536e79' },
  { id: 7, title: 'Happiness Brigade', color: '#81c884' },
];

export const MOCKED_STEP_DETAILS = [
  {
    id: 1,
    group_id: 6,
    start: today.set({ hour: 9, minute: 0 }).format(dateFormat),
    end: today.set({ hour: 17, minute: 0 }).format(dateFormat),
    availability: true,
    column_id: 'America/New_York',
  },
  {
    id: 2,
    group_id: 6,
    start: tomorrow.set({ hour: 10, minute: 0 }).format(dateFormat),
    end: tomorrow.set({ hour: 13, minute: 15 }).format(dateFormat),
    availability: true,
    column_id: 'America/Los_Angeles',
  },
  {
    id: 3,
    group_id: 6,
    start: now,
    end: moment(now)
      .add(12, 'hours')
      .format('YYYY-MM-DD HH:mm:ss'),
    schedulingLimits: true,
    column_id: 'America/Los_Angeles',
  },
];

export const MOCK_TIMEZONE_COLUMNS = [
  'America/Los_Angeles',
  'America/New_York',
  'America/Phoenix',
];
