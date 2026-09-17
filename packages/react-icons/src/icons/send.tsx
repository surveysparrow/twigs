import React from 'react';
import { IconProps } from '../types';

export const SendIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_515)">
          <path
            d="M14.6828 16.0006H8.22221"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.22221 16.0006L6.0452 24.2231C5.9029 24.7611 6.0888 25.3325 6.52033 25.6836C6.95186 26.0347 7.54899 26.1004 8.04651 25.8515L25.2156 17.2666C25.6951 17.0269 25.998 16.5367 25.998 16.0005C25.998 15.4643 25.6951 14.9742 25.2156 14.7345L8.04651 6.14954C7.54899 5.90065 6.95186 5.96635 6.52033 6.31748C6.0888 6.6686 5.9029 7.24002 6.0452 7.77794L8.22221 16.0006Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_515">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

export const SendMessageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.672 16.1987L14.0333 26.824C14.328 28.148 16.0867 28.4334 16.784 27.2707L27.7826 8.93869C28.384 7.93869 27.664 6.66669 26.4973 6.66669H5.76265C4.42532 6.66669 3.75599 8.28269 4.70132 9.22802L11.672 16.1987Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M27.7867 7.41333L11.6667 16.2"
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
