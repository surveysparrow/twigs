import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Switch, SwitchThumb } from '../switch';

export default {
  component: Switch,
  title: 'Switch',
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Switch>;

const Template = (args) => (
  <Switch defaultChecked id="s1" {...args}>
    <SwitchThumb />
  </Switch>
);
export const Default = Template.bind({});
