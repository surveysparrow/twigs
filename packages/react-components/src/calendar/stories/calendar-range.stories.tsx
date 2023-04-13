/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { CalendarRange } from '../calendar-range';
import { parseDate } from '@internationalized/date';

export default {
  component: CalendarRange,
  title: 'CalendarRange',
  argTypes: {}
} as ComponentMeta<typeof CalendarRange>;

const Template = (args) => {
  return (
    <CalendarRange
      {...args}
      defaultValue={{
        start: parseDate('2023-04-12'),
        end: parseDate('2023-05-12')
      }}
    />
  );
};
export const Default = Template.bind({});
