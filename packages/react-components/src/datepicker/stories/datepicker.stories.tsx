import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { DatePicker } from '../datepicker';

export default {
  component: DatePicker,
  title: 'DatePicker',
  argTypes: {}
} as ComponentMeta<typeof DatePicker>;

const WithPopOverTemplate = (args) => {

  return (
    <DatePicker
      {...args}
      label='Enter date of birth'
    />
  );
};

export const Default = WithPopOverTemplate.bind({});
