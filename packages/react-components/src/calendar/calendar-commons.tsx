import { Box } from '../box';
import { Flex } from '../flex';
import { styled } from '../stitches.config';

export const FieldButton = styled('button', {
  backgroundColor: '$white',
  boxShadow: 'none',
  border: 'none',
  height: '$8',
  flex: '0 0 auto',
  color: 'inherit',
  padding: '$2',

  '&:hover': {
    backgroundColor: '$secondary100'
  },
  '&:focus-visible': {
    outline: '2px solid $primary600',
    outlineOffset: '-2px'
  },
  variants: {
    color: {
      selected: {
        backgroundColor: '$primary100',

        '&:hover': {
          backgroundColor: '$primary200'
        }
      },
      default: {}
    }
  },
  defaultVariants: {
    color: 'default'
  }
});

export const TimeAndZonePickerContainer = styled(Flex, {
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  variants: {
    calendarSize: {
      lg: {
        paddingTop: '$4',
        paddingBottom: '$8'
      },
      md: {
        paddingTop: '$2',
        paddingBottom: '$6'
      }
    }
  },

  defaultVariants: {
    calendarSize: 'lg'
  }
});

export const GridContainer = styled(Box, {
  variants: {
    calendarSize: {
      lg: {
        padding: '0 $8'
      },
      md: {
        padding: '0 $6'
      }
    }
  },
  defaultVariants: {
    calendarSize: 'lg'
  }
});

export const FooterContainer = styled(Flex, {
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: '1px solid',
  borderColor: '$neutral200',

  variants: {
    calendarSize: {
      lg: {
        padding: '$6 $8'
      },
      md: {
        padding: '$6'
      }
    }
  },

  defaultVariants: {
    calendarSize: 'lg'
  }
});

export const MonthYearGridContainer = styled(Box, {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',

  variants: {
    calendarSize: {
      lg: {
        gap: '$4',
        padding: '$8'
      },
      md: {
        gap: '$6',
        padding: '$6'
      }
    }
  }
});
