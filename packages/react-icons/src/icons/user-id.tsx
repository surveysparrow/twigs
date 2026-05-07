import React from 'react';
import { IconProps } from '../types';

export const UserIdIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2048_621)">
          <path
            d="M19.6 14.7336H24.4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.2 18.9336H19.6"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 23.1828C15.796 22.6704 15.4804 22.2096 15.0748 21.834C14.3896 21.1992 13.4896 20.8452 12.5548 20.8452H11.0452C10.1104 20.8452 9.2104 21.198 8.5252 21.834C8.1196 22.2084 7.804 22.6692 7.6 23.1828"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.6 7.53359H6.4492C5.0968 7.53359 4 8.63039 4 9.98279V24.3336C4 25.6596 5.074 26.7336 6.4 26.7336H25.6C26.926 26.7336 28 25.6596 28 24.3336V9.93359C28 8.60759 26.926 7.53359 25.6 7.53359H18.4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.4971 13.7482C14.4343 14.6854 14.4343 16.205 13.4971 17.1423C12.5598 18.0795 11.0402 18.0795 10.1029 17.1423C9.16568 16.205 9.16568 14.6854 10.1029 13.7482C11.0402 12.8109 12.5598 12.8109 13.4971 13.7482Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.2 9.93359H14.8C14.1376 9.93359 13.6 9.39599 13.6 8.73359V5.13359C13.6 4.47119 14.1376 3.93359 14.8 3.93359H17.2C17.8624 3.93359 18.4 4.47119 18.4 5.13359V8.73359C18.4 9.39599 17.8624 9.93359 17.2 9.93359Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2048_621">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
