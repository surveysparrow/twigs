import React from 'react';
import { IconProps } from '../types';

export const SliderHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_499)">
          <path
            d="M28 22.6673H22.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.3333 22.6673H4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 9.33398H9.33333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.6667 9.33398H28"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.6667 18.6673H21.3333C22.0693 18.6673 22.6667 19.2646 22.6667 20.0006V25.334C22.6667 26.07 22.0693 26.6673 21.3333 26.6673H18.6667C17.9307 26.6673 17.3333 26.07 17.3333 25.334V20.0006C17.3333 19.2646 17.9307 18.6673 18.6667 18.6673Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.3333 13.334H10.6667C9.93067 13.334 9.33333 12.7367 9.33333 12.0007V6.66732C9.33333 5.93132 9.93067 5.33398 10.6667 5.33398H13.3333C14.0693 5.33398 14.6667 5.93132 14.6667 6.66732V12.0007C14.6667 12.7367 14.0693 13.334 13.3333 13.334Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_499">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
