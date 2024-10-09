import React from 'react';
import { IconProps } from '../types';

export const CodeBlockIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
        ref={ref}
      >
        <g
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          clipPath="url(#clip0_103_16454)"
        >
          <path d="M5.75 12.003v4.835a1 1 0 001 1h11.336a1 1 0 001-1V8.833a1 1 0 00-1-1H12.83M9.083 9.501l1.667-1.667-1.667-1.667M6.578 6.167L4.911 7.834l1.667 1.667" />
        </g>
        <defs>
          <clipPath id="clip0_103_16454">
            <path fill="#fff" d="M0 0H20V20H0z" transform="translate(2 2)" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
