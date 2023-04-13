import React from 'react';
import { IconButton } from "../button"

type Button = {
  icon: React.ReactElement,
  onPress: () => void
}

export const CalendarButton = ({ icon, onPress, ...rest }: Button) => {
  return (
    <IconButton
      variant="bright"
      {...rest} onClick={onPress}
      icon={icon}
      size='lg'
    />
  )
}