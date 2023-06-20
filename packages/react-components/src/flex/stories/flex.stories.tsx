import React from 'react';
import { Flex } from '../flex';

export default {
  component: Flex,
  title: 'Layout/Flex'
};

const Template = (args) => (
  <Flex
    {...args}
    flexDirection="row"
    css={{
      backgroundColor: 'gray',
      color: 'white',
      height: '200px',
      width: '300px',
      p: 8
    }}
  >
    <span>Flex</span>
    <span>Flex</span>
  </Flex>
);
export const Default = Template.bind({});
