import moment from 'moment';
import { DaysGrid } from './types';
export default function useEventCalendar(): {
    changeMonth: (action: string) => void;
    daysGrid: DaysGrid[];
    date: moment.Moment;
    context: import("./EventCalendar").CalendarContext;
};
