import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
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
    },
    isIndeterminate: {
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}> Accept </Checkbox>
);
export const Default = Template.bind({});
Default.args = { size: 'md' };
