import React from 'react';
import { IconProps } from '../types';

export const GlobeClickIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_181)">
          <path
            d="M21.1376 6.06165L18.1927 9.00652C17.5567 9.64253 17.1991 10.5066 17.1991 11.4066C17.1991 13.281 18.7183 14.8003 20.5928 14.8003H25.5993C25.5993 8.82171 20.7776 4 14.799 4C8.82049 4 3.99878 8.82171 3.99878 14.8003C3.99878 20.7788 8.82049 25.6005 14.799 25.6005"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M7.24846 22.526L9.38091 19.328C9.76732 18.7483 10.4165 18.4003 11.1125 18.4003C11.901 18.4003 12.621 17.9551 12.9738 17.2495L13.1334 16.9303C13.4262 16.3447 13.4262 15.6547 13.1334 15.0691L11.7738 12.351C11.4222 11.6454 10.7009 11.2002 9.91252 11.2002H4.62279"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.35 27.3178L18.9547 19.6664C18.7015 18.8588 19.5283 18.1363 20.2952 18.4939L27.4389 21.8276C28.2862 22.2224 28.1433 23.4681 27.2289 23.6613L24.2877 24.2841L23.1956 27.3526C22.8824 28.2334 21.6284 28.2094 21.35 27.3178Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_181">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
