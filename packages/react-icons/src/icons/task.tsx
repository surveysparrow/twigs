import React from 'react';
import { IconProps } from '../types';

export const TaskIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_771)">
          <path
            d="M10.6666 6.66667H7.99992C6.52716 6.66667 5.33325 7.86057 5.33325 9.33333V25.3333C5.33325 26.8061 6.52716 28 7.99992 28H17.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.3333 6.66667H23.9999C25.4727 6.66667 26.6666 7.86057 26.6666 9.33333V17.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.6666 23.3333L23.3333 26.6667L21.3333 24.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.9999 9.33333H19.9999C20.7363 9.33333 21.3333 8.73638 21.3333 8V5.33333C21.3333 4.59695 20.7363 4 19.9999 4H11.9999C11.2635 4 10.6666 4.59695 10.6666 5.33333V8C10.6666 8.73638 11.2635 9.33333 11.9999 9.33333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_771">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
