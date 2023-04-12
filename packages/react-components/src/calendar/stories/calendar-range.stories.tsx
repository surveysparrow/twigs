/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { CalendarRange } from '../calendar-range';

export default {
  component: CalendarRange,
  title: 'CalendarRange',
  argTypes: {}
} as ComponentMeta<typeof CalendarRange>;

const Template = (args) => {
  return (
    <CalendarRange
      {...args}
    // defaultValue={new Date('2023-12-12')}
    // disablePastDays={args.disablePastDays}
    />
  );
};
export const Default = Template.bind({});
