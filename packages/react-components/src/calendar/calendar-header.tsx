import React from 'react';
import { styled } from '../../stitches.config';
import { IconButton } from '../button';
import { Flex } from '../flex';

export const CalendarButton = (props) => {
  const { icon, onPress, ...rest } = props;
  return (
    <IconButton
      variant="bright"
      {...rest} onClick={onPress}
      icon={icon}
      size='lg'
    />
  )
}

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
