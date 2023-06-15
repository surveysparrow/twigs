import React from 'react';
import { AriaButtonProps } from 'react-aria';
import { styled } from '../../stitches.config';
import { IconButton } from '../button';
import { Flex } from '../flex';

type Button = {
  icon: React.ReactElement,
  isDisabled?: boolean
} & AriaButtonProps

export const CalendarNavigationButton = ({
  icon, onPress, isDisabled, ...rest
}: Button) => {
  return (
    <IconButton
      color="default"
      {...rest}
      onClick={onPress as any}
      icon={icon}
      size="lg"
      disabled={isDisabled}
    />
  );
};

export const CalendarHeader = styled(Flex, {
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '64px'
});

export const CalendarMonth = styled('span', {
  color: '$neutral800',
  fontSize: '$md',
  fontWeight: '$7'
});
