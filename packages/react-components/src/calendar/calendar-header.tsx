import { CalendarDate } from '@internationalized/date';
import React from 'react';
import { AriaButtonProps, DateValue, useDateFormatter } from 'react-aria';
import { Button, IconButton } from '../button';
import { Flex } from '../flex';
import { styled } from '../stitches.config';
import { CALENDAR_VIEW } from './calendar';
import {
  CalenderSectionNamesType,
  useCalendarContext,
  useCalenderNavigationContext
} from './calendar-utils';

type ButtonType = {
  icon: React.ReactElement;
  isDisabled?: boolean;
} & AriaButtonProps;

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
    <Flex gap="$2">
      <Button
        color="default"
        size={calendarContext.size}
        onClick={() => {
          setCurrentCalendarView(CALENDAR_VIEW.YEAR);
        }}
      >
        {value.year}
      </Button>
      <Button
        color="default"
        size={calendarContext.size}
        onClick={() => {
          setCurrentCalendarView(CALENDAR_VIEW.MONTH);
        }}
      >
        {formatMonth.format(value.toDate(timezone))}
      </Button>
    </Flex>
  );
};

export const RangeCalendarTitle = ({
  value,
  timezone,
  setCurrentCalendarView,
  sectionName
}: {
  value: DateValue;
  timezone: string;
  setCurrentCalendarView: (view: keyof typeof CALENDAR_VIEW) => void;
  sectionName: CalenderSectionNamesType;
}) => {
  const calendarContext = useCalendarContext();
  const formatMonth = useDateFormatter({
    month: 'long'
  });
  const { handleCalenderNavigation } = useCalenderNavigationContext();

  return (
    <Flex gap="$2">
      <Button
        color="default"
        variant="solid"
        size={calendarContext.size}
        onClick={() => {
          setCurrentCalendarView(CALENDAR_VIEW.YEAR);
          handleCalenderNavigation({
            isEnabled: true,
            sectionName
          });
        }}
      >
        {value.year}
      </Button>
      <Button
        color="default"
        variant="solid"
        size={calendarContext.size}
        onClick={() => {
          setCurrentCalendarView(CALENDAR_VIEW.MONTH);
          handleCalenderNavigation({
            isEnabled: true,
            sectionName
          });
        }}
      >
        {formatMonth.format(value.toDate(timezone))}
      </Button>
    </Flex>
  );
};
