import React from 'react';
import { IconProps } from '../types';

export const PalettePickerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1496_1850)">
          <path
            d="M5.36667 11.9667L18.3147 24.9147C18.8147 25.4147 19.4928 25.6957 20.2 25.6957C20.9072 25.6957 21.5853 25.4147 22.0853 24.9147L24.9133 22.0867C25.4134 21.5867 25.6943 20.9085 25.6943 20.2013C25.6943 19.4942 25.4134 18.816 24.9133 18.316L19.9333 13.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.3333 19.9333V25.3333C13.3335 26.0406 13.0526 26.719 12.5525 27.2192C12.0524 27.7193 11.374 28.0002 10.6667 28H6.66667C5.95936 28.0002 5.28097 27.7193 4.78083 27.2192C4.28069 26.719 3.99981 26.0406 4 25.3333V8.66667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 8.66667C4 11.244 6.08934 13.3333 8.66667 13.3333H25.3333C26.8061 13.3333 28 12.1394 28 10.6667V6.66667C28 5.19391 26.8061 4 25.3333 4H8.66667C6.08934 4 4 6.08934 4 8.66667Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9 8.66577C8.99951 8.4818 8.85005 8.33301 8.66607 8.33333C8.48209 8.33366 8.33317 8.48299 8.33333 8.66696C8.3335 8.85094 8.48269 9 8.66667 9C8.85095 8.99962 9.00011 8.85006 9 8.66577Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1496_1850">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
