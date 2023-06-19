import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { EventCalendar } from '../components'
import { EventCalendarProps } from '../components/EventCalendar/EventCalendar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof EventCalendar> = {
  title: 'EventCalendar',
  component: EventCalendar,
  argTypes: { onDataChange: { action: 'data changed' } },
}

export default meta
type Story = StoryObj<typeof EventCalendar>

const Template = (args: EventCalendarProps) => <EventCalendar {...args} />

export const DefaultPreview: any = Template.bind({})

DefaultPreview.args = {
  width: '100%',
  dataSource: [],
  defaultDate: new Date(),
  readonly: false,
  elevation: 0,
  showEventPopup: true,
}

export const DataInputWorking: Story = {
  render: () => {
    const [data, setData] = useState<any>([])
    return (
      <EventCalendar
        dataSource={data}
        onDataChange={(events) => setData(events)}
      />
    )
  },
}

export const Pallet: Story = {
  render: () => (
    <EventCalendar
      dataSource={[]}
      pallet={{ primary: '#32d3a2', secondary: '#2343d3' }}
    />
  ),
}
