import React from 'react';
import { IconProps } from '../types';

export const UserMinusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_185)">
          <path
            d="M24.4002 22H19.6002"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.8532 24.3814H5.20317C4.54077 24.3814 4.00317 23.8438 4.00317 23.1814V21.9814C4.00317 18.3514 8.74557 15.991 13.6032 15.991C13.9544 15.991 14.305 16.0034 14.6532 16.0277"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.5632 5.22734C18.1997 6.86379 18.1997 9.517 16.5632 11.1535C14.9268 12.7899 12.2736 12.7899 10.6371 11.1535C9.00066 9.517 9.00066 6.86379 10.6371 5.22734C12.2736 3.59089 14.9268 3.59089 16.5632 5.22734Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.0002 28C18.687 28 16.0002 25.3144 16.0002 22C16.0002 18.7552 18.7602 15.9964 22.005 16C25.317 16.0024 28.0002 18.688 28.0002 22C28.0002 25.3132 25.3146 28 22.0002 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_185">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
