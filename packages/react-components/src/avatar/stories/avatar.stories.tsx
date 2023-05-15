import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Avatar as AvatarComponent } from '../avatar';

export default {
  component: AvatarComponent,
  title: 'Avatar',
  args: {
    src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=512&h=512&dpr=2&q=80',
    size: '3xl',
    rounded: 'full'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
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
  }
} as ComponentMeta<typeof AvatarComponent>;

const Template = (args) => (
  <AvatarComponent {...args} />
);
export const Avatar = Template.bind({});
