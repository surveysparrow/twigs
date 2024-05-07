import { CSSProperties } from 'react';

type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

interface Options {
  gap: string;
  direction: StackDirection;
}

export function getSeparatorStyles(options: Options): CSSProperties {
  const { gap, direction } = options;

  const styles: Record<StackDirection, CSSProperties> = {
    column: {
      width: '100%',
      marginTop: gap,
      marginBottom: gap,
      borderLeftWidth: 0,
      borderTopWidth: '1px'
    },
    'column-reverse': {
      width: '100%',
      marginTop: gap,
      marginBottom: gap,
      borderLeftWidth: 0,
      borderTopWidth: '1px'
    },
    row: {
      width: '100%',
      marginLeft: gap,
      marginRight: gap,
      borderLeftWidth: '1px',
      borderTopWidth: 0
    },
    'row-reverse': {
      width: '100%',
      marginLeft: gap,
      marginRight: gap,
      borderLeftWidth: '1px',
      borderTopWidth: 0
    }
  };

  return styles[direction];
}
