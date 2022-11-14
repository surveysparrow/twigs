import React from 'react';
import { IconProps } from '../types';

export const SaveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.17159 6.82843L6.82844 5.17157C7.57859 4.42143 8.596 4 9.65687 4H24C25.0609 4 26.0783 4.42143 26.8284 5.17157C27.5786 5.92172 28 6.93913 28 8V24C28 25.0609 27.5786 26.0783 26.8284 26.8284C26.0783 27.5786 25.0609 28 24 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24V9.65685C4 9.13157 4.10347 8.61142 4.30449 8.12612C4.50551 7.64082 4.80015 7.19986 5.17159 6.82843V6.82843Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.3334 4V9.33333C21.3334 9.68695 21.1929 10.0261 20.9428 10.2761C20.6928 10.5262 20.3536 10.6667 20 10.6667H12C11.6464 10.6667 11.3073 10.5262 11.0572 10.2761C10.8072 10.0261 10.6667 9.68695 10.6667 9.33333V4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 23.3333C18.2091 23.3333 20 21.5425 20 19.3333C20 17.1242 18.2091 15.3333 16 15.3333C13.7909 15.3333 12 17.1242 12 19.3333C12 21.5425 13.7909 23.3333 16 23.3333Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
