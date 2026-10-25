import React from 'react';
import { IconProps } from '../types';

export const CursorClickIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_673_9)">
          <path
            d="M3.99512 15.9991H7.99678"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.0001 3.99414V7.99581"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.3978 10.3968L7.46323 7.46225"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.6025 10.3968L24.537 7.46225"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.3978 21.6015L7.46323 24.536"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.2528 25.8542L23.5019 22.8831C23.6369 22.5619 23.8924 22.3064 24.2135 22.1713L27.1892 20.9198C27.7089 20.701 28.0347 20.179 28.0029 19.6161C27.9712 19.0532 27.5888 18.5712 27.0479 18.4122L19.0447 16.0566C18.5768 15.9188 18.0709 16.0477 17.726 16.3926C17.3811 16.7375 17.2522 17.2434 17.39 17.7113L19.7451 25.713C19.9041 26.2539 20.3862 26.6363 20.9491 26.668C21.512 26.6997 22.034 26.3739 22.2528 25.8542Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_673_9">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
