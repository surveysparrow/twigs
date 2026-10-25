import React from 'react';
import { IconProps } from '../types';

export const MailSendIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.56249, ...rest
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
        <g clipPath="url(#clip0_2125_557)">
          <path
            d="M10.6666 10.6667H6.38531C5.06799 10.6667 4 11.7347 4 13.052C4 13.8426 4.392 14.5826 5.04666 15.0266L12.9893 20.4092C14.8079 21.6412 17.1932 21.6412 19.0119 20.4092L26.9518 15.028C27.6078 14.584 27.9998 13.844 27.9998 13.0533V13.052C27.9998 11.7347 26.9318 10.6667 25.6145 10.6667H21.3332"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 13.0735V25.3334C4 26.8067 5.19332 28 6.66664 28H25.3331C26.8065 28 27.9998 26.8067 27.9998 25.3334V13.0735"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4.74394 27.1827L12.1092 19.8175"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.8878 19.8161L27.2531 27.1814"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.9986 4V13.2612"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.9986 4L18.6651 6.66664"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.9986 4L13.3318 6.66664"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2125_557">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
