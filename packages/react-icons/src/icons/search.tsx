import React from 'react';
import { IconProps } from '../types';

export const SearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.9242 7.44249C22.0333 10.5516 22.0333 15.5924 18.9242 18.7015C15.8151 21.8106 10.7742 21.8106 7.66513 18.7015C4.55604 15.5924 4.55604 10.5516 7.66513 7.44249C10.7742 4.3334 15.8151 4.3334 18.9242 7.44249"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.8666 18.7467L26.6666 26.6533"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
