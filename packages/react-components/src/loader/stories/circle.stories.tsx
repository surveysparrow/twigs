import React from 'react';
import { CircleLoader } from '../circle';
import { Box } from '../../box';

export default {
  component: CircleLoader,
  title: 'Loaders/Circle',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost']
    }
  }
};

const Template = (args) => {
  return (
    <CircleLoader {...args} />
  );
};

const App = (args) => {
  return (
    <Box css={{
      padding: '$4',
      backgroundColor: (!args.color || args.color === 'ghost') ? '$black500' : 'transparent'
    }}
    >
      <Template {...args} />
    </Box>
  );
};
export const Default = App.bind({});
