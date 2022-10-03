import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Checkbox } from '../checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    isChecked: {
      control: 'boolean',
    },
    isIndeterminate: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template = (args) => (
  <Checkbox {...args}> Accept </Checkbox>
);
export const Default = Template.bind({});
