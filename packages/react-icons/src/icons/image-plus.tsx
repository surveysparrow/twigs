import React from 'react';
import { IconProps } from '../types';

export const ImagePlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.6667 4V9.33333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M24 6.66667H29.3333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M18.6667 6.66667H6.66667C5.19333 6.66667 4 7.86001 4 9.33334V25.3333C4 26.8067 5.19333 28 6.66667 28H24C25.4733 28 26.6667 26.8067 26.6667 25.3333V14.6667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M9.28931 19.2893L11.2946 16.108C11.76 15.3707 12.796 15.2707 13.3933 15.9053L14.8266 17.428L16.3293 14.2347C16.792 13.2507 18.176 13.2053 18.7026 14.1573L21.5746 19.3547C22.0653 20.244 21.4213 21.3333 20.4066 21.3333H10.4173C9.36665 21.3333 8.72931 20.1773 9.28931 19.2893V19.2893Z"
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
