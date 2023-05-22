import React from 'react';
import { AriaButtonProps } from 'react-aria';
import { IconButton } from '../button';

type Button = {
  icon: React.ReactElement,
} & AriaButtonProps

export const CalendarButton = ({ icon, onPress, ...rest }: Button) => {
  return (
    <IconButton
      color="default"
      {...rest}
      onClick={(onPress as any)}
      icon={icon}
      size="lg"
    />
  );
};
