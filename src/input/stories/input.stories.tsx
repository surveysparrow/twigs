import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Input } from '../input';

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg', 'xl'],
    },
  },
} as ComponentMeta<typeof Input>;

const Template = (args) => (
  <Input
    {...args}
    css={{
      boxSizing: 'border-box',
    }}
  />
);
export const Default = Template.bind({});
