import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Image } from '../image';

export default {
  component: Image,
  title: 'Layout/Image',
  argTypes: {
    alt: {
      control: 'text'
    },
    src: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/150'
    }
  }
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <Image {...args} src={args?.src || 'https://via.placeholder.com/150'} />
);
export const Default = Template.bind({});
