import React from 'react';
import { IconProps } from '../types';

export const HomeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.6667 17.3333H16.3333C17.3058 17.3333 18.2384 17.7196 18.9261 18.4073C19.6137 19.0949 20 20.0275 20 21V28H12V21C12 20.0275 12.3863 19.0949 13.0739 18.4073C13.7616 17.7196 14.6942 17.3333 15.6667 17.3333Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 24V14.6129C4 13.7131 4.20238 12.8248 4.59217 12.0138C4.98196 11.2028 5.54916 10.4899 6.2518 9.92775L11.8353 5.46089C13.0174 4.51521 14.4862 3.99999 16 3.99999C17.5138 3.99999 18.9826 4.51521 20.1647 5.46089L25.7482 9.92773C26.4508 10.4898 27.018 11.2028 27.4078 12.0138C27.7976 12.8248 28 13.7131 28 14.6129V24C28 25.0609 27.5786 26.0783 26.8284 26.8284C26.0783 27.5786 25.0609 28 24 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
