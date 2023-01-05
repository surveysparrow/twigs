import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Avatar } from '../avatar';
import { AvatarBadge as AB } from '../avatar-badge';

export default {
  component: Avatar,
  title: 'Avatar',
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: '3xl'
    },
    isAnonymous: {
      control: 'boolean'
    },
    src: {
      control: 'text',
      defaultValue: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
    },
    rounded: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
      defaultValue: 'full'
    },
  }
} as ComponentMeta<typeof Avatar>;

const Template = (args) => (
    <Avatar {...args}>
      <AB />
    </Avatar>
);
export const AvatarBadge = Template.bind({});
