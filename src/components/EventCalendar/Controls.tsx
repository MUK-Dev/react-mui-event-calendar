import React, { FC } from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Moment } from 'moment';

interface Props {
  changeMonth: (action: string) => void;
  date: Moment;
}

const Controls: FC<Props> = ({ changeMonth, date }) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      padding='0.5em 1em'
      borderBottom='1px solid rgba(0, 0, 0, 0.12)'
    >
      <Stack direction='row'>
        <IconButton
          aria-label='previous month'
          onClick={() => changeMonth('subtract')}
          size='small'
          color='primary'
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          aria-label='next month'
          onClick={() => changeMonth('add')}
          size='small'
          color='primary'
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Typography variant='body1' color='primary' aria-label='current month'>
        {date.format('MMMM, YYYY')}
      </Typography>
    </Stack>
  );
};

export default Controls;
