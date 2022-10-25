import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../button';
import {
  Provider, Tooltip
} from '../tooltip';
import { Flex } from '../../flex';

export default {
  component: Tooltip,
  title: 'Tooltip',
  argTypes: {
    side: {
      control: 'select',
      options: ['bottom', 'top', 'left', 'right'],
      defaultValue: 'top'
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end']
    },
    sideOffset: {
      control: 'number'
    }
  }
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Provider delayDuration={0}>
    <Flex
      css={{
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Tooltip
        open
        side="top"
        align="end"
        {...args}
        content="Tooltip content is very large asfas asfasf asfasfasf asfasfasfaf asfasf"
      >
        <Button variant="default" size="lg">
          tooltip button
        </Button>
      </Tooltip>
    </Flex>
  </Provider>
);
export const Default = Template.bind({});
