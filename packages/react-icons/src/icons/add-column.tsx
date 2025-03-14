import React from 'react';
import { IconProps } from '../types';

export const AddColumnIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.6667 25.3333V6.66667C26.6667 5.93029 26.0697 5.33333 25.3334 5.33333L17.3334 5.33333C16.597 5.33333 16 5.93029 16 6.66667V25.3333C16 26.0697 16.597 26.6667 17.3334 26.6667H25.3334C26.0697 26.6667 26.6667 26.0697 26.6667 25.3333Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M21.3333 5.33333V26.6667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M10.6667 26.6667V17.3333C10.6667 16.597 10.0697 16 9.33332 16H6.66666C5.93028 16 5.33332 16.597 5.33332 17.3333L5.33332 26.6667C5.33332 27.403 5.93028 28 6.66666 28H9.33332C10.0697 28 10.6667 27.403 10.6667 26.6667Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M8.00001 12L5.33334 9.33333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M10.6667 9.33333L8 12"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M8 4V12"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
