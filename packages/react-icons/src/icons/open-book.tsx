import React from 'react';
import { IconProps } from '../types';

export const OpenBookIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.6667 7.08933C23.9 6.86667 25.192 6.73733 26.608 6.68933C27.3653 6.664 28 7.264 28 8.02133V23.804C28 24.5267 27.4227 25.124 26.7013 25.1347C22.5787 25.1973 19.4747 25.9573 16 28C12.5253 25.9573 9.42133 25.1973 5.29867 25.136C4.57733 25.1253 4 24.5267 4 23.804V8.02133C4 7.276 4.612 6.664 5.356 6.688C9.45067 6.82 12.5413 7.59067 16 9.528"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.6667 20.3173V4.016C22.6667 3.044 21.6453 2.36533 20.7773 2.80133C18.436 3.97467 16.4627 6.36 16 8.816V28C16.528 25.2013 19.0147 22.4947 21.7747 21.568C22.3107 21.388 22.6667 20.8827 22.6667 20.3173V20.3173Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
