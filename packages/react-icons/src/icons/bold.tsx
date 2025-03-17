import React from 'react';
import { IconProps } from '../types';

export const BoldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.33334 8H17.1667C18.2275 8 19.245 8.42143 19.9951 9.17157C20.7452 9.92172 21.1667 10.9391 21.1667 12C21.1667 13.0609 20.7452 14.0783 19.9951 14.8284C19.245 15.5786 18.2275 16 17.1667 16H9.33334V8Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33334 16H18.6667C19.7275 16 20.745 16.4214 21.4951 17.1716C22.2452 17.9217 22.6667 18.9391 22.6667 20C22.6667 21.0609 22.2452 22.0783 21.4951 22.8284C20.745 23.5786 19.7275 24 18.6667 24H9.33334V16Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
