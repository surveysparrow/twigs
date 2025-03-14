import React from 'react';
import { IconProps } from '../types';

export const TextAlignRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.33 3H2.665M13.336 6.333h-8M13.33 9.667H2.665M13.333 13H8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
