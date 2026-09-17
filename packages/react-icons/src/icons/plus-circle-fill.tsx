import React from 'react';
import { IconProps } from '../types';

export const PlusCircleFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3769_288)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 29C8.81967 29 3 23.1803 3 16C3 8.81967 8.81967 3 16 3C23.1803 3 29 8.81967 29 16C29 23.1803 23.1803 29 16 29Z"
            fill={color}
          />
          <path
            d="M10.3431 16.0006L21.6568 16.0006"
            stroke="white"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 10.3438V21.6575"
            stroke="white"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3769_288">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
