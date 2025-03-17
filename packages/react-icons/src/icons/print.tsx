import React from 'react';
import { IconProps } from '../types';

export const PrintIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.33334 10.6667V5.33333C9.33334 4.59733 9.93068 4 10.6667 4H21.3333C22.0693 4 22.6667 4.59733 22.6667 5.33333V10.6667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33333 22.6667H6.66667C5.19333 22.6667 4 21.4733 4 20V13.3333C4 11.86 5.19333 10.6667 6.66667 10.6667H25.3333C26.8067 10.6667 28 11.86 28 13.3333V20C28 21.4733 26.8067 22.6667 25.3333 22.6667H22.6667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33334 18.4H22.6667V26.6667C22.6667 27.4027 22.0693 28 21.3333 28H10.6667C9.93068 28 9.33334 27.4027 9.33334 26.6667V18.4Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33334 14.6667H10.6667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
