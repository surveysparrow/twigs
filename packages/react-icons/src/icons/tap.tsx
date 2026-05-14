import React from 'react';
import { IconProps } from '../types';

export const TapIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2690_557)">
          <path
            d="M7.37207 10.8H8.67207"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.9721 10.8H21.6721"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.6841 5.288L19.7611 6.198"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.64707 5.288L10.5701 6.198"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.1721 3V4.3"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.1169 17.3V11.45C17.1169 10.3736 16.2433 9.5 15.1669 9.5C14.0905 9.5 13.2169 10.3736 13.2169 11.45V21.2L10.5753 20.3199C9.80437 20.0625 8.95417 20.264 8.37827 20.8386C7.48517 21.7317 7.55277 23.1968 8.52127 24.0054L13.7928 28.3981C14.2621 28.7868 14.851 29 15.4581 29H21.3211C22.6328 29 23.7378 28.0237 23.9016 26.7224L24.6075 21.0765C24.7804 19.692 23.8301 18.4193 22.4547 18.1892L17.1169 17.3Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2690_557">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
