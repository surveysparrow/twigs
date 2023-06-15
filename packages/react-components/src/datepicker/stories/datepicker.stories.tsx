import React, { useState } from 'react';
import { DatePicker } from '../datepicker';

export default {
  component: DatePicker,
  title: 'DatePicker',
  argTypes: {}
};

const WithPopOverTemplate = (args) => {
  const [value, setValue] = useState(null);
  return (
    <DatePicker
      {...args}
      value={value}
      onChange={setValue}
      label="Enter date of birth"
      closeOnSelect={false}
    />
  );
};

export const Default = WithPopOverTemplate.bind({});
