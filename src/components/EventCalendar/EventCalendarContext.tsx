import { createContext } from 'react'
import { EventsData } from './types'
import { Moment } from 'moment'

export type CalendarContext = {
  readonly?: boolean
  data: EventsData
  onDataChange?: (events: EventsData) => void
  showEventPopup?: boolean
} | null

export const EventCalendarContext = createContext<CalendarContext>(null)
