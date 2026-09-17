import React from 'react';
import { IconProps } from '../types';

export const CubeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_748_557)">
          <path
            d="M16 27.9967V15.9994"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 15.9994L27.64 10.0007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 15.9994L4.36 10.0007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 20.809V11.1898C28 10.3388 27.492 9.55322 26.6667 9.12832L17.3333 4.31868C16.508 3.89377 15.492 3.89377 14.6667 4.31868L5.33333 9.12713C4.508 9.55323 4 10.3388 4 11.1898V20.8102C4 21.6612 4.508 22.4468 5.33333 22.8717L14.6667 27.6813C15.492 28.1062 16.508 28.1062 17.3333 27.6813L26.6667 22.8717C27.492 22.4456 28 21.66 28 20.809Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_748_557">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
