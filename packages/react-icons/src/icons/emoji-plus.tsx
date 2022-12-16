import React from 'react';
import { IconProps } from '../types';

export const EmojiPlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3333 12V13.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.6667 12V13.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.6666 19.584C17.9928 21.9167 14.0072 21.9167 11.3333 19.584"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.6837 13.2672C28.9013 18.4723 26.5289 23.855 21.8657 26.4682C17.2024 29.0814 11.373 28.2948 7.5691 24.5391C3.76524 20.7834 2.90442 14.9644 5.45797 10.2682C8.01153 5.57205 13.3636 3.13133 18.5837 4.28244"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.6667 3V8.33333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 5.66667H28.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
