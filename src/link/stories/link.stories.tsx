import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Link } from '../link';

export default {
  component: Link,
  title: 'Link',
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg', 'xl'],
    },
  },
} as ComponentMeta<typeof Link>;

const Template = (args) => (
  <Link {...args}> Click here </Link>
);
export const Default = Template.bind({});
