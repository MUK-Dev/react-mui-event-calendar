import { FC } from 'react';
import { DaysGrid, EventsData } from './types';
interface Props {
    i: number;
    daysGridLength: number;
    item: DaysGrid;
    events?: EventsData | undefined;
}
declare const Day: FC<Props>;
export default Day;
