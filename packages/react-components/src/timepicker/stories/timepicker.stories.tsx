import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { TimePicker } from '../timepicker';

export default {
  component: TimePicker,
  title: 'Date & Time/TimePicker',
  argTypes: {
    hourCycle: {
      control: 'select',
      options: [12, 24]
    },
    granularity: {
      control: 'select',
      options: ['hour', 'minute', 'second']
    }
  }
} as ComponentMeta<typeof TimePicker>;

const Template = (args) => {
  return <TimePicker {...args} label="Enter time" />;
};
export const Default = Template.bind({});
