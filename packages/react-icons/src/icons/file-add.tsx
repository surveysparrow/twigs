import React from 'react';
import { IconProps } from '../types';

export const FileAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1293_17512)">
          <path
            d="M22.9474 12.8421V10.0985C22.9474 9.42905 22.6809 8.78611 22.2072 8.31242L18.635 4.74021C18.1613 4.26653 17.5183 4 16.8489 4H7.7895C6.39371 4 5.26318 5.13053 5.26318 6.52632V24.2105C5.26318 25.6063 6.39371 26.7368 7.7895 26.7368H12.8421"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.9474 10.3158H17.8948C17.1975 10.3158 16.6316 9.74989 16.6316 9.05263V4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.0527 20.0484V24.5819"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.32 22.3158H18.7866"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.0527 28C17.9137 28 15.3684 25.4547 15.3684 22.3158C15.3684 19.1768 17.9137 16.6316 21.0527 16.6316C24.1929 16.6316 26.7369 19.1768 26.7369 22.3158C26.7369 25.4547 24.1929 28 21.0527 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1293_17512">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
