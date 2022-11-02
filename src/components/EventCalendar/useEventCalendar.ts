import { EventCalendarContext } from './EventCalendar';
import { useEffect, useMemo, useState, useContext } from 'react';
import moment, { Moment } from 'moment';

import { DaysGrid } from './types';

export default function useEventCalendar(defaultDate: Date | Moment) {
  const context = useContext(EventCalendarContext);
  const [date, setDate] = useState(moment(defaultDate));
  const [daysGrid, setDaysGrid] = useState<Array<DaysGrid>>([]);

  const d = useMemo(() => date, [date]);

  useEffect(() => {
    getMonthDaysGrid();
  }, [d]);

  const getMonthDaysGrid = () => {
    let totalNextMonthStartDays: number;
    const firstDayofMonth = d.clone().startOf('month');
    const lastDayofMonth = d.clone().endOf('month');
    const totalLastMonthFinalDays =
      firstDayofMonth.days() - 1 < 0 ? 6 : firstDayofMonth.days() - 1;
    if (lastDayofMonth.days() === 1) totalNextMonthStartDays = 6;
    else if (lastDayofMonth.days() === 2) totalNextMonthStartDays = 5;
    else if (lastDayofMonth.days() === 3) totalNextMonthStartDays = 4;
    else if (lastDayofMonth.days() === 4) totalNextMonthStartDays = 3;
    else if (lastDayofMonth.days() === 5) totalNextMonthStartDays = 2;
    else if (lastDayofMonth.days() === 6) totalNextMonthStartDays = 1;
    else totalNextMonthStartDays = 0;

    const totalDays =
      d.daysInMonth() + totalLastMonthFinalDays + totalNextMonthStartDays;
    const monthList: Array<DaysGrid> = Array.from({ length: totalDays });
    let counter = 1;

    for (let i = totalLastMonthFinalDays; i < totalDays; i++) {
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

  const changeMonth = (action: string) => {
    if (action === 'add') {
      setDate((prevd) => prevd.clone().add(1, 'months'));
    } else if (action === 'subtract') {
      setDate((prevd) => prevd.clone().subtract(1, 'months'));
    }
  };

  return { changeMonth, daysGrid, date: d, context };
}
