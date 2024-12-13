import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Img } from '../img';

export default {
  component: Img,
  title: 'Layout/Img',
  argTypes: {
    alt: {
      control: 'text'
    },
    src: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/150'
    }
  }
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = (args) => (
  <Img {...args} src={args?.src || 'https://via.placeholder.com/150'} />
);
export const Default = Template.bind({});
