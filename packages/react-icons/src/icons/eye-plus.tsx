import React from 'react';
import { IconProps } from '../types';

export const EyePlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          d="M18.8294 13.1733C20.3907 14.7347 20.3907 17.2693 18.8294 18.8333C17.268 20.3947 14.7334 20.3947 13.1694 18.8333C11.608 17.272 11.608 14.7373 13.1694 13.1733C14.7334 11.6093 17.2667 11.6093 18.8294 13.1733Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M16 25.3333C11.0787 25.3333 6.61467 22.6787 4.59467 18.5493C4.20267 17.748 4 16.8787 4 16C4 15.1213 4.20267 14.252 4.59467 13.4507C6.61467 9.32132 11.0787 6.66666 16 6.66666C20.9213 6.66666 25.3853 9.32132 27.4053 13.4507C27.7973 14.252 28 15.1213 28 16"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M27.3333 24H22"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M24.6667 21.3333V26.6666"
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
