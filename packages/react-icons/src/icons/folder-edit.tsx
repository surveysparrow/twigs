import React from 'react';
import { IconProps } from '../types';

export const FolderEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1018_569)">
          <path
            d="M28 14.6667V10.5867C28 9.11467 26.8067 7.92 25.3333 7.92H16.7053C16.264 7.92 15.8507 7.70133 15.6027 7.336L13.7293 4.58267C13.4813 4.21867 13.0693 4 12.628 4H6.66667C5.19333 4 4 5.19333 4 6.66667V22.6667C4 24.14 5.19333 25.3333 6.66667 25.3333H13.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.8613 27.6093L27.608 22.8627C28.1293 22.3413 28.1293 21.4973 27.608 20.9773L25.4933 18.8627C24.972 18.3413 24.128 18.3413 23.608 18.8627L18.8613 23.6093C18.6107 23.86 18.4707 24.1987 18.4707 24.552V28H21.9187C22.272 28 22.6107 27.86 22.8613 27.6093Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1018_569">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
