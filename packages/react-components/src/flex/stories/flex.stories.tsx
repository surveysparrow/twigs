import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from '../flex';

export default {
  component: Flex,
  title: 'Flex'
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex
    {...args}
    css={{
      backgroundColor: 'gray',
      color: 'white',
      height: '200px',
      width: '300px',
      p: 8,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    This is a Flex component
  </Flex>
);
export const Default = Template.bind({});
