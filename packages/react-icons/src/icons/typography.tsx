import React from 'react';
import { IconProps } from '../types';

export const TypographyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.67999 18.4267H14.9333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M11.8133 11.1733L8 20.0133"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M15.6134 20.0133L11.8134 11.1733"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M22.6667 28H9.33333C6.388 28 4 25.612 4 22.6667V9.33333C4 6.388 6.388 4 9.33333 4H22.6667C25.612 4 28 6.388 28 9.33333V22.6667C28 25.612 25.612 28 22.6667 28Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M23.6667 14.6667V20"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M22.8813 15.4387C23.9285 16.4858 23.9285 18.1835 22.8813 19.2306C21.8342 20.2778 20.1365 20.2778 19.0894 19.2306C18.0422 18.1835 18.0422 16.4858 19.0894 15.4387C20.1365 14.3915 21.8342 14.3915 22.8813 15.4387Z"
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
