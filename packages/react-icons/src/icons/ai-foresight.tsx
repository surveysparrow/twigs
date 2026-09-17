import React from 'react';
import { IconProps } from '../types';

export const AiForesightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3051_578)">
          <path
            d="M15.9996 6.66379C11.2168 6.57863 6.79766 9.20718 4.58954 13.4506C4.19931 14.2442 3.99581 15.1166 3.99463 16.001C3.99581 16.8854 4.19931 17.7578 4.58954 18.5514C6.79766 22.7948 11.2168 25.4234 15.9996 25.3382C20.7824 25.4234 25.2016 22.7948 27.4097 18.5514"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.4443 9.3976H21.6506C23.6495 9.3976 25.2698 11.0179 25.2698 13.0167V14.2231"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M30.2222 9.3976H29.0159C27.0171 9.3976 25.3968 11.0179 25.3968 13.0167V14.2231"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M30.2222 9.27079H29.0159C27.0171 9.27079 25.3968 7.65046 25.3968 5.65168V4.44531"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.4443 9.27079H21.6506C23.6495 9.27079 25.2698 7.65046 25.2698 5.65168V4.44531"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.9552 16.5915C19.6291 18.7774 17.5927 20.285 15.4069 19.9589C13.221 19.6327 11.7134 17.5964 12.0395 15.4105C12.3657 13.2246 14.402 11.717 16.5879 12.0432"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3051_578">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
