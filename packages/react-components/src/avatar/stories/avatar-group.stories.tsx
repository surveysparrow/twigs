import React from 'react';
import { Avatar } from '../avatar';
import { AvatarGroup } from '../avatar-group';

export default {
  component: Avatar,
  title: 'Avatar',
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
    },
    src: {
      control: 'text'
    },
    limit: {
      control: 'number'
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
  // eslint-disable-next-line react/destructuring-assignment
  <AvatarGroup size={args.size} limit={args.limit} rounded={args.rounded}>
    <Avatar {...args} key="my-avatar-1" />
    <Avatar {...args} key="my-avatar-2" />
    <Avatar {...args} key="my-avatar-3" />
  </AvatarGroup>
);
export const AvatarGrouped = Template.bind({});
