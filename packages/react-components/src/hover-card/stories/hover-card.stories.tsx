import React from 'react';
import { Avatar } from '../../avatar';
import { Heading } from '../../heading';
import { Text } from '../../text';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../hover-card';

export default {
  component: HoverCard,
  title: 'Overlay/HoverCard',
  args: {
    arrow: true
  },
  argTypes: {
    arrow: {
      control: {
        type: 'boolean'
      }
    }
  }
};

// eslint-disable-next-line react/prop-types
const Template = ({ arrow, ...args }) => (
  <HoverCard {...args}>
    <HoverCardTrigger>
      <Avatar
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=512&h=512&dpr=2&q=80"
        size="5xl"
      />
    </HoverCardTrigger>
    <HoverCardContent arrow={arrow}>
      <Avatar
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=512&h=512&dpr=2&q=80"
        size="xl"
      />
      <Heading size="h5"> Jane Doe </Heading>
      <Text> Head of design </Text>
    </HoverCardContent>
  </HoverCard>
);
export const Default = Template.bind({});
