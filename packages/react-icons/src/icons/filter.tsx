import React from 'react';
import { IconProps } from '../types';

export const FilterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.6667 20V25.3333C19.6667 26.0406 19.3857 26.7189 18.8856 27.219C18.3855 27.719 17.7072 28 17 28H15C14.2928 28 13.6145 27.719 13.1144 27.219C12.6143 26.7189 12.3333 26.0406 12.3333 25.3333V20L4.67752 11.4255C4.24118 10.9368 4 10.3046 4 9.64941V8C4 5.79085 9.37259 4 16 4C22.6274 4 28 5.79085 28 8V9.64941C28 10.3045 27.7588 10.9367 27.3225 11.4254L19.6667 20Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M28 8C28 10.2091 22.6274 12 16 12C9.37259 12 4 10.2091 4 8"
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
