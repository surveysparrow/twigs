import React from 'react';
import { IconProps } from '../types';

export const CloudCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1342_603)">
          <path
            d="M23.7319 6.73333L25.3333 8.33333L28 5.66667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.4427 12.4707C27.8067 13.6119 27.9947 14.8021 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C17.1979 4.00532 18.3881 4.19326 19.5293 4.55733"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12 20.3333H19.3333C21.1743 20.3333 22.6667 18.8409 22.6667 17C22.6636 15.3314 21.4235 13.9238 19.7686 13.7105C19.2221 12.0935 17.7069 11.0037 16 11C13.7909 11 12 12.7909 12 15C10.5272 15 9.33333 16.1939 9.33333 17.6667C9.33333 19.1394 10.5272 20.3333 12 20.3333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1342_603">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
