import React from 'react';
import { IconProps } from '../types';

export const CheckmarkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_945_562)">
          <path
            d="M6.22015 22.9451C6.99664 24.0385 7.94963 24.9942 9.03984 25.773"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4.17949 14.0001C3.94017 15.3226 3.94017 16.6774 4.17949 17.9999"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.22015 9.05493C6.99624 7.96083 7.94928 7.00457 9.03984 6.2257"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.9707 27.8196C18.6719 28.6455 23.4129 26.5903 26.0341 22.5901C28.6553 18.59 28.6553 13.41 26.0341 9.40985C23.4129 5.40967 18.6719 3.35449 13.9707 4.18045"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.3043 14.2761L15.1312 18.4612L12.6226 15.9533"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_945_562">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
