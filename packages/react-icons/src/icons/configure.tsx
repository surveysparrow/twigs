import React from 'react';
import { IconProps } from '../types';

export const ConfigureIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 17.3333V8C4 5.79067 5.79067 4 8 4H24C26.2093 4 28 5.79067 28 8V24C28 26.2093 26.2093 28 24 28H16"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M14.2493 15.0427L16.8907 17.684L20.6667 13.996C20.716 13.948 20.7987 13.964 20.828 14.0253C21.8053 16.1147 21.348 18.688 19.6213 20.4133C17.9493 22.0853 15.572 22.5253 13.5467 21.7333L7.98534 27.2947C7.07334 28.2053 5.59467 28.2053 4.68401 27.2947C3.77334 26.3827 3.77334 24.904 4.68401 23.9933L10.2013 18.476C9.40801 16.452 9.84934 14.0747 11.5213 12.4013C13.244 10.6787 15.812 10.304 17.9027 11.1987C17.9653 11.2267 17.9813 11.312 17.9333 11.3613L14.2493 15.0427Z"
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
