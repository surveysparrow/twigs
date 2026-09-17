import React from 'react';
import { IconProps } from '../types';

export const InputMultilineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_189)">
          <path
            d="M13.3333 21.3333V10.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.6667 22.4449H15.5556C14.3278 22.4449 13.3333 21.4504 13.3333 20.2227C13.3333 21.4504 12.3389 22.4449 11.1111 22.4449H10"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10 9.55642H11.1111C12.3389 9.55642 13.3333 10.5509 13.3333 11.7786C13.3333 10.5509 14.3278 9.55642 15.5556 9.55642H16.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8 28H24C26.2091 28 28 26.2091 28 24V8C28 5.79086 26.2091 4 24 4H8C5.79086 4 4 5.79086 4 8V24C4 26.2091 5.79086 28 8 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_189">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
