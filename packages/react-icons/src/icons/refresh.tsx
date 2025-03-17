import React from 'react';
import { IconProps } from '../types';

export const RefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 5.33128C19.9069 5.33096 23.5013 7.46656 25.3693 10.8979"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6667 15.9979C26.6667 21.889 21.891 26.6646 16 26.6646"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 26.6646C12.0931 26.6649 8.49866 24.5293 6.63068 21.0979"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33334 15.9979C5.33334 10.1069 10.109 5.33126 16 5.33126"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.63068 21.098C9.44642 26.2725 15.9238 28.1847 21.0984 25.3689C24.5309 23.5011 26.6673 19.9058 26.6667 15.998"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33334 15.9979V15.9963C5.33334 10.1053 10.109 5.32963 16 5.32963C19.9078 5.32963 23.5028 7.46653 25.3701 10.8994"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7294 21.098H6.01602V25.8126"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.2707 10.8979H25.984V6.18328"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
