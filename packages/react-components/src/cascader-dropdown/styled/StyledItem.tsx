import { styled } from '@src/stitches.config';
import { prefixClassName } from '@src/utils';

export const StyledItem = styled('li', {
  width: '100%',
  padding: '$3 $6',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  [`.${prefixClassName('cascader-dropdown__item-icon')}`]: {
    opacity: '0'
  },
  variants: {
    selected: {
      true: {
        backgroundColorOpacity: ['$primary500', 0.15]
      }
    },
    hovered: {
      true: {
        backgroundColorOpacity: ['$secondary500', 0.06],
        '&[data-is-selected="true"]': {
          backgroundColorOpacity: ['$primary500', 0.15]
        },
        [`.${prefixClassName('cascader-dropdown__item-icon')}`]: {
          opacity: '1'
        }
      }
    }
  }
});
