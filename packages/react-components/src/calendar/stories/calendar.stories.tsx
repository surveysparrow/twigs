/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { CalendarIcon } from '@sparrowengg/twigs-react-icons';
import dayjs from 'dayjs';
import { Calendar } from '../calendar';
import { Input } from '../../input';
import { Popover, PopoverContent, PopoverTrigger } from '../../popover';
import { Box } from '../../box';
import { Flex } from '../../flex';
import { Button } from '../../button';
import { Text } from '../../text';

export default {
  component: Calendar,
  title: 'Calendar',
  argTypes: {}
} as ComponentMeta<typeof Calendar>;

const Template = (args) => {
  return (
    <Calendar
      {...args}
    />
  );
};
export const Default = Template.bind({});

const WithPopOverTemplate = (args) => {
  const formatDate = (date) => {
    const formattedDate = dayjs(date).format('MM/D/YYYY');
    return formattedDate;
  };

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(formatDate(new Date()));

  const onDateChange = (val) => {
    setDate(formatDate(val[0]));
  };

  return (
    <Popover open={open}>
      <PopoverTrigger
        style={{ all: 'unset' }}
        onClick={() => setOpen(true)}
      >
        <Input
          value={date}
          onChange={() => { }}
          size="lg"
          css={{
            width: 200,
            textAlign: 'left'
          }}
          iconRight={<CalendarIcon />}
        />
      </PopoverTrigger>
      <PopoverContent css={{
        width: 340,
        p: 0
      }}
      >
        <Calendar
          {...args}
          onChange={onDateChange}
          defaultValue={new Date(date)}
        />

        <Flex
          css={{
            px: '$14',
            py: '$6',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid $neutral100'
          }}
        >
          <Box>
            <Text weight="bold">
              {' '}
              {dayjs(new Date(date)).format('MMM DD, YYYY')}
            </Text>
          </Box>
          <Button size="lg" onClick={() => setOpen(false)}>
            Schedule
          </Button>
        </Flex>

      </PopoverContent>
    </Popover>
  );
};

export const WithPopOver = WithPopOverTemplate.bind({});
