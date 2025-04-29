import React from 'react';
import { IconProps } from '../types';

export const UserCirclePlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          d="M29.3174 13.1852C29.9372 15.8735 29.6652 18.6904 28.5425 21.2105C27.4198 23.7305 25.5074 25.8166 23.0943 27.1538C20.6812 28.4909 17.8984 29.0063 15.1665 28.6221C12.4346 28.2379 9.90192 26.9751 7.95115 25.0243C6.00039 23.0735 4.73752 20.5409 4.35336 17.8089C3.9692 15.077 4.48462 12.2943 5.82173 9.88116C7.15885 7.46806 9.24502 5.55569 11.765 4.43299C14.2851 3.3103 17.102 3.03828 19.7903 3.65803"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M26.4743 8.61111V4.38889"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M24.3644 6.50122H28.5866"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M16.9755 16C18.8164 16 20.3088 14.5076 20.3088 12.6667C20.3088 10.8257 18.8164 9.33334 16.9755 9.33334C15.1345 9.33334 13.6421 10.8257 13.6421 12.6667C13.6421 14.5076 15.1345 16 16.9755 16Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M10.9755 21.3333C11.2344 20.7392 11.6611 20.2335 12.2032 19.8783C12.7453 19.523 13.3793 19.3336 14.0274 19.3333H19.9235C20.5717 19.3336 21.2056 19.523 21.7477 19.8783C22.2898 20.2335 22.7165 20.7392 22.9755 21.3333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
