import React from 'react';
import { IconProps } from '../types';

export const QrGridIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_809)">
          <path
            d="M4 20.4213V6.52667C4 5.13067 5.13067 4 6.52667 4H20.4213"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20 16.5H22.5C22.7761 16.5 23 16.2761 23 16V13.5C23 13.2239 22.7761 13 22.5 13H20C19.7239 13 19.5 13.2239 19.5 13.5V16C19.5 16.2761 19.7239 16.5 20 16.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.5 16.5H16C16.2761 16.5 16.5 16.2761 16.5 16V13.5C16.5 13.2239 16.2761 13 16 13H13.5C13.2239 13 13 13.2239 13 13.5V16C13 16.2761 13.2239 16.5 13.5 16.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.5 23H16C16.2761 23 16.5 22.7761 16.5 22.5V20C16.5 19.7239 16.2761 19.5 16 19.5H13.5C13.2239 19.5 13 19.7239 13 20V22.5C13 22.7761 13.2239 23 13.5 23Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.255 21.25L21.25 21.255L21.245 21.25L21.25 21.245L21.255 21.25Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.9552 19.5508L22.9502 19.5558L22.9452 19.5508L22.9502 19.5458L22.9552 19.5508Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.5548 19.5508L19.5498 19.5558L19.5448 19.5508L19.5498 19.5458L19.5548 19.5508Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.9552 23.0508L22.9502 23.0558L22.9452 23.0508L22.9502 23.0458L22.9552 23.0508Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.5548 23.0508L19.5498 23.0558L19.5448 23.0508L19.5498 23.0458L19.5548 23.0508Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.3333 28H10.6667C9.19333 28 8 26.8067 8 25.3333V10.6667C8 9.19333 9.19333 8 10.6667 8H25.3333C26.8067 8 28 9.19333 28 10.6667V25.3333C28 26.8067 26.8067 28 25.3333 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_809">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
