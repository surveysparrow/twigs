import React from 'react';
import { IconProps } from '../types';

export const AlarmClockIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          d="M11.9192 7.4809C17.3613 5.22677 23.6003 7.81111 25.8544 13.2532C28.1086 18.6953 25.5242 24.9343 20.0821 27.1884C14.6401 29.4426 8.40104 26.8582 6.1469 21.4162C3.89276 15.9741 6.4771 9.73505 11.9192 7.4809"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M4.59998 7.74666L8.59998 4.38666"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M27.4133 7.75996L23.4133 4.39996"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M15.6667 12.576V18.0893L20 20.732"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
