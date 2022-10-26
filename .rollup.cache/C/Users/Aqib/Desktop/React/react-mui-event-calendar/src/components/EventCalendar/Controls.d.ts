import { FC } from 'react';
import { Moment } from 'moment';
interface Props {
    changeMonth: (action: string) => void;
    date: Moment;
}
declare const Controls: FC<Props>;
export default Controls;
