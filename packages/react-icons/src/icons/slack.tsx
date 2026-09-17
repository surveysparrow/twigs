import React from 'react';
import { IconProps } from '../types';

export const SlackIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_228)">
          <path
            d="M28 19C28 19.9947 27.1947 20.8 26.2 20.8H20.2C19.2053 20.8 18.4 19.9947 18.4 19C18.4 18.0053 19.2053 17.2 20.2 17.2H26.2C27.1947 17.2 28 18.0053 28 19Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.4 24.4H20.2C21.1947 24.4 22 25.2053 22 26.2C22 27.1947 21.1947 28 20.2 28C19.2053 28 18.4 27.1947 18.4 26.2V24.4Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19 4C19.9947 4 20.8 4.80533 20.8 5.8V11.8C20.8 12.7947 19.9947 13.6 19 13.6C18.0053 13.6 17.2 12.7947 17.2 11.8V5.8C17.2 4.80533 18.0053 4 19 4Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.4 13.6V11.8C24.4 10.8053 25.2053 10 26.2 10C27.1947 10 28 10.8053 28 11.8C28 12.7947 27.1947 13.6 26.2 13.6H24.4Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 13C4 12.0053 4.80533 11.2 5.8 11.2H11.8C12.7947 11.2 13.6 12.0053 13.6 13C13.6 13.9947 12.7947 14.8 11.8 14.8H5.8C4.80533 14.8 4 13.9947 4 13Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.6 7.6H11.8C10.8053 7.6 10 6.79467 10 5.8C10 4.80533 10.8053 4 11.8 4C12.7947 4 13.6 4.80533 13.6 5.8V7.6Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13 28C12.0053 28 11.2 27.1947 11.2 26.2V20.2C11.2 19.2053 12.0053 18.4 13 18.4C13.9947 18.4 14.8 19.2053 14.8 20.2V26.2C14.8 27.1947 13.9947 28 13 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M7.6 18.4V20.2C7.6 21.1947 6.79467 22 5.8 22C4.80533 22 4 21.1947 4 20.2C4 19.2053 4.80533 18.4 5.8 18.4H7.6Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_228">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
