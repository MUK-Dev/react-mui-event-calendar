import React from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
var Controls = function (_a) {
    var changeMonth = _a.changeMonth, date = _a.date;
    return (React.createElement(Stack, { direction: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0.5em 1em', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' },
        React.createElement(Stack, { direction: 'row' },
            React.createElement(IconButton, { "aria-label": 'previous month', onClick: function () { return changeMonth('subtract'); }, size: 'small', color: 'primary' },
                React.createElement(ArrowBackIos, null)),
            React.createElement(IconButton, { "aria-label": 'next month', onClick: function () { return changeMonth('add'); }, size: 'small', color: 'primary' },
                React.createElement(ArrowForwardIos, null))),
        React.createElement(Typography, { variant: 'body1', color: 'primary', "aria-label": 'current month' }, date.format('MMMM, YYYY'))));
};
export default Controls;
//# sourceMappingURL=Controls.js.map