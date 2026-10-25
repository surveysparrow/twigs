import React from 'react';
import { IconProps } from '../types';

export const TagIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_573)">
          <path
            d="M12.3131 11.7581C12.465 11.9101 12.465 12.1564 12.3131 12.3083C12.1612 12.4602 11.9149 12.4602 11.763 12.3083C11.611 12.1564 11.611 11.9101 11.763 11.7581C11.9149 11.6062 12.1612 11.6062 12.3131 11.7581"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7157 6.02787L13.8811 6.0001C14.4711 5.99454 15.0389 6.22787 15.4566 6.64452L25.3496 16.542C26.2174 17.4097 26.2174 18.8175 25.3496 19.6852L19.6898 25.3484C18.8221 26.2172 17.4132 26.2172 16.5455 25.3484L6.64473 15.4442C6.23252 15.032 6.00031 14.472 6.00031 13.8876V10.7633C6.00031 10.1788 6.23252 9.61887 6.64473 9.20666L9.17797 6.6723C9.58685 6.26342 10.139 6.03232 10.7157 6.02787Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_573">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
