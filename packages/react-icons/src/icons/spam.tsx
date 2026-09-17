import React from 'react';
import { IconProps } from '../types';

export const SpamIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2906_17652)">
          <path
            d="M15.9999 16V10"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.9985 20.6665C15.8145 20.6665 15.6652 20.8159 15.6665 20.9999C15.6665 21.1839 15.8159 21.3332 15.9999 21.3332C16.1839 21.3332 16.3332 21.1839 16.3332 20.9999C16.3332 20.8159 16.1839 20.6665 15.9985 20.6665"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 19.1747V12.8253C4 10.6893 5.136 8.71465 6.98133 7.63998L12.9813 4.14798C14.8467 3.06265 17.152 3.06265 19.0173 4.14798L25.0173 7.63998C26.864 8.71465 28 10.6893 28 12.8253V19.1747C28 21.3107 26.864 23.2853 25.0187 24.36L19.0187 27.852C17.1533 28.9373 14.848 28.9373 12.9827 27.852L6.98267 24.36C5.136 23.2853 4 21.3107 4 19.1747Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2906_17652">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
