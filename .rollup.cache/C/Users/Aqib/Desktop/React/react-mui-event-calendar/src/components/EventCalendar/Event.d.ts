import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { FC } from 'react';
interface Props {
    color?: string;
    i: number;
    content: ReactJSXElement;
    title?: string;
}
declare const Event: FC<Props>;
export default Event;
