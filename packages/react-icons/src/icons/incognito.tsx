import React from 'react';
import { IconProps } from '../types';

export const IncognitoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M10.5319 27.0001C12.3545 27.0001 13.8319 25.5226 13.8319 23.7001C13.8319 21.8775 12.3545 20.4001 10.5319 20.4001C8.70939 20.4001 7.23193 21.8775 7.23193 23.7001C7.23193 25.5226 8.70939 27.0001 10.5319 27.0001Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.322 27.0001C23.1445 27.0001 24.622 25.5226 24.622 23.7001C24.622 21.8775 23.1445 20.4001 21.322 20.4001C19.4995 20.4001 18.022 21.8775 18.022 23.7001C18.022 25.5226 19.4995 27.0001 21.322 27.0001Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.832 23.7C14.701 22.543 16.3433 22.3094 17.5004 23.1783C17.698 23.3268 17.8736 23.5024 18.022 23.7"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 17.4441C11.9715 14.1862 20.0284 14.1862 26.9999 17.4441"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11.6L9.76 7.04199C9.95645 5.86389 10.9756 5.00034 12.17 5H19.828C21.0231 4.99937 22.0434 5.86314 22.2399 7.04199L22.9999 11.6"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
