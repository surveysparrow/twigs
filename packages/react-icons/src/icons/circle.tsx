import React from 'react';
import { IconProps } from '../types';

export const CircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_244)">
          <path
            d="M16 4.75C22.2123 4.75 27.25 9.78769 27.25 16C27.25 22.2123 22.2123 27.25 16 27.25C9.78769 27.25 4.75 22.2123 4.75 16C4.75 9.78769 9.78769 4.75 16 4.75Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_244">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
