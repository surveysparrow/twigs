import React from 'react';
import { IconProps } from '../types';

export const RedoIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 32 32"
        {...rest}
        ref={ref}
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M22.667 6.667l4 4m0 0l-4 4m4-4h-12c-4.419 0-8 3.282-8 7.333 0 4.05 3.581 7.333 8 7.333h10.666"
        />
      </svg>
    );
  }
);
