import { styled } from '../../stitches.config';
import { Box } from '../box';

export const CalendarDayBox = styled(Box, {
  '&[data-range-end="true"], &[data-is-last-weekday="true"]': {
    borderTopRightRadius: '100%',
    borderBottomRightRadius: '100%'
  },
  '&[data-in-range="true"], &[data-range-end="true"], &[data-range-start="true"]': {
    background: '$secondary100'
  },
  '&[data-range-end="true"] button': {
    backgroundColor: '$secondary500',
    color: '$white900'
  },

  '&[data-range-start="true"], &[data-is-first-weekday="true"]': {
    borderTopLeftRadius: '100%',
    borderBottomLeftRadius: '100%'
  }
});

export const CalendarDay = styled('button', {
  background: '$white900',
  border: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$neutral900',
  fontSize: '$8',
  fontWeight: '$5',
  height: '$10',
  width: '$10',
  cursor: 'pointer',
  '&[data-in-range="true"]': {
    background: '$secondary100',
    color: '$neutral900'
  },
  '&:hover': {
    backgroundColor: '$black100'
  },
  '&:focus': {
    borderWidth: '$sm',
    borderStyle: 'solid',
    background: '$secondary100',
    borderColor: '$secondary500',
    outline: 'none',
    color: '$neutral900'
  },
  variants: {
    rounded: {
      none: {
        borderRadius: '0'
      },
      full: {
        borderRadius: '$round'
      }
    },
    isDisabled: {
      true: {
        color: '$neutral500',
        pointerEvents: 'none'
      }
    },
    isActive: {
      false: {
        color: '$neutral500'
      }
    },
    isToday: {
      true: {
        borderWidth: '$sm',
        borderStyle: 'solid',
        borderColor: '$secondary500'
      }
    },
    isSelected: {
      true: {
        backgroundColor: '$secondary500',
        color: '$white900'
      }
    }
  },
  defaultVariants: {
    rounded: 'full'
  }
});

export const CalendarDaysContainer = styled(Box, {
  padding: '$2 0'
});

export const CalendarDaysRow = styled(Box, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '$11'
});
