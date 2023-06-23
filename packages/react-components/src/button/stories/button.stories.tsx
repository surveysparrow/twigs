import { TickCircleFillIcon } from '@sparrowengg/twigs-react-icons';
import React from 'react';
import { Spinner } from '../../loaders/spinner';
import { Button } from '../button';

export default {
  component: Button,
  title: 'Form/Button',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'bright', 'light', 'error']
    },
    variant: {
      control: 'select',
      options: ['solid', 'ghost', 'outline']
    },
    loading: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
};

const Template = (args) => <Button {...args} loader={<Spinner />}>
  {
    args.loading ?
      'Sending...' : 'Send invites'
  }
</Button>;
export const Buttons = Template.bind({});

const ButtonWithIconR = (args) => <Button {...args} iconRight={<TickCircleFillIcon />}>Submit</Button>;
export const ButtonWithRightIcon = ButtonWithIconR.bind({});

const ButtonWithIconL = (args) => <Button {...args} iconLeft={<TickCircleFillIcon />}>Submit</Button>;
export const ButtonWithLeftIcon = ButtonWithIconL.bind({});
