import React from 'react';
import { IconProps } from '../types';

export const ChevronDownFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.5736 22.5691C15.8084 22.8064 16.1916 22.8064 16.4264 22.5691L25.3807 13.5221C25.7557 13.1432 25.4873 12.5 24.9543 12.5L7.04573 12.5C6.51268 12.5 6.24431 13.1432 6.61928 13.5221L15.5736 22.5691Z"
          fill={color}
        />
      </svg>
    );
  }
);
