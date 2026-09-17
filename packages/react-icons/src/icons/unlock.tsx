import React from 'react';
import { IconProps } from '../types';

export const UnlockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1285_557)">
          <path
            d="M16 22V18.6"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.0254 7.79733C11.584 5.61467 13.564 4 15.9214 4C18.712 4 20.9734 6.26133 20.9734 9.052V12.2387"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.1283 13.2051C25.5129 16.5896 25.5129 22.0771 22.1283 25.4616C18.7438 28.8461 13.2563 28.8461 9.87178 25.4616C6.48724 22.0771 6.48724 16.5896 9.87178 13.2051C13.2563 9.82053 18.7438 9.82053 22.1283 13.2051Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.996 16.5747C15.444 16.5747 14.996 17.0227 15 17.5747C15 18.1267 15.448 18.5747 16 18.5747C16.552 18.5747 17 18.1267 17 17.5747C17 17.0227 16.552 16.5747 15.996 16.5747Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1285_557">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
