import React, { useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useLilius } from 'use-lilius';
import { Box } from '../box';
import { Flex } from '../flex';
import {
  CalendarActionsContainer, CalendarMonthYear, NextButton, PreviousButton
} from './actions';
import {
  CalendarDay, CalendarDayBox, CalendarDaysContainer, CalendarDaysRow
} from './day';
import { CalendarWeek, StyledWeekContainer } from './week';

function eachDayOfInterval(startDate: Date, endDate: Date) {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const days: Dayjs[] = [];

  for (let day = start; day <= end; day = day.add(1, 'day')) {
    days.push(day);
  }
  return days;
}

export const CalendarRange = () => {
  const {
    calendar,
    deselect,
    isSelected,
    select,
    selected,
    selectRange,
    viewNextMonth,
    viewPreviousMonth
  } = useLilius({ numberOfMonths: 2, selected: [new Date()] });

  useEffect(() => {
    // console.log(selected)
  }, [selected]);

  const visibleMonths = calendar.map(([[firstDay]]) => dayjs(firstDay).add(1, 'month').format('MMMM YYYY'));

  return (
    <Box
      css={{
        maxWidth: '600px'
      }}
    >
      <CalendarActionsContainer>
        <PreviousButton
          viewPreviousMonth={viewPreviousMonth}
        />

        {visibleMonths.map((month, index) => {
          return (
            <CalendarMonthYear
              weight="bold"
              key={dayjs(month).add(1, 'month').toISOString()}
              css={{
                marginRight: index === 0 ? '80px' : 'none',
                marginLeft: index === 1 ? '80px' : 'none'
              }}
            >
              {dayjs(month).format('MMMM YYYY')}
            </CalendarMonthYear>
          );
        })}

        <NextButton
          viewNextMonth={viewNextMonth}
        />
      </CalendarActionsContainer>

      <Flex css={{
        direction: 'row',
        gap: '$10',
        justifyContent: 'space-between'
      }}
      >
        {calendar.map((month) => (
          <Box key={month[0][0].toDateString()}>
            <Box>
              <StyledWeekContainer>
                {month[0].map((day) => {
                  const weekName = dayjs(day).format('ddd');
                  return (
                    <CalendarWeek key={`${day}`}>
                      {weekName}
                    </CalendarWeek>
                  );
                })}
              </StyledWeekContainer>

              {month.map((week) => (
                <CalendarDaysContainer
                  key={`month-${month[0][0].toDateString()}-week-${week[0]}`}
                >
                  <CalendarDaysRow id="my-row">
                    {week.map((day, index) => {
                      return (
                        <CalendarDayBox
                          data-in-range={dayjs(day).isBetween(dayjs(selected[0]).startOf('day'), dayjs(selected[selected.length - 1]).endOf('day'))}
                          data-is-first-weekday={index === 0}
                          data-is-last-weekday={index === week.length - 1}
                          data-range-start={isSelected(day) && dayjs(day).isSame(selected[0])}
                          data-range-end={isSelected(day) && dayjs(day).isSame(selected[selected.length - 1])}
                        >
                          <CalendarDay
                            data-in-range={dayjs(day).isBetween(dayjs(selected[0]).startOf('day'), dayjs(selected[selected.length - 1]).endOf('day'))}
                            isSelected={isSelected(day)}
                            data-selected={isSelected(day)}
                            isToday={dayjs().isSame(day, 'day')}
                            rounded="full"
                            key={`${day}`}
                            onClick={() => {
                              const sorted = selected.sort((a, b) => (dayjs(a).isBefore(b) ? 1 : -1));
                              if (sorted.length === 0) {
                                select(day);
                              } else if (isSelected(day)) {
                                if (selected.length === 1) {
                                  deselect(day);
                                } else {
                                  const range = eachDayOfInterval(sorted[0], day);
                                  const diff = sorted.filter((d) => range.map((a) => dayjs(a).get('millisecond')).includes(dayjs(d).get('millisecond')));
                                  selectRange(diff[0], diff[diff.length - 1], true);
                                }
                              } else {
                                selectRange(sorted[0], day, true);
                              }
                            }}
                          >
                            {dayjs(day).format('D')}
                          </CalendarDay>
                        </CalendarDayBox>
                      );
                    })}
                  </CalendarDaysRow>
                </CalendarDaysContainer>
              ))}
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
