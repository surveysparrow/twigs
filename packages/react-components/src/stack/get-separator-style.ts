import { CSSProperties } from 'react';
import { MediaKeys } from './stack';

const stackDirections = [
  'row',
  'column',
  'row-reverse',
  'column-reverse'
] as const;
type StackDirection = (typeof stackDirections)[number];

interface Options {
  gap: string;
  direction: StackDirection | Record<MediaKeys, StackDirection>;
}

export function getSeparatorStyles(options: Options): CSSProperties {
  const { gap, direction } = options;

  const styles: Record<StackDirection, CSSProperties> = {
    column: {
      marginTop: gap,
      marginBottom: gap,
      borderLeftWidth: 0,
      borderTopWidth: '$xs'
    },
    'column-reverse': {
      marginTop: gap,
      marginBottom: gap,
      borderLeftWidth: 0,
      borderTopWidth: '$xs'
    },
    row: {
      marginLeft: gap,
      marginRight: gap,
      borderLeftWidth: '$xs',
      borderTopWidth: 0
    },
    'row-reverse': {
      marginLeft: gap,
      marginRight: gap,
      borderLeftWidth: '$xs',
      borderTopWidth: 0
    }
  };

  if (typeof direction === 'string') return styles[direction];

  return Object.keys(direction).reduce((acc, key) => {
    return {
      ...acc,
      [`@${key}`]: styles[direction[key]]
    };
  }, {});
}
