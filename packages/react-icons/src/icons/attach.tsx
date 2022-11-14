import React from 'react';
import { IconProps } from '../types';

export const AttachIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.5053 11.1667L11.1907 18.4813C10.0893 19.5827 10.0893 21.3693 11.1907 22.4707C12.292 23.572 14.0787 23.572 15.18 22.4707L24.8227 12.828C26.8427 10.808 26.8427 7.53334 24.8227 5.51334C22.8027 3.49334 19.528 3.49334 17.508 5.51334L7.86535 15.156C4.92668 18.0947 4.92668 22.8573 7.86535 25.796C10.804 28.7347 15.5667 28.7347 18.5053 25.796L24.3573 19.944"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
