import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Text } from '../text';

export default {
  component: Text,
  title: 'Text',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      defaultValue: 'lg',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'bold'],
    },
  },
} as ComponentMeta<typeof Text>;

const Template = (args) => (
  <Text {...args}>
    Sample text
  </Text>
);
export const Default = Template.bind({});