import React from 'react';
import { Box } from '../../box';
import { Text } from '../text';

export default {
  component: Text,
  title: 'Typography/Text',
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      defaultValue: 'lg'
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'bold']
    },
    showLines: {
      control: 'number'
    },
    truncate: {
      control: 'boolean'
    }
  }
};

const Template = (args) => (
  <Box
    css={{
      width: 500
    }}
  >
    <Text {...args}>
      {/* eslint-disable-next-line max-len */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  </Box>
);
export const Default = Template.bind({});
