import React from 'react';
import { IconProps } from '../types';

export const CloseCircleFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 16C4 22.6265 9.37347 28 16 28C22.6265 28 28 22.6265 28 16C28 9.37347 22.6265 4 16 4C9.37347 4 4 9.37347 4 16ZM11.1161 20.8839C10.628 20.3957 10.628 19.6043 11.1161 19.1161L14.2322 16L11.1161 12.8839C10.628 12.3957 10.628 11.6043 11.1161 11.1161C11.6043 10.628 12.3957 10.628 12.8839 11.1161L16 14.2322L19.1161 11.1161C19.6043 10.628 20.3957 10.628 20.8839 11.1161C21.372 11.6043 21.372 12.3957 20.8839 12.8839L17.7678 16L20.8839 19.1161C21.372 19.6043 21.372 20.3957 20.8839 20.8839C20.3957 21.372 19.6043 21.372 19.1161 20.8839L16 17.7678L12.8839 20.8839C12.3957 21.372 11.6043 21.372 11.1161 20.8839Z"
          fill={color}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
