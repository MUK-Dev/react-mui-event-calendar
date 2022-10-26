import React, { FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import moment from 'moment';
import { ColorPicker, createColor } from 'mui-color';

import { DaysGrid, EventsData } from './types';
import Event from './Event';
import useEventCalendar from './useEventCalendar';
import { CalendarContext } from './EventCalendar';

interface Props {
  i: number;
  daysGridLength: number;
  item: DaysGrid;
  events?: EventsData | undefined;
}

const Day: FC<Props> = ({ i, daysGridLength, item, events }) => {
  const [showNewEventModal, setShowNewEventModal] = useState(false);
  const theme = useTheme();
  const context: CalendarContext = useEventCalendar().context;
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [title, setTitle] = useState('');
  const [color, setColor] = useState(createColor(theme.palette.primary.main));
  const [content, setContent] = useState('');

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

  const palette = {
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

  const addNewEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!context?.readonly && title !== '' && content !== '') {
      context?.setData?.((prev: any) => {
        const newArray = [...prev];
        newArray.push({
          title,
          color: `#${color.hex}`,
          date: item.date,
          popupContent: (
            <DialogContent>
              <DialogContentText>{content}</DialogContentText>
            </DialogContent>
          ),
        });
        return newArray;
      });
      setShowNewEventModal((prev) => !prev);
      context?.onDataChange?.(context.data as EventsData);
    }
  };

  return (
    <Grid
      item
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
      textAlign='center'
      height='8rem'
      overflow='auto'
    >
      {i < 7 && (
        <>
          <Typography variant='caption' gutterBottom color='rgb(0, 0, 0, 0.8)'>
            {weekDays[i]}
          </Typography>
          <br />
        </>
      )}

      <Typography
        variant='caption'
        color={theme.palette.getContrastText(
          item?.date && moment().isSame(item?.date, 'day')
            ? theme.palette.primary.main
            : '#FFF'
        )}
        sx={{
          backgroundColor:
            item?.date && moment().isSame(item?.date, 'day')
              ? theme.palette.primary.main
              : 'transparent',
          borderRadius: '50%',
          padding: '0.5em',
          marginBottom: '0.1rem',
          cursor: context?.readonly ? 'default' : 'pointer',
          ':hover': {
            backgroundColor:
              item?.date && moment().isSame(item?.date, 'day')
                ? theme.palette.primary.main
                : theme.palette.grey[100],
          },
        }}
        onClick={() =>
          context?.readonly ? null : setShowNewEventModal((prev) => !prev)
        }
      >
        {item.no}
      </Typography>
      <Grid container>
        {events?.map((e, i) => (
          <Event
            color={e.color}
            content={e.popupContent}
            i={i}
            key={i}
            title={e.title}
          />
        ))}
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        open={showNewEventModal}
        onClose={() => setShowNewEventModal((prev) => !prev)}
      >
        <DialogTitle padding='0.5rem 1rem !important'>
          Add New Event on {moment(item.date).format('LL')}
        </DialogTitle>
        <Divider light />
        <form onSubmit={addNewEvent}>
          <DialogContent
            sx={{
              padding: '0.5rem 1rem !important',
            }}
          >
            <Stack gap='1em'>
              <TextField
                variant='outlined'
                label='Title'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <TextField
                value={content}
                onChange={(e) => setContent(e.target.value)}
                label='Popup content'
                multiline
                rows={4}
                variant='outlined'
                required
              />
              <ColorPicker
                palette={palette}
                value={color}
                onChange={(color: any) => setColor(color)}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowNewEventModal((prev) => !prev)}>
              Cancel
            </Button>
            <Button type='submit'>Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
};

export default Day;
