import React from 'react';
import { IconProps } from '../types';

export const TranscriptIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_137_28)">
          <path
            d="M13.3336 16.334H9.33358"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.6669 21.334H9.33358"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.0002 24.6673V25.334C24.0002 26.8073 22.8069 28.0007 21.3336 28.0007H6.66691C5.19358 28.0007 4.00024 26.8073 4.00024 25.334V8.00065C4.00024 6.52732 5.19358 5.33399 6.66691 5.33399H16.0002"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M29.3336 11.735C29.3336 14.6805 26.9458 17.0684 24.0002 17.0684"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.0002 17.0684C21.0547 17.0684 18.6669 14.6805 18.6669 11.735"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.0002 17.0684L24.0002 20.0017"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.0001 13.961C22.7009 13.9606 21.6478 12.9075 21.6474 11.6083V7.68675C21.6478 6.38753 22.7009 5.3344 24.0001 5.33398C25.2994 5.3344 26.3525 6.38753 26.3529 7.68675V11.6083C26.3531 12.2323 26.1053 12.8309 25.664 13.2721C25.2227 13.7134 24.6242 13.9612 24.0001 13.961Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_137_28">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
