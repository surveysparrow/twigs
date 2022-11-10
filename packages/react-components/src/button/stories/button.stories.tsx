import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../button';

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
Primary.args = { variant: 'primary' };
Primary.storyName = 'Buttons';
