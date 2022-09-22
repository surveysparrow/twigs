import React, { FunctionComponent, ReactNode } from 'react';
import type * as Stitches from '@stitches/react';
import { Box, BoxProps } from '../box';

export interface GridBaseProps extends BoxProps {
  width?: number;
  templateColumns?: string;
  templateRows?: string;
  templateAreas?: string;
  gap?: Array<string | number>;
  repeat?: 'fit' | 'fill';
  children?: ReactNode;
}

type GridProps = GridBaseProps & { css?: Stitches.CSS };

const widthToColumns = (width: GridProps['width'], repeat: 'fit' | 'fill') => `repeat(auto-${repeat}, minmax(${width}px, 1fr))`;

export const Grid: FunctionComponent<GridProps> = React.forwardRef(
  (
    {
      children,
      width,
      templateColumns,
      templateRows,
      templateAreas,
      gap = [3, 3],
      repeat = 'fit',
      css,
    }: GridProps,
    ref,
  ) => {
    const [columnGap, rowGap] = gap;
    const gridTemplateColumns = width
      ? widthToColumns(width, repeat)
      : templateColumns;

    return (
      <Box
        ref={ref}
        data-testid="grid"
        css={{
          display: 'grid',
          rowGap,
          columnGap,
          gridTemplateColumns,
          gridTemplateRows: templateRows,
          gridTemplateAreas: templateAreas,
          ...css,
        }}
      >
        {children}
      </Box>
    );
  },
);
