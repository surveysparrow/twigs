import React from 'react';
import { IconProps } from '../types';

export const ShuffleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24.5555 25.3077L27 22.8633L24.5555 20.4188"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M13.778 13.1111L11.8469 10.4565C11.3849 9.82091 10.6454 9.44691 9.85956 9.44935L5 9.47013"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M24.5555 11.8889L27 9.44444L24.5555 7"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M18.222 19.2222L20.1532 21.8768C20.6152 22.5124 21.3546 22.8864 22.1405 22.8839L27 22.8632"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M27 9.47014L22.1404 9.44937C21.3546 9.4457 20.6151 9.82092 20.1531 10.4565L11.8469 21.8769C11.3849 22.5125 10.6454 22.8865 9.85956 22.884L5 22.8633"
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
