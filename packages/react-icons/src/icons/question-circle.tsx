import React from 'react';
import { IconProps } from '../types';

export const QuestionCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 28C9.372 28 4 22.628 4 16C4 9.372 9.372 4 16 4C22.628 4 28 9.372 28 16C28 22.628 22.628 28 16 28Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M16 17.6667V17.3333C16 16.244 16.6733 15.6533 17.348 15.2C18.0066 14.756 18.6666 14.1773 18.6666 13.1107C18.6666 11.6373 17.4733 10.444 16 10.444C14.5266 10.444 13.3333 11.6373 13.3333 13.1107"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M15.9987 21.3333C15.8147 21.3333 15.6654 21.4827 15.6667 21.6667C15.6667 21.8507 15.816 22 16 22C16.184 22 16.3334 21.8507 16.3334 21.6667C16.3334 21.4827 16.184 21.3333 15.9987 21.3333Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
