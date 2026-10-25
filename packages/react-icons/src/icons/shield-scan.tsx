import React from 'react';
import { IconProps } from '../types';

export const ShieldScanIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1779_20927)">
          <path
            d="M8.96267 25.704C8.19467 25.148 7.49467 24.5066 6.88 23.7866"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4.69733 12C5.44533 9.88933 6.75733 8.04667 8.46533 6.66667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 16C4 17.4053 4.25333 18.7467 4.69733 20"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.7373 6.07067C20.816 4.764 18.4973 4 16 4C14.784 4 13.612 4.184 12.5067 4.52"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.5067 27.48C13.612 27.816 14.784 28 16 28C22.628 28 28 22.628 28 16C28 15.276 27.9253 14.5706 27.8027 13.8826"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.4867 5.21729C25.7293 5.21729 26.7373 6.22529 26.7373 7.46795C26.7373 8.71062 25.7293 9.71862 24.4867 9.71862C23.244 9.71862 22.236 8.71062 22.236 7.46795C22.2373 6.22529 23.2453 5.21729 24.4867 5.21729Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20 17.6667C20 19.8667 16 21.3333 16 21.3333C16 21.3333 12 19.8667 12 17.6667V13.2387L14.9147 12.1893C15.616 11.9373 16.3813 11.9373 17.0827 12.1893L20 13.2387V17.6667Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1779_20927">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
