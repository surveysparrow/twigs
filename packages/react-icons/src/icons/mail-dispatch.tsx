import React from 'react';
import { IconProps } from '../types';

export const MailDispatchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_424)">
          <path
            d="M19.4667 8.93398C20 9.46732 20.1333 10.134 20 10.6673L18.5333 18.4007C18.1333 20.2673 16.6667 21.734 14.8 22.134L7.06667 23.6006C6.4 23.734 5.73333 23.4673 5.33333 23.0673C4.53333 22.2673 4.53333 21.0673 5.33333 20.2673L16.6667 8.93398C17.3333 8.13398 18.6667 8.13398 19.4667 8.93398Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.4667 8.93398L26.4 15.8673C27.4667 16.934 27.4667 18.534 26.4 19.6007L18 28.0007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 28.0007H28"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.2 23.2007L10.1333 28.0007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_424">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
