import { styled } from '../../stitches.config';
import { Box } from '../box';

export const Day = styled('button', {
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
    isHidden: {
      true: {
        visibility: 'none'
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

export const DayContainer = styled(Box, {
  // all of the selected dates in calendar range
  '&[aria-selected="true"]': {
    background: '$secondary100'
  },
  // start date of the selected range
  '&[data-is-start="true"]': {
    borderTopLeftRadius: '100%',
    borderBottomLeftRadius: '100%',
    background: '$secondary100',
    [`& ${Day}`]: {
      background: '$secondary500 !important',
      color: '$white900 !important'
    }
  },
  // end date of the selected range
  '&[data-is-end="true"]': {
    borderTopRightRadius: '100%',
    borderBottomRightRadius: '100%',
    background: '$secondary100',
    [`& ${Day}`]: {
      background: '$secondary500 !important',
      color: '$white900 !important'
    }
  },
  // selected dates between the first and last date
  '&[aria-selected="true"][data-is-start="false"], &[aria-selected="true"][data-is-end="false"]': {
    [`& ${Day}`]: {
      background: '$secondary100',
      color: '$neutral900'
    }
  },
  // first item in a week row of the selected range
  '&[aria-selected="true"]:first-of-type': {
    borderTopLeftRadius: '100%',
    borderBottomLeftRadius: '100%'
  },
  // last item in a week row of the selected range
  '&[aria-selected="true"]:last-of-type': {
    borderTopRightRadius: '100%',
    borderBottomRightRadius: '100%'
  }
});

export const DaysContainer = styled(Box, {
  padding: '$2 0',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const DaysRow = styled(Box, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '$11'
});
