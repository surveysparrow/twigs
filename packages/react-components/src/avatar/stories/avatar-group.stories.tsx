import React from 'react';
import { Avatar } from '../avatar';
import { AvatarGroup } from '../avatar-group';

export default {
  component: AvatarGroup,
  title: 'Data Display/Avatar/Avatar Group',
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
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
    },
    limitExceededLabel: {
      control: 'string'
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
  <AvatarGroup {...args}>
    {
      [...Array(10)].map((_, i) => (
        <Avatar
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          src={`https://i.pravatar.cc/150?img=${i}`}
        />
      ))
    }
  </AvatarGroup>
);
export const AvatarGrouped = Template.bind({});
