import React from 'react';
import { IconProps } from '../types';

export const LinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 20.3333H17.6667C19.876 20.3333 21.6667 18.5427 21.6667 16.3333V11C21.6667 8.79067 19.876 7 17.6667 7H7C4.79067 7 3 8.79067 3 11V16.3333C3 18.5427 4.79067 20.3333 7 20.3333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M17.6667 12.3333H15C12.7907 12.3333 11 14.124 11 16.3333V21.6667C11 23.876 12.7907 25.6667 15 25.6667H25.6667C27.876 25.6667 29.6667 23.876 29.6667 21.6667V16.3333C29.6667 14.124 27.876 12.3333 25.6667 12.3333"
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
