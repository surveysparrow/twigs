import React from 'react';
import { IconProps } from '../types';

export const EyeOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        ref={ref}
      >
        <path d="M18.8294 13.1734C20.3907 14.7347 20.3907 17.2694 18.8294 18.8334C17.268 20.3947 14.7334 20.3947 13.1694 18.8334C11.608 17.272 11.608 14.7374 13.1694 13.1734C14.7334 11.6094 17.2667 11.6094 18.8294 13.1734Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16C4 15.1214 4.20267 14.252 4.59467 13.4507C6.61467 9.32135 11.0787 6.66669 16 6.66669C20.9213 6.66669 25.3853 9.32135 27.4053 13.4507C27.7973 14.252 28 15.1214 28 16C28 16.8787 27.7973 17.748 27.4053 18.5494C25.3853 22.6787 20.9213 25.3334 16 25.3334C11.0787 25.3334 6.61467 22.6787 4.59467 18.5494C4.20267 17.748 4 16.8787 4 16Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    );
  }
);
