import React from 'react';
import { IconProps } from '../types';

export const EllipsisVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
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
          d="M15.996 6.33334C15.081 6.33334 14.3262 7.0784 14.3334 8.00545C14.3363 8.92191 15.0829 9.66667 16 9.66667C16.919 9.66667 17.6667 8.91895 17.6667 8C17.6667 7.07716 16.9151 6.33334 15.996 6.33334Z"
          fill={color}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M15.996 14.3333C15.081 14.3333 14.3262 15.0784 14.3334 16.0054C14.3363 16.9219 15.0829 17.6667 16 17.6667C16.919 17.6667 17.6667 16.919 17.6667 16C17.6667 15.0772 16.9151 14.3333 15.996 14.3333Z"
          fill={color}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M15.996 22.3333C15.081 22.3333 14.3262 23.0784 14.3334 24.0054C14.3363 24.9219 15.0829 25.6667 16 25.6667C16.919 25.6667 17.6667 24.919 17.6667 24C17.6667 23.0772 16.9151 22.3333 15.996 22.3333Z"
          fill={color}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
