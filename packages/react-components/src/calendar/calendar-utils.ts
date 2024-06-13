import { CSS } from '@stitches/react';
import { createContext, useContext } from 'react';
import { config } from '../stitches.config';
import { TextProps } from '../text';

export type CalendarSize = 'lg' | 'md';

export type CalendarControlProps = {
  showTimezonePicker?: boolean;
  showTimePicker?: boolean;
  size?: CalendarSize;
  showFooter?: boolean;
  footerActionText?: string;
};

export const CalendarContext = createContext<{
  size: CalendarSize;
}>({
  size: 'lg'
});

export const useCalendarContext = () => {
  return useContext(CalendarContext);
};

export const CALENDAR_SIZE_TO_YEAR_MONTH_BTN_HEIGHT: Record<
  CalendarSize,
  CSS<typeof config>['height']
> = {
  lg: '$20',
  md: '$14'
};

export const CALENDAR_SIZE_TO_FONT_SIZE: Record<CalendarSize, TextProps['size']> = {
  lg: 'md',
  md: 'sm'
};

export const CALENDAR_SIZE_TO_WIDTH: Record<CalendarSize, number> = {
  lg: 340,
  md: 260
};

export const CALENDAR_SIZE_TO_BORDER_RADIUS: Record<CalendarSize, CSS<typeof config>['borderRadius']> = {
  lg: '$2xl',
  md: '$xl'
};
