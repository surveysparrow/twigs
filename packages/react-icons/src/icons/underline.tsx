import React from 'react';
import { IconProps } from '../types';

export const UnderlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <g clipPath="url(#clip0_103_16446)">
          <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            d="M16.167 5.333v5.834a4.167 4.167 0 01-8.334 0V5.333M7 18.667h10H7z"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_103_16446">
            <path
              fill="#fff"
              d="M0 0H20V20H0z"
              transform="translate(2 2)"
              vectorEffect="non-scaling-stroke"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
