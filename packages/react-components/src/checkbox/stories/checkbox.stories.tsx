import React from 'react';
import { Checkbox } from '../checkbox';

export default {
  component: Checkbox,
  title: 'Form/Checkbox',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md']
    },
    checked: {
      control: 'radio',
      options: [true, false, 'indeterminate']
    },
    disabled: {
      control: 'boolean'
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'default',
        'error',
        'warning',
        'success'
      ]
    }
  }
};

const Template = (args) => (
  <Checkbox {...args}> Accept terms and conditions </Checkbox>
);
export const Default = Template.bind({});
