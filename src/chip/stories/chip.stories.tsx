import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip } from '../chip';

export default {
  component: Chip,
  title: 'Chip',
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    },
    color: {
      control: 'select',
      options: ['primary', 'info']
    },
    isRounded: {
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Chip
    {...args}
  >
    Template
  </Chip>
);
export const Default = Template.bind({});
Default.args = { color: 'info', size: 'lg', showCloseButton: true };
