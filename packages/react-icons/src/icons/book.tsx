import React from 'react';
import { IconProps } from '../types';

export const BookIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3940_21)">
          <path
            d="M16 6.66685C13.0267 3.69351 8.396 3.38818 5.08267 5.75085C4.392 6.24285 4 7.05885 4 7.90685V25.1815C4 26.2135 5.1 26.8122 6.01067 26.3268C9.22 24.6162 13.296 25.1135 16 27.8188V6.66685"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 6.66685C18.9733 3.69351 23.604 3.38818 26.9173 5.75085C27.608 6.24285 28 7.05885 28 7.90685V25.1815C28 26.2135 26.9 26.8135 25.9893 26.3268C22.78 24.6162 18.704 25.1135 16 27.8188"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3940_21">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
