import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid } from '../grid';
import { Box } from '../../box';

export default {
  component: Grid,
  title: 'Grid',
  argTypes: {
    gap: {
      defaultValue: [20, 20]
    }
  }
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Box css={{
      height: 100,
      backgroundColor: 'yellow'
    }}
    />
    <Box css={{
      height: 100,
      backgroundColor: 'orange'
    }}
    />
    <Box css={{
      height: 100,
      backgroundColor: 'green'
    }}
    />
  </Grid>
);
export const Default = Template.bind({});
