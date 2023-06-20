import React from 'react';
import { Avatar } from '../avatar';
import { AvatarBadge as AB } from '../avatar-badge';

export default {
  component: AB,
  title: 'Data Display/Avatar/Avatar Badge',
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
    },
    isAnonymous: {
      control: 'boolean'
    },
    src: {
      control: 'text'
    },
    rounded: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']
    }
  },
  args: {
    src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=512&h=512&dpr=2&q=80',
    size: '3xl',
    rounded: 'full'
  }
};

const Template = (args) => (
  <Avatar {...args}>
    <AB />
  </Avatar>
);
export const AvatarBadge = Template.bind({});
