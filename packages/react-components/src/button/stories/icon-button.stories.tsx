import React from 'react';
import { PencilIcon, PlusIcon } from '@sparrowengg/twigs-react-icons';
import { Flex } from '../../flex';
import { IconButton } from '../icon-button';

export default {
  component: IconButton,
  title: 'Form/Icon Button',
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'accent', 'secondary'],
      defaultValue: 'primary'
    },
    disabled: {
      control: 'boolean'
    },
    variant: {
      control: 'select',
      options: ['solid', 'text', 'outline']
    },
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'xl'
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
