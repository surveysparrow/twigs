import React from 'react';
import { IconProps } from '../types';

export const BoltAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_302)">
          <path
            d="M17.3178 25.0169L15.6486 27.4103C14.8874 28.5087 13.1645 27.9712 13.1645 26.6338V18.7267H6.22179C5.12201 18.7267 4.47403 17.4915 5.10129 16.5865L13.4063 4.58972C14.1675 3.49132 15.8904 4.02878 15.8904 5.36621V13.2733H22.8331C23.9315 13.2733 24.5795 14.5085 23.9536 15.4135L23.0159 16.7709"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.3546 20.421V28"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M29.1441 24.2104H21.5651"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_302">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
