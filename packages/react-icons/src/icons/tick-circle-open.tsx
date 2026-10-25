import React from 'react';
import { IconProps } from '../types';

export const TickCircleOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_298)">
          <path
            d="M25.2194 9.43945L15.9998 18.6257L12.2485 14.8744"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.2321 13.6751C27.3532 18.6048 24.8019 23.6334 20.1616 25.6401C15.5213 27.6467 10.1098 26.0615 7.28575 21.8683C4.46166 17.675 5.02696 12.0646 8.6308 8.51898C12.2346 4.97339 17.8536 4.49956 22.0003 7.39157"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_298">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
