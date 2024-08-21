import { parseDate } from '@internationalized/date';
import React from 'react';
import { DatePicker } from '../datepicker';

export default {
  component: DatePicker,
  title: 'Date & Time/DatePicker',
  argTypes: {}
};

const WithPopOverTemplate = (args) => {
  const [value, setValue] = React.useState(parseDate('2023-07-24'));
  return (
    <DatePicker
      {...args}
      value={value}
      onChange={setValue}
      footerAction={(_, setPopoverOpen) => setPopoverOpen(false)}
      label="Enter date of birth"
    />
  );
};

export const Default = WithPopOverTemplate.bind({});
