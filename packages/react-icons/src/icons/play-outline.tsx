import React from 'react';
import { IconProps } from '../types';

export const PlayOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M28 16C28 22.628 22.628 28 16 28C9.372 28 4 22.628 4 16C4 9.372 9.372 4 16 4C22.628 4 28 9.372 28 16Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.588 12.0773L19.764 15.1386C20.4187 15.5253 20.4187 16.4733 19.764 16.86L14.588 19.9213C13.9213 20.316 13.0787 19.8346 13.0787 19.06V12.9386C13.0787 12.164 13.9213 11.6826 14.588 12.0773Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
