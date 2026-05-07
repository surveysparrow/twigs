import React from 'react';
import { IconProps } from '../types';

export const PivotIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_773)">
          <path
            d="M25.1067 16.2619C25.2263 16.1237 25.4406 16.1237 25.5603 16.2619L28.3677 19.5036C28.536 19.6979 28.398 20 28.1409 20H22.5261C22.269 20 22.131 19.6979 22.2993 19.5036L25.1067 16.2619Z"
            fill={color}
          />
          <path
            d="M16.2619 25.5608C16.1237 25.4411 16.1237 25.2268 16.2619 25.1072L19.5036 22.2998C19.6979 22.1315 20 22.2695 20 22.5266L20 28.1414C20 28.3984 19.6979 28.5365 19.5036 28.3682L16.2619 25.5608Z"
            fill={color}
          />
          <path
            d="M25.3333 18.6667V22.6667C25.3333 24.1394 24.1394 25.3333 22.6667 25.3333H18.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 20H12"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12 16L12 4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20 12V4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 12H14.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.33 4H25.67C26.9568 4 28 5.04318 28 6.33V9.67C28 10.9568 26.9568 12 25.67 12H14.33C13.0432 12 12 13.0432 12 14.33V25.67C12 26.9568 10.9568 28 9.67 28H6.33C5.04318 28 4 26.9568 4 25.67V6.33C4 5.04318 5.04318 4 6.33 4Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_773">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
