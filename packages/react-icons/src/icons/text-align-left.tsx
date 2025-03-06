import React from 'react';
import { IconProps } from '../types';

export const TextAlignLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.664 3h10.667M2.664 6.333h8M2.664 9.667h10.667M2.664 13h5.333"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
