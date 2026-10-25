import React from 'react';
import { IconProps } from '../types';

export const VideoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_741)">
          <path
            d="M2.66675 10.6667H29.3334"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.00008 10.6667L10.6667 4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.6667 10.6667L17.3334 4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.3334 10.6667L24.0001 4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.6667 28H5.33341C4.62611 28.0002 3.94772 27.7193 3.44758 27.2192C2.94744 26.719 2.66655 26.0406 2.66675 25.3333V6.66667C2.66655 5.95936 2.94744 5.28097 3.44758 4.78083C3.94772 4.28069 4.62611 3.99981 5.33341 4H26.6667C27.374 3.99981 28.0524 4.28069 28.5526 4.78083C29.0527 5.28097 29.3336 5.95936 29.3334 6.66667V25.3333C29.3336 26.0406 29.0527 26.719 28.5526 27.2192C28.0524 27.7193 27.374 28.0002 26.6667 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.4968 21.7988V16.8679C13.4969 16.5582 13.6622 16.272 13.9305 16.1172C14.1988 15.9625 14.5292 15.9626 14.7974 16.1176L19.0638 18.5831C19.3318 18.7379 19.4968 19.0239 19.4968 19.3333C19.4968 19.6428 19.3318 19.9288 19.0638 20.0836L14.7974 22.5491C14.5293 22.7041 14.1988 22.7042 13.9305 22.5494C13.6622 22.3947 13.4969 22.1085 13.4968 21.7988Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_741">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
