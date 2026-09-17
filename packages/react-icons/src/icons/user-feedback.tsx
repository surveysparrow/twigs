import React from 'react';
import { IconProps } from '../types';

export const UserFeedbackIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_628)">
          <path
            d="M22.6666 21.3333C22.6666 19.4924 21.1742 18 19.3333 18H12.6666C10.8256 18 9.33325 19.4924 9.33325 21.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.3333 11.3333C19.3333 13.1743 17.8409 14.6667 15.9999 14.6667C14.159 14.6667 12.6666 13.1743 12.6666 11.3333C12.6666 9.49238 14.159 8 15.9999 8C17.8409 8 19.3333 9.49238 19.3333 11.3333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.7608 25.3333L11.9866 29.1527C11.7412 29.349 11.4051 29.3872 11.1218 29.2511C10.8386 29.115 10.6585 28.8286 10.6585 28.5143V25.3333H7.99048C5.78134 25.3333 3.99048 23.5425 3.99048 21.3333V8C3.99048 5.79086 5.78134 4 7.99048 4H23.9905C26.1996 4 27.9905 5.79086 27.9905 8V21.3333C27.9905 23.5425 26.1996 25.3333 23.9905 25.3333H16.7608Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_628">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
