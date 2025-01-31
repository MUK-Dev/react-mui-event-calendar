import React, { FC, useState } from 'react'
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
} from '@mui/material'
import moment from 'moment'

import { DaysGrid, EventsData } from './types'
import Event from './Event'
import useEventCalendar from './useEventCalendar'
import { CalendarContext } from './EventCalendarContext'

interface Props {
  i: number
  daysGridLength: number
  item: DaysGrid
  events?: EventsData | undefined
}

const Day: FC<Props> = ({ i, daysGridLength, item, events }) => {
  const [showNewEventModal, setShowNewEventModal] = useState(false)
  const theme = useTheme()
  const context: CalendarContext = useEventCalendar().context
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const getWeekDays = () => [
    'MON.',
    'TUE.',
    'WED.',
    'THU.',
    'FRI.',
    'SAT.',
    'SUN.',
  ]

  const weekDays = getWeekDays()

  const addNewEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!context?.readonly && title !== '' && content !== '') {
      const newArrayForDataChange: EventsData = [...(context?.data as [])]
      newArrayForDataChange.push({
        title,
        popupContent: (
          <DialogContent>
            <DialogContentText>{content}</DialogContentText>
          </DialogContent>
        ),
        date: item.date,
        color: theme.palette.primary.main,
      })

      setTitle('')
      setContent('')
      setShowNewEventModal((prev) => !prev)
      context?.onDataChange?.(newArrayForDataChange)
    }
  }

  return (
    <Grid
      item
      width={`${100 / 7}%`}
      borderTop='none'
      borderRight='none'
      borderBottom={() => {
        if (!(i > 7 * Math.floor(daysGridLength / 7) - 1))
          return '1px solid rgb(0, 0, 0, 0.12)'
      }}
      borderLeft={() => {
        if (i % 7 !== 0) return '1px solid rgb(0, 0, 0, 0.12)'
      }}
      key={i}
      textAlign='center'
      height='8rem'
      paddingTop='0.3em'
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
  )
}

export default Day
