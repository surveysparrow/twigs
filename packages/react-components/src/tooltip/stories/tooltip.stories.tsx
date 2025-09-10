import React from 'react';
import { Button } from '../../button';
import { TooltipProvider, Tooltip } from '../tooltip';

export default {
  component: Tooltip,
  title: 'Overlay/Tooltip',
  args: {
    content: 'Tooltip message will show up here',
    side: 'top'
  },
  argTypes: {
    content: {
      control: 'text'
    },
    side: {
      control: 'select',
      options: ['bottom', 'top', 'left', 'right']
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end']
    },
    sideOffset: {
      control: 'number'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
};

const Template = (args) => (
  <TooltipProvider delayDuration={0}>
    <Tooltip side="top" align="end" {...args}>
      <Button color="default" size="lg">
        tooltip button
      </Button>
    </Tooltip>
  </TooltipProvider>
);
export const Default = Template.bind({});
