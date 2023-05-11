import { TickCircleFillIcon } from '@sparrowengg/twigs-react-icons';
import React from 'react';
import { Button } from '../button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'bright']
    },
    variant: {
      control: 'select',
      options: ['solid', 'ghost', 'outline']
    },
    isLoading: {
      control: 'boolean'
    },
    isDisabled: {
      control: 'boolean'
    }
  }
};

const Template = (args) => <Button {...args}>Submit</Button>;
export const Buttons = Template.bind({});

const ButtonWithIconR = (args) => <Button {...args} iconRight={<TickCircleFillIcon />}>Submit</Button>;
export const ButtonWithRightIcon = ButtonWithIconR.bind({});

const ButtonWithIconL = (args) => <Button {...args} iconLeft={<TickCircleFillIcon />}>Submit</Button>;
export const ButtonWithLeftIcon = ButtonWithIconL.bind({});
