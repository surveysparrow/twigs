import React from 'react';
import { IconProps } from '../types';

export const FaceChatIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_551_89)">
          <path
            d="M20.421 20.0264C20.421 20.0264 18.7625 21.6837 16 21.6837C13.2362 21.6837 11.5789 20.0264 11.5789 20.0264"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.3138 13.1451C21.8149 13.7577 21.1328 14.1051 20.4191 14.1051C19.7054 14.1051 19.0422 13.7577 18.5243 13.1451"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.4737 13.1448C12.9747 13.7574 12.2926 14.1048 11.5789 14.1048C10.8653 14.1048 10.2021 13.7574 9.68421 13.1448"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.2097 4.00001C11.9314 3.9937 7.98652 6.30906 5.9061 10.048C3.82568 13.787 3.93811 18.3608 6.19916 21.9924L4 28L10.0063 25.8008C14.2556 28.4345 19.7048 28.1011 23.6004 24.9672C27.496 21.8333 28.9903 16.5823 27.328 11.867C25.6669 7.15033 21.2093 3.99749 16.2097 4.00001Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_551_89">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
