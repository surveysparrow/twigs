import React from 'react';
import { Text } from '../text';

export default {
  component: Text,
  title: 'Typography/Text',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      defaultValue: 'lg'
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'bold']
    }
  }
};

const Template = (args) => (
  <Text {...args}>
    Sample text
  </Text>
);
export const Default = Template.bind({});
