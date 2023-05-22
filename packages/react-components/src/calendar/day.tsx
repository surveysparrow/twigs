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
  borderRadius: '$round',
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
    isHidden: {
      true: {
        visibility: 'hidden'
      }
    },
    isSelected: {
      true: {
        backgroundColor: '$secondary500',
        color: '$white900'
      }
    }
  }
});

export const DayContainer = styled(Box, {
  // all of the selected dates in calendar range
  borderRadius: '$round',
  // start date of the selected range
  '&[data-is-start="true"]': {
    backgroundColorOpacity: ['$secondary500', '0.08'],
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    [`& ${Day}`]: {
      borderRadius: '$round !important',
      background: '$secondary500 !important',
      color: '$white900 !important'
    }
  },
  // end date of the selected range
  '&[data-is-end="true"]': {
    backgroundColorOpacity: ['$secondary500', '0.08'],
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    [`& ${Day}`]: {
      borderRadius: '$round !important',
      background: '$secondary500 !important',
      color: '$white900 !important'
    }
  },
  // selected dates between the first and last date
  '&[aria-selected="true"][data-is-start="false"], &[aria-selected="true"][data-is-end="false"]': {
    borderRadius: 'none',
    [`& ${Day}`]: {
      borderRadius: '0',
      backgroundColorOpacity: ['$secondary500', '0.08'],
      color: '$neutral900'
    }
  },
  // first item in a week row of the selected range
  '&[aria-selected="true"]:first-of-type': {
    [`& ${Day}`]: {
      borderTopLeftRadius: '$round',
      borderBottomLeftRadius: '$round'
    }
  },
  // last item in a week row of the selected range
  '&[aria-selected="true"]:last-of-type': {
    [`& ${Day}`]: {
      borderTopRightRadius: '$round',
      borderBottomRightRadius: '$round'
    }
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
