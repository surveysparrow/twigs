import React from 'react';
import { IconProps } from '../types';

export const JourneyArrowsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3280_42)">
          <path
            d="M4.5 6C4.5 4.89543 5.39543 4 6.5 4H22.1716C22.702 4 23.2107 4.21071 23.5858 4.58579L27.2929 8.29289C27.6834 8.68342 27.6834 9.31658 27.2929 9.70711L23.5858 13.4142C23.2107 13.7893 22.702 14 22.1716 14H6.5C5.39543 14 4.5 13.1046 4.5 12V6Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.5 20C27.5 18.8954 26.6046 18 25.5 18H9.82843C9.29799 18 8.78929 18.2107 8.41421 18.5858L4.70711 22.2929C4.31658 22.6834 4.31658 23.3166 4.70711 23.7071L8.41421 27.4142C8.78929 27.7893 9.29799 28 9.82843 28H25.5C26.6046 28 27.5 27.1046 27.5 26V20Z"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3280_42">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
