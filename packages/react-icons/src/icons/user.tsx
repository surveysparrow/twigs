import React from 'react';
import { IconProps } from '../types';

export const UserIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...rest}
      >
        <circle
          cx="16.1482"
          cy="10.0748"
          r="4.7408"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.4074 19.047H20.889C23.5072 19.047 25.6297 21.1696 25.6297 23.7878V25.481C25.6297 26.1355 25.0991 26.6662 24.4445 26.6662H7.85182C7.19726 26.6662 6.66663 26.1355 6.66663 25.481V23.7878C6.66663 21.1696 8.78914 19.047 11.4074 19.047Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
