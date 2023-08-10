import React from 'react';
import { parseDate } from '@internationalized/date';
import { Calendar } from '../calendar';

export default {
  component: Calendar,
  title: 'Date & Time/Calendar',
  argTypes: {}
};

const Template = (args) => {
  const [value, setValue] = React.useState(parseDate('2023-07-24'));
  return (
    <Calendar
      {...args}
      isDisabled
      onChange={setValue}
      value={value}
      minValue={parseDate('2023-07-20')}
    />
  );
};
export const Default = Template.bind({});
