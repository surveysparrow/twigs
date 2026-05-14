import React from 'react';
import { IconProps } from '../types';

export const AiTemplatesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2272_593)">
          <path
            d="M8.88235 8.88235V19.2353C8.88235 21.3795 10.6205 23.1176 12.7647 23.1176H23.1176"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.88235 8.88235C8.88235 6.73819 10.6205 5 12.7647 5H23.1176C25.2618 5 27 6.73819 27 8.88235V19.2353C27 21.3795 25.2618 23.1176 23.1176 23.1176"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.88235 8.88235C6.73819 8.88235 5 10.6205 5 12.7647V23.1176C5 25.2618 6.73819 27 8.88235 27H19.2353C21.3795 27 23.1176 25.2618 23.1176 23.1176"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.9412 17.9412C17.9412 15.797 19.6794 14.0588 21.8235 14.0588C19.6794 14.0588 17.9412 12.3206 17.9412 10.1765C17.9412 12.3206 16.203 14.0588 14.0588 14.0588C16.203 14.0588 17.9412 15.797 17.9412 17.9412Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2272_593">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
