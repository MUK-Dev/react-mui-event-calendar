import React from 'react';
import { Grid, Typography } from '@mui/material';
var ExtraDays = function (_a) {
    var daysGridLength = _a.daysGridLength, i = _a.i;
    var getWeekDays = function () { return [
        'MON.',
        'TUE.',
        'WED.',
        'THU.',
        'FRI.',
        'SAT.',
        'SUN.',
    ]; };
    var weekDays = getWeekDays();
    return (React.createElement(Grid, { height: '8rem', item: true, textAlign: 'center', width: "".concat(100 / 7, "%"), borderTop: 'none', borderRight: 'none', borderBottom: function () {
            if (!(i > 7 * Math.floor(daysGridLength / 7) - 1))
                return '1px solid rgb(0, 0, 0, 0.12)';
        }, borderLeft: function () {
            if (i % 7 !== 0)
                return '1px solid rgb(0, 0, 0, 0.12)';
        }, key: i }, i < 7 && (React.createElement(Typography, { variant: 'caption', gutterBottom: true, color: 'rgb(0, 0, 0, 0.4)' }, weekDays[i]))));
};
export default ExtraDays;
//# sourceMappingURL=ExtraDays.js.map