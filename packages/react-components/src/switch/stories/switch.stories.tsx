import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from '../switch';

export default {
  component: Switch,
  title: 'Form/Switch',
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['sm', 'md']
    }
  }
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
  <Switch
    defaultChecked
    id="s1"
    {...args}
  />
);
export const Default = Template.bind({});
