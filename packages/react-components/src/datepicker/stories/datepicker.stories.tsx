import { parseDate } from '@internationalized/date';
import React from 'react';
import { DatePicker } from '../datepicker';

export default {
  component: DatePicker,
  title: 'Date & Time/DatePicker',
  argTypes: {
    showTimePicker: {
      control: 'boolean',
      description: 'Show time picker'
    },
    hourCycle: {
      control: 'select',
      options: [12, 24],
      description: 'Hour cycle - 12 for 12-hour format with AM/PM, 24 for 24-hour format.'
    },
    showTimezonePicker: {
      control: 'boolean',
      description: 'Show timezone picker'
    },
    showFooter: {
      control: 'boolean',
      description: 'Show footer'
    },
    footerActionText: {
      control: 'text',
      description: 'Footer action button text'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
};

const WithPopOverTemplate = (args) => {
  const [value, setValue] = React.useState(parseDate('2023-07-24'));
  return (
    <DatePicker
      {...args}
      value={value}
      onChange={setValue}
      footerAction={(_, setPopoverOpen) => setPopoverOpen(false)}
      label="Enter date of birth"
    />
  );
};

const WithFormatSegmentsTemplate = (args) => {
  const [value, setValue] = React.useState(parseDate('2023-07-24'));

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return (
    <DatePicker
      {...args}
      value={value}
      onChange={setValue}
      footerAction={(_, setPopoverOpen) => setPopoverOpen(false)}
      label="Enter date of birth"
      formatSegments={(segments) => {
        const formattedSegments = segments.map((segment) => {
          if (segment.type === 'month') {
            return { ...segment, text: months[(segment.value || 1) - 1] };
          }
          if (segment.type === 'literal') {
            return { ...segment, text: '-' };
          }
          return segment;
        });

        // Swap the month and day segments
        [formattedSegments[0], formattedSegments[2]] = [
          formattedSegments[2],
          formattedSegments[0]
        ];

        return formattedSegments;
      }}
    />
  );
};

export const Default = WithPopOverTemplate.bind({});

export const WithFormatSegments = WithFormatSegmentsTemplate.bind({});
