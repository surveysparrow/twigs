import React from 'react';
import { IconProps } from '../types';

export const ArrowsLoopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_634)">
          {/* Top-right filled arrowhead triangle */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6667 11.3327L20 7.99935L16.6667 4.66602Z"
            fill={color}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          {/* Bottom-left filled arrowhead triangle */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.3333 20.6126L12 23.9459L15.3333 27.2793Z"
            fill={color}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          {/* Top arc (left-to-right, upper half) */}
          <path
            d="M20 7.99935H12C7.58133 7.99935 4 11.5807 4 15.9993C4 18.5487 5.196 20.814 7.05333 22.2793"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          {/* Bottom arc (right-to-left, lower half) */}
          <path
            d="M12 23.9459L20 23.9459C24.4187 23.9459 28 20.3646 28 15.9459C28 13.3966 26.804 11.1313 24.9467 9.66592"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_634">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
