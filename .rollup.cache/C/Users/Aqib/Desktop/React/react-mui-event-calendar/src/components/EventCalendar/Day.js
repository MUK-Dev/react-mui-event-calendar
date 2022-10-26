import { __spreadArray } from "tslib";
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Stack, TextField, Typography, useMediaQuery, useTheme, } from '@mui/material';
import moment from 'moment';
import { ColorPicker, createColor } from 'mui-color';
import Event from './Event';
import useEventCalendar from './useEventCalendar';
var Day = function (_a) {
    var i = _a.i, daysGridLength = _a.daysGridLength, item = _a.item, events = _a.events;
    var _b = useState(false), showNewEventModal = _b[0], setShowNewEventModal = _b[1];
    var theme = useTheme();
    var context = useEventCalendar().context;
    var fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    var _c = useState(''), title = _c[0], setTitle = _c[1];
    var _d = useState(createColor(theme.palette.primary.main)), color = _d[0], setColor = _d[1];
    var _e = useState(''), content = _e[0], setContent = _e[1];
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
    var palette = {
        red: '#ff0000',
        blue: '#0000ff',
        green: '#00ff00',
        yellow: '#dce312',
        cyan: '#19e0da',
        lime: '#68e317',
        gray: '#a3a3a3',
        orange: '#ff8400',
        purple: '#870af5',
        black: '#1c1c1c',
        white: '#ffffff',
        pink: '#e100fa',
        darkblue: '#2600ff',
    };
    var addNewEvent = function (e) {
        var _a, _b;
        e.preventDefault();
        if (!(context === null || context === void 0 ? void 0 : context.readonly) && title !== '' && content !== '') {
            (_a = context === null || context === void 0 ? void 0 : context.setData) === null || _a === void 0 ? void 0 : _a.call(context, function (prev) {
                var newArray = __spreadArray([], prev, true);
                newArray.push({
                    title: title,
                    color: "#".concat(color.hex),
                    date: item.date,
                    popupContent: (React.createElement(DialogContent, null,
                        React.createElement(DialogContentText, null, content))),
                });
                return newArray;
            });
            setShowNewEventModal(function (prev) { return !prev; });
            (_b = context === null || context === void 0 ? void 0 : context.onDataChange) === null || _b === void 0 ? void 0 : _b.call(context, context.data);
        }
    };
    return (React.createElement(Grid, { item: true, width: "".concat(100 / 7, "%"), borderTop: 'none', borderRight: 'none', borderBottom: function () {
            if (!(i > 7 * Math.floor(daysGridLength / 7) - 1))
                return '1px solid rgb(0, 0, 0, 0.12)';
        }, borderLeft: function () {
            if (i % 7 !== 0)
                return '1px solid rgb(0, 0, 0, 0.12)';
        }, key: i, textAlign: 'center', height: '8rem', overflow: 'auto' },
        i < 7 && (React.createElement(React.Fragment, null,
            React.createElement(Typography, { variant: 'caption', gutterBottom: true, color: 'rgb(0, 0, 0, 0.8)' }, weekDays[i]),
            React.createElement("br", null))),
        React.createElement(Typography, { variant: 'caption', color: theme.palette.getContrastText((item === null || item === void 0 ? void 0 : item.date) && moment().isSame(item === null || item === void 0 ? void 0 : item.date, 'day')
                ? theme.palette.primary.main
                : '#FFF'), sx: {
                backgroundColor: (item === null || item === void 0 ? void 0 : item.date) && moment().isSame(item === null || item === void 0 ? void 0 : item.date, 'day')
                    ? theme.palette.primary.main
                    : 'transparent',
                borderRadius: '50%',
                padding: '0.5em',
                marginBottom: '0.1rem',
                cursor: (context === null || context === void 0 ? void 0 : context.readonly) ? 'default' : 'pointer',
                ':hover': {
                    backgroundColor: (item === null || item === void 0 ? void 0 : item.date) && moment().isSame(item === null || item === void 0 ? void 0 : item.date, 'day')
                        ? theme.palette.primary.main
                        : theme.palette.grey[100],
                },
            }, onClick: function () {
                return (context === null || context === void 0 ? void 0 : context.readonly) ? null : setShowNewEventModal(function (prev) { return !prev; });
            } }, item.no),
        React.createElement(Grid, { container: true }, events === null || events === void 0 ? void 0 : events.map(function (e, i) { return (React.createElement(Event, { color: e.color, content: e.popupContent, i: i, key: i, title: e.title })); })),
        React.createElement(Dialog, { fullScreen: fullScreen, open: showNewEventModal, onClose: function () { return setShowNewEventModal(function (prev) { return !prev; }); } },
            React.createElement(DialogTitle, { padding: '0.5rem 1rem !important' },
                "Add New Event on ",
                moment(item.date).format('LL')),
            React.createElement(Divider, { light: true }),
            React.createElement("form", { onSubmit: addNewEvent },
                React.createElement(DialogContent, { sx: {
                        padding: '0.5rem 1rem !important',
                    } },
                    React.createElement(Stack, { gap: '1em' },
                        React.createElement(TextField, { variant: 'outlined', label: 'Title', type: 'text', value: title, onChange: function (e) { return setTitle(e.target.value); }, required: true }),
                        React.createElement(TextField, { value: content, onChange: function (e) { return setContent(e.target.value); }, label: 'Popup content', multiline: true, rows: 4, variant: 'outlined', required: true }),
                        React.createElement(ColorPicker, { palette: palette, value: color, onChange: function (color) { return setColor(color); } }))),
                React.createElement(DialogActions, null,
                    React.createElement(Button, { onClick: function () { return setShowNewEventModal(function (prev) { return !prev; }); } }, "Cancel"),
                    React.createElement(Button, { type: 'submit' }, "Add"))))));
};
export default Day;
//# sourceMappingURL=Day.js.map