import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Box } from '../../box';
import { Text } from '../../text';
import { TimePicker } from '../timepicker';

export default {
  component: TimePicker,
  title: 'Date & Time/TimePicker',
  argTypes: {
    hourCycle: {
      control: 'select',
      options: [12, 24]
    },
    granularity: {
      control: 'select',
      options: ['hour', 'minute', 'second']
    }
  }
} as ComponentMeta<typeof TimePicker>;

const Template = (args) => {
  return <TimePicker {...args} label="Enter time" />;
};

export const Full = () => {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: '$4' }}>
      <Box css={{ display: 'flex', gap: '$15' }}>
        <Box>
          <Text weight="bold">Basic TimePicker</Text>
          <TimePicker label="Select time" />
        </Box>
        <Box>
          <Text weight="bold">12 Hour Format</Text>
          <TimePicker label="12 Hour Time" hourCycle={12} />
        </Box>
        <Box>
          <Text weight="bold">24 Hour Format</Text>
          <TimePicker label="24 Hour Time" hourCycle={24} />
        </Box>
      </Box>
      <Box css={{ display: 'flex', gap: '$15' }}>
        <Box>
          <Text weight="bold">Hour Granularity</Text>

          <TimePicker label="Hour Only" granularity="hour" />
        </Box>

        <Box>
          <Text weight="bold">Minute Granularity</Text>

          <TimePicker label="Hour and Minute" granularity="minute" />
        </Box>

        <Box>
          <Text weight="bold">Second Granularity</Text>

          <TimePicker label="Full Time with Seconds" granularity="second" />
        </Box>
      </Box>
    </Box>
  );
};
export const Default = Template.bind({});
