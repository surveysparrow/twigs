import { CSS } from '@stitches/react';
import { ReactNode, createContext, useContext } from 'react';
import { DateValue } from 'react-aria';
import { CalendarState } from 'react-stately';
import { config } from '../stitches.config';
import { TextProps } from '../text';

export type CalendarSize = 'lg' | 'md';

export type CalendarControlProps = {
  showTimezonePicker?: boolean;
  showTimePicker?: boolean;
  size?: CalendarSize;
  showFooter?: boolean;
  footerActionText?: string;
  footerAction?: (state: CalendarState) => void;
  renderFooter?: (state: CalendarState) => ReactNode;
  onDaySelect?: (date: DateValue) => void;
  onMonthSelect?: (date: DateValue) => void;
  onYearSelect?: (date: DateValue) => void;
  containerCSS?: CSS<typeof config>;
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

export const CALENDAR_SIZE_TO_FONT_SIZE: Record<
  CalendarSize,
  TextProps['size']
> = {
  lg: 'md',
  md: 'sm'
};

export const CALENDAR_SIZE_TO_WIDTH: Record<CalendarSize, number> = {
  lg: 340,
  md: 260
};

export const CALENDAR_SIZE_TO_BORDER_RADIUS: Record<
  CalendarSize,
  CSS<typeof config>['borderRadius']
> = {
  lg: '$2xl',
  md: '$xl'
};

export const CALENDAR_SIZE_TO_DAY_BTN_SIZE: Record<
  CalendarSize,
  CSS<typeof config>['width']
> = {
  lg: '$10',
  md: '$8'
};

export const CALENDAR_SECTION_NAMES = {
  start: 'start',
  end: 'end'
} as const;

export type CalendarSectionNameType = keyof typeof CALENDAR_SECTION_NAMES;

export const CalendarNavigationContext = createContext<{
  calendarNavigationEnabled: {
    isEnabled: boolean;
    sectionName: CalendarSectionNameType;
  } | null;
  handleCalendarNavigation:(values: {
    isEnabled: boolean;
    sectionName: CalendarSectionNameType;
  } | null) => void;
    }>({
      calendarNavigationEnabled: null,
      handleCalendarNavigation: () => {}
    });

export const useCalendarNavigationContext = () => {
  return useContext(CalendarNavigationContext);
};
