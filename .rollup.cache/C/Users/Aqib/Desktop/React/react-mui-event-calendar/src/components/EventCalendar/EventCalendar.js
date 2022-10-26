import React, { createContext, useState } from 'react';
import { Paper, Grid, ThemeProvider, createTheme } from '@mui/material';
import Day from './Day';
import ExtraDays from './ExtraDays';
import useEventCalendar from './useEventCalendar';
import Controls from './Controls';
export var EventCalendarContext = createContext(null);
var EventCalendar = function (_a) {
    var _b, _c;
    var _d = _a.readonly, readonly = _d === void 0 ? false : _d, pallet = _a.pallet, _e = _a.elevation, elevation = _e === void 0 ? 0 : _e, _f = _a.width, width = _f === void 0 ? '90%' : _f, dataSource = _a.dataSource, onDataChange = _a.onDataChange, _g = _a.showEventPopup, showEventPopup = _g === void 0 ? true : _g;
    var _h = useEventCalendar(), changeMonth = _h.changeMonth, date = _h.date, daysGrid = _h.daysGrid;
    var _j = useState(dataSource), data = _j[0], setData = _j[1];
    var theme = createTheme({
        palette: {
            primary: {
                main: (_b = pallet === null || pallet === void 0 ? void 0 : pallet.primary) !== null && _b !== void 0 ? _b : '#1976d2',
            },
            secondary: {
                main: (_c = pallet === null || pallet === void 0 ? void 0 : pallet.secondary) !== null && _c !== void 0 ? _c : '#9c27b0',
            },
            divider: pallet === null || pallet === void 0 ? void 0 : pallet.primary,
        },
    });
    return (React.createElement(EventCalendarContext.Provider, { value: {
            readonly: readonly,
            data: data,
            setData: setData,
            onDataChange: onDataChange,
            showEventPopup: showEventPopup,
        } },
        React.createElement(ThemeProvider, { theme: theme },
            React.createElement(Paper, { sx: { width: width, border: '1px solid rgba(0, 0, 0, 0.12)' }, elevation: elevation },
                React.createElement(Controls, { changeMonth: changeMonth, date: date }),
                React.createElement(Grid, { container: true }, daysGrid === null || daysGrid === void 0 ? void 0 : daysGrid.map(function (item, i) {
                    return (item === null || item === void 0 ? void 0 : item.no) ? (React.createElement(Day, { daysGridLength: daysGrid.length, i: i, item: item, key: i, events: data === null || data === void 0 ? void 0 : data.filter(function (d) { return item.date.isSame(d === null || d === void 0 ? void 0 : d.date, 'day'); }) })) : (React.createElement(ExtraDays, { daysGridLength: daysGrid.length, i: i, key: i }));
                }))))));
};
export default EventCalendar;
//# sourceMappingURL=EventCalendar.js.map