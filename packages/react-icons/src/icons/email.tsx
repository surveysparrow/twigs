import React from 'react';
import { IconProps } from '../types';

export const EmailIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23.6421 6H10.3088C7.36328 6 4.97546 8.38781 4.97546 11.3333V20.6667C4.97546 23.6122 7.36328 26 10.3088 26H23.6421C26.5877 26 28.9755 23.6122 28.9755 20.6667V11.3333C28.9755 8.38781 26.5877 6 23.6421 6Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.3088 11.9783L15.9149 14.4227C16.2499 14.5687 16.6113 14.6443 16.9767 14.6449C17.3421 14.6454 17.7037 14.5709 18.0391 14.4259L23.6421 12.0032"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
