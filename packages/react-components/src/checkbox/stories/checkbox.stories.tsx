import React from 'react';
import { Checkbox } from '../checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md']
    },
    checked: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
};

const Template = (args) => (
  <Checkbox {...args}> Accept </Checkbox>
);
export const Default = Template.bind({});
