import React from 'react';
import { IconProps } from '../types';

export const ColorPaletteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.9987 8.5C15.796 8.5 15.632 8.664 15.6347 8.86667C15.6347 9.06933 15.7987 9.23333 16.0013 9.23333C16.204 9.23333 16.368 9.06933 16.368 8.86667C16.3653 8.664 16.2027 8.5 15.9987 8.5Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M9.232 15.9987C9.232 15.796 9.068 15.632 8.86667 15.6347C8.664 15.6347 8.5 15.7987 8.5 16.0013C8.5 16.204 8.664 16.368 8.86667 16.368C9.06933 16.368 9.232 16.2027 9.232 15.9987Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M21.3027 10.696C21.16 10.5533 20.928 10.5533 20.7867 10.6973C20.644 10.84 20.644 11.072 20.7867 11.2147C20.9294 11.3573 21.1614 11.3573 21.304 11.2147C21.4467 11.0707 21.4467 10.84 21.3027 10.696Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M11.2133 20.7854C11.0707 20.6427 10.8387 20.6427 10.6973 20.7867C10.5547 20.9294 10.5547 21.1614 10.6973 21.304C10.84 21.4467 11.072 21.4467 11.2147 21.304C11.3573 21.1614 11.3573 20.9294 11.2133 20.7854Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M11.2147 11.2133C11.3573 11.0707 11.3573 10.8387 11.2133 10.6973C11.0707 10.5547 10.8387 10.5547 10.696 10.6973C10.5533 10.84 10.5533 11.072 10.696 11.2147C10.8387 11.3573 11.0707 11.3573 11.2147 11.2133Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M16 28C9.26001 28 3.81734 22.4427 4.00534 15.66C4.17867 9.39867 9.39867 4.17867 15.66 4.00534C22.4427 3.81734 28 9.26001 28 16V17.3333C28 18.8067 26.8067 20 25.3333 20H22.5827C20.8107 20 19.532 21.696 20.0187 23.3987L20.3613 24.6C20.8493 26.304 19.5693 28 17.7987 28H16Z"
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
