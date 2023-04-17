import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { parseDate } from '@internationalized/date';
import { Calendar } from '../calendar';

export default {
  component: Calendar,
  title: 'Calendar',
  argTypes: {}
} as ComponentMeta<typeof Calendar>;

const Template = (args) => {
  const [value, setValue] = React.useState(parseDate('2023-01-01'));
  return (
    <Calendar
      {...args}
      onChange={setValue}
      value={value}
    />
  );
};
export const Default = Template.bind({});
