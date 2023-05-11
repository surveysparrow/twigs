import React from 'react';
import { IconProps } from '../types';

export const TabletIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
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
        <g clipPath="url(#clip0_2926_8862)">
          <rect
            x="6.66278"
            y="3.995"
            width="18.6744"
            height="24.01"
            rx="2"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 24.4475C15.8771 24.4483 15.7781 24.5483 15.7786 24.6712C15.7791 24.794 15.8789 24.8933 16.0018 24.8931C16.1246 24.8928 16.2241 24.7932 16.2241 24.6703C16.2234 24.5471 16.1232 24.4475 16 24.4475"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2926_8862">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
