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
    start: parseDate('2025-08-02'),
    end: parseDate('2025-08-10')
  });
  return (
    <CalendarRange
      {...args}
      onChange={setValue}
      value={value}
      minValue={parseDate('2025-08-01')}
    />
  );
};
export const Default = Template.bind({});
