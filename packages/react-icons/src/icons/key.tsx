import React from 'react';
import { IconProps } from '../types';

export const KeyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.2 11.8667C18.9334 11.8667 18.6667 12.1333 18.6667 12.4C18.6667 12.6667 18.9334 12.9333 19.2 12.9333C19.4667 12.9333 19.7334 12.6667 19.7334 12.4C19.7334 12.1333 19.4667 11.8667 19.2 11.8667Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.6667 15.0667L11.4667 12.4C11.0667 11.3333 11.3334 10.1333 12.1334 9.33333L16 5.46667C16.8 4.66667 17.8667 4.53333 18.9334 4.93333L23.6 6.93333C24.2667 7.2 24.8 7.73333 25.0667 8.4L27.0667 13.0667C27.4667 14.1333 27.2 15.2 26.5334 16L22.6667 19.8667C21.8667 20.6667 20.8 20.8 19.7334 20.4L16.9334 19.2L8.93335 27.2H4.66669V22.9333L12.6667 15.0667Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
