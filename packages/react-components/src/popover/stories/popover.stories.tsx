import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverClose,
  PopoverContent
} from '../popover';
import { Button } from '../../button';

export default {
  component: Popover,
  title: 'Overlay/Popover',
  argTypes: {
    open: {
      control: 'boolean'
    },
    modal: {
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <PopoverTrigger asChild>
      <Button>Trigger the popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      Hello there
      <PopoverClose> Close me</PopoverClose>
      <PopoverArrow />
    </PopoverContent>
  </Popover>
);
export const Default = Template.bind({});
