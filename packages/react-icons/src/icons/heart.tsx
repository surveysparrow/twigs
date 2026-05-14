import React from 'react';
import { IconProps } from '../types';

export const HeartIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1071_1847)">
          <path
            d="M20.9333 5.33398C25.16 5.33398 28 9.30732 28 13.014C28 20.5207 16.2133 26.6673 16 26.6673C15.7867 26.6673 4 20.5207 4 13.014C4 9.30732 6.84 5.33398 11.0667 5.33398C13.4933 5.33398 15.08 6.54732 16 7.61398C16.92 6.54732 18.5067 5.33398 20.9333 5.33398Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            fillRule="evenodd"
            clipRule="evenodd"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1071_1847">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
