import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Heading } from '../heading';

export default {
  component: Heading,
  title: 'Heading',
  argTypes: {
    size: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
  },
} as ComponentMeta<typeof Heading>;

const Template = (args) => (
  <Heading {...args}> Accept </Heading>
);
export const Default = Template.bind({});
