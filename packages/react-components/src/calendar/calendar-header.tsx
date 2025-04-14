import { CalendarDate } from '@internationalized/date';
import React from 'react';
import { AriaButtonProps, DateValue, useDateFormatter } from 'react-aria';
import { prefixClassName } from '@src/utils';
import { Button, IconButton } from '../button';
import { Flex } from '../flex';
import { styled } from '../stitches.config';
import { CALENDAR_VIEW } from './calendar';
import { useCalendarContext } from './calendar-utils';

type ButtonType = {
  icon: React.ReactElement;
  isDisabled?: boolean;
} & AriaButtonProps & Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'>;

export const CalendarNavigationButton = ({
  icon,
  onPress,
  isDisabled,
  ...rest
}: ButtonType) => {
  const calendarContext = useCalendarContext();

  return (
    <IconButton
      color="secondary"
      variant="ghost"
      {...rest}
      onClick={onPress as any}
      icon={icon}
      size={calendarContext.size}
      type="button"
      disabled={isDisabled}
    />
  );
};

export const CalendarHeader = styled(Flex, {
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '$16',

  variants: {
    calendarSize: {
      lg: {
        padding: '$6 $8'
      },
      md: {
        padding: '$6 $8'
      },
      sm: {
        padding: '$6 $6',
        height: '$12'
      }
    }
  },
  defaultVariants: {
    calendarSize: 'lg'
  }
});

export const CalendarTitle = ({
  value,
  timezone,
  setCurrentCalendarView
}: {
  value: CalendarDate;
  timezone: string;
  setCurrentCalendarView: (view: keyof typeof CALENDAR_VIEW) => void;
}) => {
  const calendarContext = useCalendarContext();
  const formatMonth = useDateFormatter({
    month: 'long'
  });

  return (
    <Flex gap="$2" className={prefixClassName('calendar__title')}>
      <Button
        color="default"
        size={calendarContext.size}
        className={prefixClassName('calendar__month-picker')}
        onClick={() => {
          setCurrentCalendarView(CALENDAR_VIEW.MONTH);
        }}
      >
        {formatMonth.format(value.toDate(timezone))}
      </Button>
      <Button
        color="default"
        size={calendarContext.size}
        className={prefixClassName('calendar__year-picker')}
        onClick={() => {
          setCurrentCalendarView(CALENDAR_VIEW.YEAR);
        }}
      >
        {value.year}
      </Button>
    </Flex>
  );
};

export const RangeCalendarTitle = ({
  value,
  timezone,
  setCurrentCalendarView
}: {
  value: DateValue;
  timezone: string;
  setCurrentCalendarView: (view: keyof typeof CALENDAR_VIEW) => void;
}) => {
  const calendarContext = useCalendarContext();
  const formatMonth = useDateFormatter({
    month: 'long'
  });

  return (
    <Flex gap="$2" className={prefixClassName('calendar__title')}>
      <Button
        color="default"
        variant="solid"
        size={calendarContext.size}
        onClick={() => {
          setCurrentCalendarView(CALENDAR_VIEW.YEAR);
        }}
        className={prefixClassName('calendar__year-picker')}
      >
        {value.year}
      </Button>
      <Button
        color="default"
        variant="solid"
        size={calendarContext.size}
        onClick={() => {
          setCurrentCalendarView(CALENDAR_VIEW.MONTH);
        }}
        className={prefixClassName('calendar__month-picker')}
      >
        {formatMonth.format(value.toDate(timezone))}
      </Button>
    </Flex>
  );
};
