import React from 'react';
import { IconProps } from '../types';

export const OrganizationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_332)">
          <path
            d="M20.8573 11.9993V22.666"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.6667 22.666V11.9993"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 26.666H29.3333V25.3327L28 22.666H17.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 22.1555V19.63C3.99946 19.112 4.33544 18.6536 4.82961 18.4982L8.38501 17.3877C8.61637 17.3144 8.86474 17.3144 9.09609 17.3877L12.6515 18.4982C13.1457 18.6536 13.4816 19.112 13.4811 19.63V22.1555C13.4811 24.6257 11.9488 26.8373 9.63596 27.7045L8.94859 27.9617C8.81413 28.0123 8.66588 28.0123 8.53141 27.9617L7.84404 27.7045C5.53139 26.8368 3.99956 24.6256 4 22.1555Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.33333 11.9993H29.3333V7.90335L17.3333 2.66602L5.33333 7.90335V11.9993Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_332">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
