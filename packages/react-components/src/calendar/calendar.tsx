import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useLilius } from 'use-lilius';
import { styled } from '../../stitches.config';
import { Box } from '../box';
import { CalendarDay, CalendarDaysContainer, CalendarDaysRow } from './day';
import { CalendarWeek, StyledWeekContainer } from './week';
import {
  CalendarActionsContainer, CalendarMonthYear, NextButton, PreviousButton
} from './actions';
import { CalendarBaseProps } from './interface';

dayjs.extend(isBetween);

const StyledContainer = styled(Box, {
  padding: '$10',
  width: '340px'
});

export const Calendar = ({
  disablePastDays = false,
  onChange,
  value,
  format
}: CalendarBaseProps) => {
  const {
    calendar, isSelected, toggle, viewing, viewNextMonth, viewPreviousMonth, selected, setViewing
  } = useLilius({ selected: value ? [new Date(value!)] : [new Date()] });

  useEffect(() => {
    if (onChange) {
      onChange(dayjs(selected[0]).format(format));
    }
  }, [selected]);

  useEffect(() => {
    setViewing(selected.length > 0 ? selected[0] : new Date(value!));
  }, [selected, setViewing]);

  return (
    <StyledContainer>
      <CalendarActionsContainer>
        <PreviousButton
          viewPreviousMonth={viewPreviousMonth}
        />
        <CalendarMonthYear weight="bold">{dayjs(viewing).format('MMMM YYYY')}</CalendarMonthYear>
        <NextButton
          viewNextMonth={viewNextMonth}
        />
      </CalendarActionsContainer>

      <StyledWeekContainer>
        {calendar[0][0].map((day) => {
          const weekName = dayjs(day).format('ddd');
          return (
            <CalendarWeek key={`${day}`}>
              {weekName}
            </CalendarWeek>
          );
        })}
      </StyledWeekContainer>

      <CalendarDaysContainer>
        {calendar[0].map((week) => (
          <CalendarDaysRow
            key={`week-${week[0]}`}
          >
            {week.map((day) => {
              const isPastDay = (disablePastDays && dayjs(day).isBefore(new Date(), 'day')) || false;
              return (
                <CalendarDay
                  key={`${day}`}
                  isActive={dayjs(day).isBetween(dayjs(viewing).startOf('month'), dayjs(viewing).endOf('month'))}
                  isSelected={isSelected(day)}
                  isToday={dayjs().isSame(day, 'day')}
                  onClick={() => toggle(day, true)}
                  isDisabled={isPastDay}
                  tabIndex={isPastDay ? -1 : 0}
                >
                  {dayjs(day).format('D')}
                </CalendarDay>
              );
            })}
          </CalendarDaysRow>
        ))}
      </CalendarDaysContainer>
    </StyledContainer>
  );
};
