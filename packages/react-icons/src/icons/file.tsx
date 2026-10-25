import React from 'react';
import { IconProps } from '../types';

export const FileIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_850_564)">
          <path
            d="M25.3332 10.6667H19.9998C19.2638 10.6667 18.6665 10.0693 18.6665 9.33333V4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.5518 8.552L20.7812 4.78133C20.2812 4.28133 19.6025 4 18.8958 4H9.33317C7.85984 4 6.6665 5.19333 6.6665 6.66667V25.3333C6.6665 26.8067 7.85984 28 9.33317 28H22.6665C24.1398 28 25.3332 26.8067 25.3332 25.3333V10.4373C25.3332 9.73067 25.0518 9.052 24.5518 8.552Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_850_564">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
