import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Moment } from 'moment';
export declare type DaysGrid = {
    no: number;
    date: Moment;
};
export declare type Pallet = {
    primary: string;
    secondary: string;
};
export declare type Event = {
    id?: string;
    title: string;
    popupContent: ReactJSXElement;
    date: Date | Moment;
    color?: string;
};
export declare type EventsData = Array<Event>;
