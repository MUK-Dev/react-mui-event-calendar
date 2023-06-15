import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { EventCalendar } from '../components'
import { EventCalendarProps } from '../components/EventCalendar/EventCalendar'
import { EventsData } from '../components/EventCalendar/types'

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

export const Default: Story = {
  render: () => <EventCalendar dataSource={[]} />,
}

export const Pallet: Story = {
  render: () => (
    <EventCalendar
      dataSource={[]}
      pallet={{ primary: '#32d3a2', secondary: '#2343d3' }}
    />
  ),
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// export const Primary: Story = {
//   // More on args: https://storybook.js.org/docs/react/writing-stories/args
//   args: {
//     primary: true,
//     label: 'EventCalendar',
//   },
// }

// export const Secondary: Story = {
//   args: {
//     label: 'EventCalendar',
//   },
// }

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'EventCalendar',
//   },
// }

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'EventCalendar',
//   },
// }
