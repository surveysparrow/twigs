import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { styled } from '../../stitches.config';
import { IconButton } from '../button';
import { Flex } from '../flex';
import { Text } from '../text';

type PrevActionType = {
  viewPreviousMonth: () => void
}
type NextActionType = {
  viewNextMonth: () => void
}

export const PreviousButton = ({ viewPreviousMonth }: PrevActionType) => {
  return (
    <IconButton
      icon={<ChevronLeftIcon />}
      variant="bright"
      onClick={viewPreviousMonth}
      aria-label="Previous month"
      size="lg"
    />
  );
};

export const NextButton = ({ viewNextMonth }: NextActionType) => {
  return (
    <IconButton
      icon={<ChevronRightIcon />}
      onClick={viewNextMonth}
      variant="bright"
      size="lg"
      aria-label="Next Month"
    />
  );
};

export const CalendarActionsContainer = styled(Flex, {
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const CalendarMonthYear = styled(Text, {
  color: '$neutral800',
  fontSize: '$md'
});
