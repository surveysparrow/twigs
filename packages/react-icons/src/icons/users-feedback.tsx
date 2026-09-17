import React from 'react';
import { IconProps } from '../types';

export const UsersFeedbackIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_630)">
          <path
            d="M18.6665 8.66667C20.1393 8.66667 21.3332 9.86057 21.3332 11.3333C21.3332 12.8061 20.1393 14 18.6665 14"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.3332 20C17.3332 18.5272 16.1393 17.3333 14.6665 17.3333H10.6665C9.19378 17.3333 7.99988 18.5272 7.99988 20"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.9999 20C23.9999 18.5272 22.806 17.3333 21.3332 17.3333H19.9999"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.3332 11.3333C15.3332 12.8061 14.1393 14 12.6665 14C11.1938 14 9.99988 12.8061 9.99988 11.3333C9.99988 9.86057 11.1938 8.66667 12.6665 8.66667C14.1393 8.66667 15.3332 9.86057 15.3332 11.3333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.781 25.3333L15.0571 27.6095C15.5778 28.1301 16.422 28.1301 16.9427 27.6095L19.2188 25.3333H23.9999C26.209 25.3333 27.9999 23.5425 27.9999 21.3333V8C27.9999 5.79086 26.209 4 23.9999 4H7.99988C5.79074 4 3.99988 5.79086 3.99988 8V21.3333C3.99988 23.5425 5.79074 25.3333 7.99988 25.3333H12.781Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_630">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
