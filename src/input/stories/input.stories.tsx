import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
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

const Template: ComponentStory<typeof Input> = (args) => (
  <Input
    {...args}
  />
);
export const Default = Template.bind({});
