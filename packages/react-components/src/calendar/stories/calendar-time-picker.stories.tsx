import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { today, getLocalTimeZone, CalendarDateTime } from '@internationalized/date';
import { CalendarTimePicker, CalendarTimePickerProps } from '../calendar-time-picker';

const meta: Meta<typeof CalendarTimePicker> = {
  component: CalendarTimePicker,
  title: 'Date & Time/CalendarTimePicker',
  argTypes: {
    isMilitaryTime: {
      control: 'boolean',
      description: 'When true, displays 24-hour military time format. When false, displays 12-hour format with AM/PM.'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
};

export default meta;
type Story = StoryObj<typeof CalendarTimePicker>;

const CalendarTimePickerWithState = (args: CalendarTimePickerProps) => {
  const todayDate = today(getLocalTimeZone());
  const [value, setValue] = React.useState<CalendarDateTime>(
    new CalendarDateTime(todayDate.year, todayDate.month, todayDate.day, 10, 30)
  );
  return (
    <CalendarTimePicker
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue as CalendarDateTime)}
    />
  );
};

export const Default: Story = {
  render: (args) => <CalendarTimePickerWithState {...args} />,
  args: {
    isMilitaryTime: false
  }
};

export const MilitaryTime: Story = {
  render: (args) => <CalendarTimePickerWithState {...args} />,
  args: {
    isMilitaryTime: true
  }
};
