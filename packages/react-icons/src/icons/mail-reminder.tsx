import React from 'react';
import { IconProps } from '../types';

export const MailReminderIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_250)">
          <path
            d="M24.3333 20.8667V23L22.6667 24"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.6667 24H9.33333C6.38781 24 4 21.6122 4 18.6667V9.33333C4 6.38781 6.38781 4 9.33333 4H22.6667C25.6122 4 28 6.38781 28 9.33333V13.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.33333 10.0001L14.9395 12.4444C15.6166 12.7396 16.3857 12.7408 17.0637 12.4476L22.6667 10.0249"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M29.3333 22.6667C29.3333 25.6122 26.9455 28 24 28C21.0545 28 18.6667 25.6122 18.6667 22.6667C18.6667 19.7211 21.0545 17.3333 24 17.3333C26.9455 17.3333 29.3333 19.7211 29.3333 22.6667Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_250">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
