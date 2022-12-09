import React from 'react';
import { IconProps } from '../types';

export const DownloadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M16 22.6667V4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6666 28H5.33331"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.6666 16L15.9986 22.668L9.33197 16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

    );
  }
);
