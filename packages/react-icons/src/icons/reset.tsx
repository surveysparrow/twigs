import React from 'react';
import { IconProps } from '../types';

export const ResetIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          d="M5.75998 5.86523V8.8119H8.70581"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M6.14413 8.81217C7.27496 6.73967 9.47329 5.33301 12 5.33301C15.6816 5.33301 18.6666 8.31801 18.6666 11.9997C18.6666 15.6813 15.6816 18.6663 12 18.6663C9.04583 18.6663 6.54023 16.7445 5.66533 14.083"
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
