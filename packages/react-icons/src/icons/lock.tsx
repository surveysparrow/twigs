import React from 'react';
import { IconProps } from '../types';

export const LockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.948 12.292V9.33734C10.948 6.60134 12.9973 4.14934 15.7293 4.00667C18.6427 3.85467 21.0533 6.172 21.0533 9.052V12.292"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M22.1282 13.2051C25.5128 16.5896 25.5128 22.0771 22.1282 25.4616C18.7437 28.8461 13.2563 28.8461 9.87172 25.4616C6.48718 22.0771 6.48718 16.5896 9.87172 13.2051C13.2563 9.82054 18.7437 9.82054 22.1282 13.2051"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M16 22V18.6"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M15.996 16.5747C15.444 16.5747 14.996 17.0227 15 17.5747C15 18.1267 15.448 18.5747 16 18.5747C16.552 18.5747 17 18.1267 17 17.5747C17 17.0227 16.552 16.5747 15.996 16.5747Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
