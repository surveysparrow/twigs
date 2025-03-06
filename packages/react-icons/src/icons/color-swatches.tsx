import React from 'react';
import { IconProps } from '../types';

export const ColorSwatchesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.66667 28C6.08933 28 4 25.9107 4 23.3333V6.66667C4 5.19391 5.19391 4 6.66667 4H10.6667C12.1394 4 13.3333 5.19391 13.3333 6.66667V23.3333C13.3333 25.9107 11.244 28 8.66667 28Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M11.9667 26.6333L24.9147 13.6853C25.9557 12.644 25.9557 10.956 24.9147 9.91467L22.0867 7.08667C21.0453 6.04565 19.3573 6.04565 18.316 7.08667L13.3333 12.0667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M19.9334 18.6667H25.3334C26.8061 18.6667 28 19.8606 28 21.3334V25.3334C28 26.8061 26.8061 28 25.3334 28H8.66669"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M4 19.9467H13.3333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M4 11.88H13.3333"
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
