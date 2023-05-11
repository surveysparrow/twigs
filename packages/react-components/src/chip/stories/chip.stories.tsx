import React from 'react';
import { Chip } from '../chip';

export default {
  component: Chip,
  title: 'Chip',
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'lg',
    rounded: 'sm'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    },
    color: {
      control: 'select',
      options: ['primary', 'default', 'error', 'warning', 'success']
    },
    rounded: {
      control: 'select',
      options: ['sm', 'full']
    },
    variant: {
      control: 'select',
      options: ['outline', 'solid']
    }
  }
};

const Template = (args) => (
  <Chip
    {...args}
  >
    Template
  </Chip>
);
export const Default = Template.bind({});
