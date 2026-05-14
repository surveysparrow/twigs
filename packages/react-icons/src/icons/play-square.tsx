import React from 'react';
import { IconProps } from '../types';

export const PlaySquareIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.375, ...rest
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
        <g clipPath="url(#clip0_1616_558)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7057 12.4042L19.4503 15.2104C20.0504 15.5648 20.0504 16.4338 19.4503 16.7883L14.7057 19.5945C14.0946 19.9563 13.3221 19.515 13.3221 18.8049V13.1937C13.3221 12.4836 14.0946 12.0424 14.7057 12.4042Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.3333 27H8.66667C6.64144 27 5 25.3586 5 23.3333V8.66667C5 6.64144 6.64144 5 8.66667 5H23.3333C25.3586 5 27 6.64144 27 8.66667V23.3333C27 25.3586 25.3586 27 23.3333 27Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1616_558">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
