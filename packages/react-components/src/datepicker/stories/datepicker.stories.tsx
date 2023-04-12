import React, { useEffect, useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { DatePicker } from '../datepicker';

export default {
  component: DatePicker,
  title: 'DatePicker',
  argTypes: {}
} as ComponentMeta<typeof DatePicker>;

const WithPopOverTemplate = (args) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
  }, [date]);

  return (
    <DatePicker
      {...args}
      onChange={setDate}
      value={date}
    />
  );
};

export const WithPopOver = WithPopOverTemplate.bind({});
