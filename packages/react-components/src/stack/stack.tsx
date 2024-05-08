/* eslint-disable react/no-array-index-key */
import React, {
  Children,
  Fragment,
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo
} from 'react';
import type * as Stitches from '@stitches/react';
import { styled, config } from '../stitches.config';
import { Box } from '../box';
import { getSeparatorStyles } from './get-separator-style';

const StackWrapper = styled(Box, {
  display: 'flex',
  flexDirection: 'column'
});

export interface StackBaseProps {
  children: React.ReactNode;
  alignX?: 'left' | 'center' | 'right';
  alignY?: 'left' | 'center' | 'right';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  isInline?: boolean;
  divider?: React.ReactElement;
}

type StackProps = StackBaseProps & { css?: Stitches.CSS<typeof config> };

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      gap = '$4',
      divider,
      alignX = 'center',
      alignY = 'center',
      wrap,
      direction,
      css,
      isInline,
      ...props
    },
    ref
  ) => {
    const validChildren = useMemo(() => {
      return Children.toArray(children).filter((child) => isValidElement(child));
    }, [children]);

    const separatorStyles = getSeparatorStyles({
      gap,
      direction: direction || 'column'
    });

    const mapAlignX = {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end'
    };

    const mapAlignY = {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end'
    };

    return (
      <StackWrapper
        ref={ref}
        css={{
          alignItems: mapAlignY[alignY],
          justifyContent: mapAlignX[alignX],
          flexWrap: wrap,
          flexDirection: isInline ? 'row' : direction || 'column',
          ...(divider ? {} : { gap }),
          ...css
        }}
        data-testid="stack"
        {...props}
      >
        {validChildren.map((child, index) => (
          <Fragment key={index}>
            {child}
            {index < validChildren.length - 1 && divider && (
              <div style={separatorStyles}>
                {cloneElement(divider, { key: `divider-${index}` })}
              </div>
            )}
          </Fragment>
        ))}
      </StackWrapper>
    );
  }
);
