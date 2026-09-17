import React from 'react';
import { IconProps } from '../types';

export const NineDotGridIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, ...rest
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
        <g clipPath="url(#clip0_3845_397)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.66667 18.6667C5.19333 18.6667 4 17.4733 4 16C4 14.5267 5.19333 13.3333 6.66667 13.3333C8.14 13.3333 9.33333 14.5267 9.33333 16C9.33333 17.4733 8.14 18.6667 6.66667 18.6667Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 18.6667C14.5267 18.6667 13.3333 17.4733 13.3333 16C13.3333 14.5267 14.5267 13.3333 16 13.3333C17.4733 13.3333 18.6667 14.5267 18.6667 16C18.6667 17.4733 17.4733 18.6667 16 18.6667Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.3333 18.6667C23.86 18.6667 22.6667 17.4733 22.6667 16C22.6667 14.5267 23.86 13.3333 25.3333 13.3333C26.8067 13.3333 28 14.5267 28 16C28 17.4733 26.8067 18.6667 25.3333 18.6667Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.66667 28C5.19333 28 4 26.8067 4 25.3333C4 23.86 5.19333 22.6667 6.66667 22.6667C8.14 22.6667 9.33333 23.86 9.33333 25.3333C9.33333 26.8067 8.14 28 6.66667 28Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 28C14.5267 28 13.3333 26.8067 13.3333 25.3333C13.3333 23.86 14.5267 22.6667 16 22.6667C17.4733 22.6667 18.6667 23.86 18.6667 25.3333C18.6667 26.8067 17.4733 28 16 28Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.3333 28C23.86 28 22.6667 26.8067 22.6667 25.3333C22.6667 23.86 23.86 22.6667 25.3333 22.6667C26.8067 22.6667 28 23.86 28 25.3333C28 26.8067 26.8067 28 25.3333 28Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.66667 9.33333C5.19333 9.33333 4 8.14 4 6.66667C4 5.19333 5.19333 4 6.66667 4C8.14 4 9.33333 5.19333 9.33333 6.66667C9.33333 8.14 8.14 9.33333 6.66667 9.33333Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 9.33333C14.5267 9.33333 13.3333 8.14 13.3333 6.66667C13.3333 5.19333 14.5267 4 16 4C17.4733 4 18.6667 5.19333 18.6667 6.66667C18.6667 8.14 17.4733 9.33333 16 9.33333Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.3333 9.33333C23.86 9.33333 22.6667 8.14 22.6667 6.66667C22.6667 5.19333 23.86 4 25.3333 4C26.8067 4 28 5.19333 28 6.66667C28 8.14 26.8067 9.33333 25.3333 9.33333Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_3845_397">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
