import React from 'react';
import { PencilIcon, PlusIcon } from '@sparrowengg/twigs-react-icons';
import { Flex } from '../../flex';
import { IconButton } from '../icon-button';

export default {
  component: IconButton,
  title: 'Form/Icon Button',
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
    shape: {
      control: 'select',
      options: ['round', 'squircle']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    }
  }
};

const Template = (args) => (
  <Flex flexDirection="row" gap="20px">
    <IconButton {...args} icon={<PencilIcon />} />
    <IconButton {...args} icon={<PlusIcon />} />
  </Flex>
);
export const Primary = Template.bind({});
