import React from 'react';
import { IconProps } from '../types';

export const CurrencyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3512_307)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.6666 25.3327H5.33329C3.85996 25.3327 2.66663 24.1393 2.66663 22.666V9.33268C2.66663 7.85935 3.85996 6.66602 5.33329 6.66602H26.6666C28.14 6.66602 29.3333 7.85935 29.3333 9.33268V22.666C29.3333 24.1393 28.14 25.3327 26.6666 25.3327Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.3571 13.6423C19.6588 14.9441 19.6588 17.0546 18.3571 18.3564C17.0553 19.6581 14.9448 19.6581 13.643 18.3564C12.3413 17.0546 12.3413 14.9441 13.643 13.6423C14.9448 12.3406 17.0553 12.3406 18.3571 13.6423Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.9986 15.4993C23.7226 15.5007 23.5 15.7247 23.5 16.0007C23.5 16.2767 23.724 16.5007 24 16.4993C24.276 16.4993 24.5 16.2753 24.5 15.9993C24.5 15.7233 24.276 15.4993 23.9986 15.4993Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99863 15.4993C7.72263 15.5007 7.49996 15.7247 7.49996 16.0007C7.49996 16.2767 7.72396 16.5007 7.99996 16.4993C8.27596 16.4993 8.49996 16.2753 8.49996 15.9993C8.49996 15.7233 8.27596 15.4993 7.99863 15.4993Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3512_307">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
