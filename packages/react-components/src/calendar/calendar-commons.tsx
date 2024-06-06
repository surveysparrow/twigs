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
  '&:focus': {
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
