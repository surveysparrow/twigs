import React from 'react';
import { IconProps } from '../types';

export const FileDraftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_647)">
          <path
            d="M25.3333 14.6667V10.4373C25.3333 9.73067 25.052 9.052 24.552 8.552L20.7813 4.78133C20.2813 4.28133 19.6027 4 18.896 4H6.66667C5.19333 4 4 5.19333 4 6.66667V25.3333C4 26.8067 5.19333 28 6.66667 28H13.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.3332 10.6667H19.9998C19.2638 10.6667 18.6665 10.0693 18.6665 9.33333V4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.8612 27.6093L27.6079 22.8627C28.1292 22.3413 28.1292 21.4973 27.6079 20.9773L25.4932 18.8627C24.9719 18.3413 24.1279 18.3413 23.6079 18.8627L18.8612 23.6093C18.6105 23.86 18.4705 24.1987 18.4705 24.552V28H21.9185C22.2719 28 22.6105 27.86 22.8612 27.6093Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_647">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
