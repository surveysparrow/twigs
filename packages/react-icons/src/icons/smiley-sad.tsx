import React from 'react';
import { IconProps } from '../types';

export const SmileySadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24.4853 7.51472C29.1716 12.201 29.1716 19.799 24.4853 24.4853C19.7991 29.1715 12.2011 29.1715 7.51481 24.4853C2.82852 19.799 2.82852 12.201 7.51481 7.51472C12.2011 2.82843 19.7991 2.82843 24.4853 7.51472"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3333 21.3333C11.3333 21.3333 13.084 19.584 16 19.584C18.9173 19.584 20.6667 21.3333 20.6667 21.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33334 13.3333C9.86001 12.6866 10.58 12.32 11.3333 12.32C12.0867 12.32 12.7867 12.6866 13.3333 13.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.6667 13.3333C19.1933 12.6866 19.9133 12.32 20.6667 12.32C21.42 12.32 22.12 12.6866 22.6667 13.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
