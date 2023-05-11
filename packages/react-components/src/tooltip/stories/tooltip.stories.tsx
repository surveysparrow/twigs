import React from 'react';
import { Button } from '../../button';
import {
  TooltipProvider, Tooltip
} from '../tooltip';
import { Flex } from '../../flex';

export default {
  component: Tooltip,
  title: 'Tooltip',
  args: {
    content: 'Twigs tooltip text',
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
      options: ['sm', 'md']
    }
  }
};

const Template = (args) => (
  <TooltipProvider delayDuration={0}>
    <Flex
      justifyContent="center"
      alignItems="center"
      css={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <Tooltip
        open
        side="top"
        align="end"
        {...args}
      >
        <Button color="default" size="lg">
          tooltip button
        </Button>
      </Tooltip>
    </Flex>
  </TooltipProvider>
);
export const Default = Template.bind({});
