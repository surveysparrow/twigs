import React from 'react';
import { IconProps } from '../types';

export const BackspaceIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M19.3333 18L15.3333 14"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M19.3333 14L15.3333 18"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M22.6667 6.66666H12.5333C11.7335 6.66667 10.9439 6.84657 10.223 7.19305C9.50213 7.53953 8.8684 8.04371 8.36874 8.66828L5.16874 12.6683C4.4122 13.6139 4.00003 14.7889 4.00003 16C4.00003 17.2111 4.4122 18.386 5.16874 19.3317L8.36874 23.3317C8.8684 23.9563 9.50213 24.4605 10.223 24.8069C10.9439 25.1534 11.7335 25.3333 12.5333 25.3333H22.6667C24.0812 25.3333 25.4377 24.7714 26.4379 23.7712C27.4381 22.771 28 21.4145 28 20V12C28 10.5855 27.4381 9.22895 26.4379 8.22876C25.4377 7.22857 24.0812 6.66666 22.6667 6.66666Z"
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
