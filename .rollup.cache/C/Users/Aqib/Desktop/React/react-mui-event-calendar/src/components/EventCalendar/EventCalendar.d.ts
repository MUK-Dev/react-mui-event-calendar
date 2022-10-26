import React, { FC } from 'react';
import { EventsData, Pallet } from './types';
interface Props {
    readonly?: boolean;
    pallet?: Pallet;
    elevation?: number;
    width?: number | string;
    dataSource?: EventsData;
    onDataChange?: (events: EventsData) => void;
    showEventPopup?: boolean;
}
export declare type CalendarContext = {
    readonly?: boolean;
    data?: EventsData;
    setData?: React.Dispatch<React.SetStateAction<EventsData | undefined>>;
    onDataChange?: (events: EventsData) => void;
    showEventPopup?: boolean;
} | null;
export declare const EventCalendarContext: React.Context<CalendarContext>;
declare const EventCalendar: FC<Props>;
export default EventCalendar;
