import moment from 'moment';
import { CALENDAR_VIEWS } from './constants';

export const SELECTED_DATE_DEFAULT = moment();
export const VIEW_DEFAULT = CALENDAR_VIEWS.week;
export const FIRST_DAY_DEFAULT = 0;
export const STEP_MINUTES_DEFAULT = 30;
export const SELECT_MINUTES_DEFAULT = 15;
