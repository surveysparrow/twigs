import React from 'react';
import { IconProps } from '../types';

export const OpenInModalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_739)">
          <path
            d="M26.6667 18.666V23.9993C26.6667 26.2087 24.876 27.9993 22.6667 27.9993H8C5.79067 27.9993 4 26.2087 4 23.9993V9.33268C4 7.12335 5.79067 5.33268 8 5.33268H13.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.3333 16.666L6 25.9993"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.3333 16.666L10 16.666"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.3333 16.666V21.9993"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.963 13.3327H21.037C19.7274 13.3327 18.6667 12.1393 18.6667 10.666V5.33268C18.6667 3.85935 19.7274 2.66602 21.037 2.66602H26.963C28.2726 2.66602 29.3333 3.85935 29.3333 5.33268V10.666C29.3333 12.1393 28.2726 13.3327 26.963 13.3327Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_739">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
