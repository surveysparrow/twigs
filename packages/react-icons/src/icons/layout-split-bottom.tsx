import React from 'react';
import { IconProps } from '../types';

export const LayoutSplitBottomIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_607)">
          <path
            d="M3.9939 21.334L28.0039 21.334"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.0039 3.9961L5.9939 3.99609C4.88933 3.99609 3.9939 4.89152 3.9939 5.99609L3.9939 26.0061C3.9939 27.1107 4.88933 28.0061 5.9939 28.0061L26.0039 28.0061C27.1085 28.0061 28.0039 27.1107 28.0039 26.0061L28.0039 5.9961C28.0039 4.89153 27.1085 3.9961 26.0039 3.9961Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_607">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
