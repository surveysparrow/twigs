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
        <g clipPath="url(#clip0_2809_2031)">
          <path
            d="M6.25 4.375L3.75 6.875L6.25 9.375"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 6.875H11.25C14.0117 6.875 16.25 8.92667 16.25 11.4583V11.4583C16.25 13.99 14.0117 16.0417 11.25 16.0417H4.58333"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2809_2031">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
