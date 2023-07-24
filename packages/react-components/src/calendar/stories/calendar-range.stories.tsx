/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { parseDate } from '@internationalized/date';
import { CalendarRange } from '../calendar-range';

export default {
  component: CalendarRange,
  title: 'Date & Time/CalendarRange',
  argTypes: {}
};

const Template = (args) => {
  const [value, setValue] = React.useState({
    start: parseDate('2023-07-12'),
    end: parseDate('2023-07-20')
  });
  console.log(value);
  return (
    <CalendarRange
      {...args}
      onChange={setValue}
      value={value}
      minValue={parseDate('2023-07-10')}
    />
  );
};
export const Default = Template.bind({});
