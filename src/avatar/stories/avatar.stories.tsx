import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '../avatar';

export default {
  component: Avatar,
  title: 'Avatar',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: '3xl',
    },
    isAnonymous: {
      control: 'boolean',
    },
    src: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template = (args) => (
  <Avatar {...args}>
    <AvatarImage
      {...args}
    />
    <AvatarFallback delayMs={600}>CT</AvatarFallback>
  </Avatar>
);
export const Default = Template.bind({});
