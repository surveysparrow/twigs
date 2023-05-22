import React from 'react';
import { IconProps } from '../types';

export const BulletList = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8.58667H26.6667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6667 16H12"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 23.4133H26.6667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.00001 7.91864C5.63182 7.91864 5.33334 8.21712 5.33334 8.58531C5.33334 8.9535 5.63182 9.25197 6.00001 9.25197C6.3682 9.25197 6.66668 8.9535 6.66668 8.58531C6.66668 8.21712 6.3682 7.91864 6.00001 7.91864Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.00001 15.3333C5.63182 15.3333 5.33334 15.6318 5.33334 16C5.33334 16.3682 5.63182 16.6666 6.00001 16.6666C6.3682 16.6666 6.66668 16.3682 6.66668 16C6.66668 15.6318 6.3682 15.3333 6.00001 15.3333Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.00001 22.748C5.63182 22.748 5.33334 23.0465 5.33334 23.4147C5.33334 23.7828 5.63182 24.0813 6.00001 24.0813C6.3682 24.0813 6.66668 23.7828 6.66668 23.4147C6.66668 23.0465 6.3682 22.748 6.00001 22.748Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
