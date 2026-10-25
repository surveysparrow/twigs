import React from 'react';
import { IconProps } from '../types';

export const MailUnsubscribeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_422)">
          <path
            d="M4 13.3333L13.6 20.5333C15.0222 21.6 16.9778 21.6 18.4 20.5333L28 13.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.3333 11L17.6667 14.3334"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.3333 14.3334L17.6667 11"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.9547 11.3507L18.432 4.8242C16.9969 3.72527 15.0032 3.72527 13.5681 4.8242L5.04533 11.3507C4.3864 11.8553 3.99999 12.6379 4 13.4679V24C4 26.2091 5.79086 28 8 28H24C26.2091 28 28 26.2091 28 24V13.4678C28 12.6379 27.6136 11.8553 26.9547 11.3507Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_422">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
