import React from 'react';
import { IconProps } from '../types';

export const MailForwardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_361)">
          <path
            d="M9.33067 11.9976L13.4408 15.1666C14.8499 16.2531 16.8073 16.2787 18.2443 15.2292L22.6696 11.9976"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.0001 26.6703H10.6646C6.98113 26.6703 3.99512 23.6843 3.99512 20.0009V11.9976C3.99512 8.31414 6.98113 5.32812 10.6646 5.32812H21.3357C25.0191 5.32812 28.0051 8.31414 28.0051 11.9976V17.3331"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.3507 22.6687L28.0185 25.3365L25.3507 28.0042"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.3357 25.3365H28.0051"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_361">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
