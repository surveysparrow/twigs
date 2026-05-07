import React from 'react';
import { IconProps } from '../types';

export const AiModelIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.4173, ...rest
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
        <g clipPath="url(#clip0_429_26)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.1966 5.5579C25.4863 2.29465 27.8956 4.32433 25.5778 10.0913C23.26 15.8583 17.0928 23.1788 11.8031 26.4421C6.51329 29.7054 4.10403 27.6757 6.42182 21.9087C8.73961 16.1417 14.9068 8.82116 20.1966 5.5579Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7611 5.58444C6.47638 2.32205 4.09013 4.34062 6.43126 10.0931C8.77237 15.8455 14.9544 23.1535 20.2391 26.4159C25.5238 29.6783 27.91 27.6597 25.5689 21.9073C23.2278 16.1548 17.0458 8.84685 11.7611 5.58444Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7008 15.9996C17.7008 16.9384 16.9397 17.7003 16.0001 17.7003C15.0604 17.7003 14.2993 16.9384 14.2993 15.9996C14.2993 15.0608 15.0604 14.2988 16.0001 14.2988C16.9397 14.2988 17.7008 15.0608 17.7008 15.9996Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_429_26">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
