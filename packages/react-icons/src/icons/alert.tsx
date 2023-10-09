import React from 'react';
import { IconProps } from '../types';

export const AlertIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M16 17.4933V12.5067" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.7053 5.51867L28.9173 23.3907C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3907L13.2947 5.51867C14.4907 3.424 17.5093 3.424 18.7053 5.51867Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="21.3333" r="1.33333" fill={color} />
      </svg>
    );
  }
);
