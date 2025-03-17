import React from 'react';
import { IconProps } from '../types';

export const PencilIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23.3867 13.4933L18.5067 8.61333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M8.33467 28H4V23.6653C4 23.312 4.14 22.972 4.39067 22.7227L22.1693 4.94267C22.6907 4.42133 23.5347 4.42133 24.0547 4.94267L27.056 7.944C27.5773 8.46533 27.5773 9.30933 27.056 9.82933L9.27733 27.6093C9.028 27.86 8.688 28 8.33467 28V28Z"
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
