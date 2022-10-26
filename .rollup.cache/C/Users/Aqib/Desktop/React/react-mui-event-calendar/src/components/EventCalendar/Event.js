import { Close } from '@mui/icons-material';
import { AppBar, Dialog, Divider, Grid, IconButton, Toolbar, Tooltip, Typography, useMediaQuery, useTheme, } from '@mui/material';
import React, { useState } from 'react';
import useEventCalendar from './useEventCalendar';
var Event = function (_a) {
    var color = _a.color, i = _a.i, content = _a.content, title = _a.title;
    var _b = useState(false), showDialog = _b[0], setShowDialog = _b[1];
    var theme = useTheme();
    var fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    var context = useEventCalendar().context;
    return (React.createElement(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3 },
        React.createElement(Tooltip, { title: title },
            React.createElement(Typography, { variant: 'caption', component: 'div', onClick: function () {
                    return (context === null || context === void 0 ? void 0 : context.showEventPopup) ? setShowDialog(function (prev) { return !prev; }) : null;
                }, sx: {
                    marginY: '0.1rem',
                    backgroundColor: color !== null && color !== void 0 ? color : theme.palette.primary.main,
                    color: theme.palette.getContrastText(color !== null && color !== void 0 ? color : theme.palette.primary.main),
                    cursor: (context === null || context === void 0 ? void 0 : context.showEventPopup) ? 'pointer' : 'transparent',
                    borderRadius: '5px',
                } }, i + 1)),
        React.createElement(Dialog, { fullScreen: fullScreen, open: showDialog, onClose: function () { return setShowDialog(function (prev) { return !prev; }); } },
            React.createElement(AppBar, { sx: {
                    position: 'relative',
                    backgroundColor: color,
                    color: theme.palette.getContrastText(color !== null && color !== void 0 ? color : theme.palette.primary.main),
                } },
                React.createElement(Toolbar, null,
                    React.createElement(IconButton, { edge: 'start', color: 'inherit', onClick: function () { return setShowDialog(function (prev) { return !prev; }); }, "aria-label": 'close' },
                        React.createElement(Close, null)),
                    React.createElement(Typography, { sx: { ml: 2, flex: 1 }, variant: 'h6', component: 'div' }, title))),
            React.createElement(Divider, { light: true }),
            content)));
};
export default Event;
//# sourceMappingURL=Event.js.map