import React from 'react';
import { IconProps } from '../types';

export const PagesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_764)">
          <path
            d="M22.6833 11.1998L21.7635 5.98338C21.6532 5.35645 21.2982 4.79907 20.7768 4.43394C20.2553 4.06881 19.6101 3.92586 18.9833 4.03657L5.98358 6.32873C5.35664 6.43909 4.79926 6.79408 4.43413 7.31553C4.069 7.83698 3.92606 8.48215 4.03677 9.10903L6.12054 20.9269C6.2309 21.5539 6.5859 22.1113 7.10738 22.4764C7.62886 22.8415 8.27408 22.9844 8.90097 22.8737L9.99994 22.6799"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.6002 28H12.4C11.7634 28.0002 11.1528 27.7474 10.7027 27.2972C10.2526 26.8471 9.99976 26.2365 9.99994 25.6V13.5998C9.99976 12.9632 10.2526 12.3527 10.7027 11.9025C11.1528 11.4524 11.7634 11.1996 12.4 11.1998H25.6002C26.2367 11.1996 26.8473 11.4524 27.2974 11.9025C27.7476 12.3527 28.0004 12.9632 28.0002 13.5998V25.6C28.0001 26.9254 26.9256 27.9999 25.6002 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_764">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
