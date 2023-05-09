import React from 'react';
import { PencilIcon, PlusIcon } from '@sparrowengg/twigs-react-icons';
import { Flex } from '../../flex';
import { IconButton } from '../icon-button';

export default {
  component: IconButton,
  title: 'Icon Button',
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'accent', 'secondary'],
      defaultValue: 'primary'
    },
    isDisabled: {
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
  <Flex css={{
    gap: '20px',
    flexDirection: 'row'
  }}
  >
    <IconButton {...args} icon={<PencilIcon />} />
    <IconButton {...args} icon={<PlusIcon />} />
  </Flex>
);
export const Primary = Template.bind({});
