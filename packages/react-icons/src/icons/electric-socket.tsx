import React from 'react';
import { IconProps } from '../types';

export const ElectricSocket = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.6667 14.3334H19.3333C20.0697 14.3334 20.6667 14.9303 20.6667 15.6667V17.3334C20.6667 18.9902 19.3235 20.3334 17.6667 20.3334H14.3333C12.6765 20.3334 11.3333 18.9902 11.3333 17.3334V15.6667C11.3333 14.9303 11.9303 14.3334 12.6667 14.3334Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3867 14.3334V11.3334"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.6133 14.3334V11.3334"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.3333 26.7347C27.2631 23.7848 29.6787 16.5863 26.7288 10.6565C23.7788 4.72679 16.5804 2.31118 10.6506 5.26111C6.57537 7.28848 3.99917 11.4483 3.99997 16C3.99717 19.3132 5.31369 22.4913 7.65867 24.832C9.4036 26.5704 11.7663 27.5465 14.2293 27.5467C15.2069 27.5459 15.9993 26.7536 16 25.776V20.3333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
