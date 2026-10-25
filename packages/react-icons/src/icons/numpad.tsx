import React from 'react';
import { IconProps } from '../types';

export const NumpadIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.2, ...rest
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
        <g clipPath="url(#clip0_22_191)">
          <path
            d="M11 5.5C11 6.60457 10.1046 7.5 9 7.5C7.89543 7.5 7 6.60457 7 5.5C7 4.39543 7.89543 3.5 9 3.5C10.1046 3.5 11 4.39543 11 5.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25 5.5C25 6.60457 24.1046 7.5 23 7.5C21.8954 7.5 21 6.60457 21 5.5C21 4.39543 21.8954 3.5 23 3.5C24.1046 3.5 25 4.39543 25 5.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18 5.5C18 6.60457 17.1046 7.5 16 7.5C14.8954 7.5 14 6.60457 14 5.5C14 4.39543 14.8954 3.5 16 3.5C17.1046 3.5 18 4.39543 18 5.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11 12.5C11 13.6046 10.1046 14.5 9 14.5C7.89543 14.5 7 13.6046 7 12.5C7 11.3954 7.89543 10.5 9 10.5C10.1046 10.5 11 11.3954 11 12.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25 12.5C25 13.6046 24.1046 14.5 23 14.5C21.8954 14.5 21 13.6046 21 12.5C21 11.3954 21.8954 10.5 23 10.5C24.1046 10.5 25 11.3954 25 12.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18 12.5C18 13.6046 17.1046 14.5 16 14.5C14.8954 14.5 14 13.6046 14 12.5C14 11.3954 14.8954 10.5 16 10.5C17.1046 10.5 18 11.3954 18 12.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11 19.5C11 20.6046 10.1046 21.5 9 21.5C7.89543 21.5 7 20.6046 7 19.5C7 18.3954 7.89543 17.5 9 17.5C10.1046 17.5 11 18.3954 11 19.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25 19.5C25 20.6046 24.1046 21.5 23 21.5C21.8954 21.5 21 20.6046 21 19.5C21 18.3954 21.8954 17.5 23 17.5C24.1046 17.5 25 18.3954 25 19.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18 19.5C18 20.6046 17.1046 21.5 16 21.5C14.8954 21.5 14 20.6046 14 19.5C14 18.3954 14.8954 17.5 16 17.5C17.1046 17.5 18 18.3954 18 19.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18 26.5C18 27.6046 17.1046 28.5 16 28.5C14.8954 28.5 14 27.6046 14 26.5C14 25.3954 14.8954 24.5 16 24.5C17.1046 24.5 18 25.3954 18 26.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_191">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
