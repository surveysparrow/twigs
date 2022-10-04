import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
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

const Template: ComponentStory<typeof Switch> = (args) => (
  <Switch defaultChecked id="s1" {...args}>
    <SwitchThumb />
  </Switch>
);
export const Default = Template.bind({});
