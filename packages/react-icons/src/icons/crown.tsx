import React from 'react';
import { IconProps } from '../types';

export const CrownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_638_549)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.8242 11.1336L20.7468 13.7503L17.2871 8.28386C16.946 7.94207 16.4829 7.75 16 7.75C15.5171 7.75 15.054 7.94207 14.7129 8.28386L11.2532 13.7503L8.17578 11.1336C7.5607 11.0104 6.92552 11.2129 6.49524 11.6694C6.06495 12.1258 5.90033 12.7719 6.05968 13.3786L8.52355 22.7596C8.73345 23.5589 9.45594 24.1161 10.2824 24.1161H21.7177C22.5441 24.1161 23.2666 23.5589 23.4765 22.7596L25.9403 13.3785C26.0997 12.7718 25.935 12.1258 25.5047 11.6693C25.0745 11.2129 24.4393 11.0104 23.8242 11.1336Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_638_549">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
