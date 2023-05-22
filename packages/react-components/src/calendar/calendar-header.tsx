import React from 'react';
import { AriaButtonProps } from 'react-aria';
import { styled } from '../../stitches.config';
import { IconButton } from '../button';
import { Flex } from '../flex';

type Button = {
  icon: React.ReactElement,
} & AriaButtonProps

export const CalendarButton = ({ icon, onPress, ...rest }: Button) => {
  return (
    <IconButton
      color="default"
      {...rest}
      onClick={onPress as any}
      icon={icon}
      size="lg"
    />
  );
};

export const Header = styled(Flex, {
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '64px'
});

export const CalendarMonthYear = styled('span', {
  color: '$neutral800',
  fontSize: '$md',
  fontWeight: '$7'
});
