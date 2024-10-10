import React from 'react';
import { LineLoader } from '../line';
import { Box } from '../../box';

export default {
  component: LineLoader,
  title: 'Loaders/Line',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost']
    }
  }
};

const Template = (args) => {
  return <LineLoader {...args} />;
};

const App = (args) => {
  return (
    <Box
      css={{
        padding: '$4',
        backgroundColor:
          !args.color || args.color === 'ghost' ? '$black500' : 'transparent'
      }}
    >
      <Template {...args} />
    </Box>
  );
};
export const Default = App.bind({});
