import React from 'react';
import { IconProps } from '../types';

export const TextRenameIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1320_17520)">
          <path
            d="M11.9951 4H13.3284C14.8012 4 15.9951 5.1939 15.9951 6.66666"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.9951 6.66666C15.9951 5.1939 17.189 4 18.6617 4H19.9951"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.9951 6.66666L15.9951 26.6666"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.9951 28H18.6617C17.189 28 15.9951 26.8061 15.9951 25.3333C15.9951 26.8061 14.8012 28 13.3284 28H11.9951"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.9951 24H6.66178C5.18902 24 3.99512 22.8061 3.99512 21.3333V10.6667C3.99512 9.19393 5.18902 8.00003 6.66178 8.00003H11.9951"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.9951 24H25.3284C26.8011 24 27.9951 22.8061 27.9951 21.3333V10.6667C27.9951 9.19393 26.8011 8.00003 25.3284 8.00003H19.9951"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1320_17520">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
