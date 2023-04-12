import React, { useEffect, useState } from 'react';
import { CalendarIcon } from '@sparrowengg/twigs-react-icons';
import dayjs from 'dayjs';
import { Calendar } from '../calendar';
import { CalendarBaseProps } from '../calendar/interface';
import { Input } from '../input';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

export const DatePicker = ({
  disablePastDays = false,
  onChange = undefined,
  value = undefined
}: CalendarBaseProps) => {
  const [open, setOpen] = useState(false);

  const formatDate = (date) => {
    const formattedDate = dayjs(date).format('MM/D/YYYY');
    return formattedDate;
  };
  const [date, setDate] = useState(formatDate(new Date(value)));

  const onDateChange = (val) => {
    setDate(formatDate(val[0]));
    if (onChange) {
      onChange([new Date(val)]);
    }
  };

  useEffect(() => {
    setOpen(false);
  }, [date]);

  return (
    <Popover open={open}>
      <PopoverTrigger style={{ all: 'unset' }} onClick={() => setOpen(true)}>
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
          onChange={onDateChange}
          disablePastDays={disablePastDays}
          value={new Date(date)}
        />

      </PopoverContent>
    </Popover>
  );
};
