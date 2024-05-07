/* eslint-disable react/no-array-index-key */
import React, {
  Children,
  Fragment,
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo
} from 'react';
import { styled } from '../stitches.config';
import { Flex } from '../flex';
import { getSeparatorStyles } from './get-separator-style';

const StackWrapper = styled(Flex, {
  flexDirection: 'column'
});

export interface StackProps {
  children: React.ReactNode;
  alignX?: 'left' | 'center' | 'right';
  alignY?: 'left' | 'center' | 'right';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  gap?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  divider?: React.ReactElement;
}

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
    console.log(separatorStyles);
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
        gap={divider ? undefined : gap}
        alignItems={mapAlignY[alignY]}
        justifyContent={mapAlignX[alignX]}
        wrap={wrap}
        flexDirection={direction}
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
