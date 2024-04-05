import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@src/button';
import { Box } from '@src/box';
import { Link } from '../link';

export default {
  component: Link,
  title: 'Navigation/Link',
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg', 'xl']
    },
    asChild: {
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}> Click here </Link>
);
export const Default = Template.bind({});
