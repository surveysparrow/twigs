import React from 'react';
import { IconProps } from '../types';

export const ProjectsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_826_17517)">
          <path
            d="M13.0667 4.63166V9.3685"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.0667 13.6317V18.3685"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.0667 22.6317V27.3685"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.46667 4L25.5333 4C26.3434 4 27 4.56553 27 5.26316V8.73684C27 9.43446 26.3434 10 25.5333 10L6.46667 10C5.65665 10 5 9.43446 5 8.73684V5.26316C5 4.56553 5.65665 4 6.46667 4Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.46667 13L25.5333 13C26.3434 13 27 13.5655 27 14.2632V17.7368C27 18.4345 26.3434 19 25.5333 19L6.46667 19C5.65665 19 5 18.4345 5 17.7368V14.2632C5 13.5655 5.65665 13 6.46667 13Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.46667 22H25.5333C26.3434 22 27 22.5655 27 23.2632V26.7368C27 27.4345 26.3434 28 25.5333 28H6.46667C5.65665 28 5 27.4345 5 26.7368V23.2632C5 22.5655 5.65665 22 6.46667 22Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_826_17517">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
