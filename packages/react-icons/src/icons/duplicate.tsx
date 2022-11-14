import React from 'react';
import { IconProps } from '../types';

export const DuplicateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.33331 8V18.6667C9.33331 19.7275 9.75474 20.7449 10.5049 21.4951C11.255 22.2452 12.2724 22.6667 13.3333 22.6667H24C25.0608 22.6667 26.0783 22.2452 26.8284 21.4951C27.5786 20.7449 28 19.7275 28 18.6667V8C28 6.93913 27.5786 5.92172 26.8284 5.17157C26.0783 4.42143 25.0608 4 24 4H13.3333C12.2724 4 11.255 4.42143 10.5049 5.17157C9.75474 5.92172 9.33331 6.93913 9.33331 8Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.6667 22.6667V24C22.6667 25.0609 22.2452 26.0783 21.4951 26.8284C20.7449 27.5786 19.7275 28 18.6667 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24V13.3333C4 12.2725 4.42143 11.255 5.17157 10.5049C5.92172 9.75476 6.93913 9.33333 8 9.33333H9.33333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.6677 16V10.6667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 13.3323H21.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
