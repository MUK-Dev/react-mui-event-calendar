import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Moment } from 'moment';

export type DaysGrid = {
  no: number;
  date: Moment;
};

export type Pallet = {
  primary: string;
  secondary: string;
};

export type Event = {
  id?: string;
  title: string;
  popupContent: ReactJSXElement;
  date: Date | Moment;
  color?: string;
};

export type EventsData = Array<Event>;
