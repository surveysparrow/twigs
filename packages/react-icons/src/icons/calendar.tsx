import React from 'react';
import { IconProps } from '../types';

export const CalendarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.3334 2.66666V8"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6667 2.66666V8"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12H28"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.3333 5.33333H6.66667C5.19333 5.33333 4 6.52666 4 7.99999V25.3333C4 26.8067 5.19333 28 6.66667 28H25.3333C26.8067 28 28 26.8067 28 25.3333V7.99999C28 6.52666 26.8067 5.33333 25.3333 5.33333Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0173 16.972C15.8333 16.972 15.684 17.1213 15.6853 17.3053C15.6853 17.4893 15.8347 17.6387 16.0187 17.6387C16.2027 17.6387 16.352 17.4893 16.352 17.3053C16.352 17.1213 16.2027 16.972 16.0173 16.972"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.684 16.972C22.5 16.972 22.3507 17.1213 22.352 17.3053C22.352 17.4893 22.5013 17.6387 22.6853 17.6387C22.8693 17.6387 23.0187 17.4893 23.0187 17.3053C23.0187 17.1213 22.8693 16.972 22.684 16.972"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.35064 22.3053C9.16664 22.3053 9.01731 22.4547 9.01864 22.6387C9.01864 22.8227 9.16797 22.972 9.35197 22.972C9.53597 22.972 9.68531 22.8227 9.68531 22.6387C9.68531 22.4547 9.53597 22.3053 9.35064 22.3053"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0173 22.3053C15.8333 22.3053 15.684 22.4547 15.6853 22.6387C15.6853 22.8227 15.8347 22.972 16.0187 22.972C16.2027 22.972 16.352 22.8227 16.352 22.6387C16.352 22.4547 16.2027 22.3053 16.0173 22.3053"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
