import React, { ReactNode } from 'react';
import type * as Stitches from '@stitches/react';
import { config, styled } from '../stitches.config';
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

const StyledBox = styled(Box, {});

type GridProps = GridBaseProps & { css?: Stitches.CSS<typeof config> };

const widthToColumns = (width: GridProps['width'], repeat: 'fit' | 'fill') => `repeat(auto-${repeat}, minmax(${width}px, 1fr))`;

export const Grid = React.forwardRef<typeof StyledBox, GridProps>(
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
      ...rest
    },
    ref
  ) => {
    const [columnGap, rowGap] = gap;
    const gridTemplateColumns = width
      ? widthToColumns(width, repeat)
      : templateColumns;

    return (
      <StyledBox
        ref={ref}
        data-testid="grid"
        css={{
          display: 'grid',
          rowGap,
          columnGap,
          gridTemplateColumns,
          gridTemplateRows: templateRows,
          gridTemplateAreas: templateAreas,
          ...css
        }}
        {...rest}
      >
        {children}
      </StyledBox>
    );
  }
);
