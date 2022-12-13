import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../button';

const PlusIcon = () => (
  <svg viewBox="0 0 32 32" color='currentColor' fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M24 16H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 8V24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
);

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'accent', 'secondary']
    },
    isLoading: {
      control: 'boolean'
    },
    isTransparent: {
      control: 'boolean'
    },
    isText: {
      control: 'boolean'
    },
    isDisabled: {
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Submit</Button>;
export const Primary = Template.bind({});

const ButtonWithIconT = (args) =>  <Button {...args} iconLeft={<PlusIcon />}>Submit</Button>;
export const ButtonWithIcon = ButtonWithIconT.bind({});

Primary.args = { variant: 'primary' };
Primary.storyName = 'Buttons';
