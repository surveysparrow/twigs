import React from 'react';
import { IconProps } from '../types';

export const ClockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M6.22668 22.9453C7.00535 24.0386 7.96135 24.9946 9.05468 25.7733" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.18001 14C4.07067 14.652 4.00001 15.3173 4.00001 16C4.00001 16.6827 4.07067 17.348 4.18001 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.22668 9.05467C7.00535 7.96001 7.96002 7.00534 9.05468 6.22534" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 27.82C14.652 27.9293 15.3173 28 16 28C22.628 28 28 22.628 28 16C28 9.372 22.628 4 16 4C15.3173 4 14.652 4.07067 14 4.18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.6237 10.6484V16.8498L20.4984 19.8218" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
);
