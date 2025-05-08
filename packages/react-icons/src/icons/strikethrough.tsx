import React from 'react';
import { IconProps } from '../types';

export const StrikethroughIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d="M11.499 10.833l.263.102a2.964 2.964 0 011.895 2.763v.005a2.963 2.963 0 01-2.963 2.964H8.47a2.963 2.963 0 01-2.963-2.964M3.336 10.833h13.333M6.264 8.386a3.043 3.043 0 01-.748-1.977A3.076 3.076 0 018.59 3.333h2.11a2.964 2.964 0 012.963 2.963"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
