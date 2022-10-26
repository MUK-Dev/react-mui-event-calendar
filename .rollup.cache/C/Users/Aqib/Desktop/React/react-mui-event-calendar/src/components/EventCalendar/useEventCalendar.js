import { EventCalendarContext } from './EventCalendar';
import { useEffect, useMemo, useState, useContext } from 'react';
import moment from 'moment';
export default function useEventCalendar() {
    var context = useContext(EventCalendarContext);
    var _a = useState(moment()), date = _a[0], setDate = _a[1];
    var _b = useState([]), daysGrid = _b[0], setDaysGrid = _b[1];
    var d = useMemo(function () { return date; }, [date]);
    useEffect(function () {
        getMonthDaysGrid();
    }, [d]);
    var getMonthDaysGrid = function () {
        var totalNextMonthStartDays;
        var firstDayofMonth = d.clone().startOf('month');
        var lastDayofMonth = d.clone().endOf('month');
        var totalLastMonthFinalDays = firstDayofMonth.days() - 1 < 0 ? 6 : firstDayofMonth.days() - 1;
        if (lastDayofMonth.days() === 1)
            totalNextMonthStartDays = 6;
        else if (lastDayofMonth.days() === 2)
            totalNextMonthStartDays = 5;
        else if (lastDayofMonth.days() === 3)
            totalNextMonthStartDays = 4;
        else if (lastDayofMonth.days() === 4)
            totalNextMonthStartDays = 3;
        else if (lastDayofMonth.days() === 5)
            totalNextMonthStartDays = 2;
        else if (lastDayofMonth.days() === 6)
            totalNextMonthStartDays = 1;
        else
            totalNextMonthStartDays = 0;
        var totalDays = d.daysInMonth() + totalLastMonthFinalDays + totalNextMonthStartDays;
        var monthList = Array.from({ length: totalDays });
        var counter = 1;
        for (var i = totalLastMonthFinalDays; i < totalDays; i++) {
            if (i < totalDays - totalNextMonthStartDays)
                monthList[i] = {
                    no: counter,
                    date: d
                        .clone()
                        .startOf('month')
                        .add(counter - 1, 'days'),
                };
            counter++;
        }
        setDaysGrid(monthList);
    };
    var changeMonth = function (action) {
        if (action === 'add') {
            setDate(function (prevd) { return prevd.clone().add(1, 'months'); });
        }
        else if (action === 'subtract') {
            setDate(function (prevd) { return prevd.clone().subtract(1, 'months'); });
        }
    };
    return { changeMonth: changeMonth, daysGrid: daysGrid, date: d, context: context };
}
//# sourceMappingURL=useEventCalendar.js.map