import React from 'react';
import { IconProps } from '../types';

export const ResetIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          d="M6.01604 6.18533V10.9H10.7294"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.63069 10.9C8.44002 7.58401 11.9574 5.33334 16 5.33334C21.8907 5.33334 26.6667 10.1093 26.6667 16C26.6667 21.8907 21.8907 26.6667 16 26.6667C11.2734 26.6667 7.26446 23.5917 5.86461 19.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
