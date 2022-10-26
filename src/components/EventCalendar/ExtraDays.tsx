import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';

interface Props {
  daysGridLength: number;
  i: number;
}

const ExtraDays: FC<Props> = ({ daysGridLength, i }) => {
  const getWeekDays = () => [
    'MON.',
    'TUE.',
    'WED.',
    'THU.',
    'FRI.',
    'SAT.',
    'SUN.',
  ];

  const weekDays = getWeekDays();
  return (
    <Grid
      height='8rem'
      item
      textAlign='center'
      width={`${100 / 7}%`}
      borderTop='none'
      borderRight='none'
      borderBottom={() => {
        if (!(i > 7 * Math.floor(daysGridLength / 7) - 1))
          return '1px solid rgb(0, 0, 0, 0.12)';
      }}
      borderLeft={() => {
        if (i % 7 !== 0) return '1px solid rgb(0, 0, 0, 0.12)';
      }}
      key={i}
    >
      {i < 7 && (
        <Typography variant='caption' gutterBottom color='rgb(0, 0, 0, 0.4)'>
          {weekDays[i]}
        </Typography>
      )}
    </Grid>
  );
};

export default ExtraDays;
