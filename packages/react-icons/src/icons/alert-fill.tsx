import React from 'react';
import { IconProps } from '../types';

export const AlertFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.5364 6.17321L28.1106 22.9291C29.2232 24.8767 27.8168 27.3006 25.5742 27.3006H6.42574C4.18187 27.3006 2.77555 24.8767 3.88936 22.9291L13.4636 6.17321C14.5849 4.20935 17.415 4.20935 18.5364 6.17321ZM15.9999 10C16.7419 10 17.3433 10.6015 17.3433 11.3434V16.2377C17.3433 16.9797 16.7419 17.5812 15.9999 17.5812C15.258 17.5812 14.6565 16.9797 14.6565 16.2377V11.3434C14.6565 10.6015 15.258 10 15.9999 10ZM16 23.7334C17.031 23.7334 17.8667 22.8976 17.8667 21.8667C17.8667 20.8357 17.031 20 16 20C14.9691 20 14.1334 20.8357 14.1334 21.8667C14.1334 22.8976 14.9691 23.7334 16 23.7334Z"
          fill={color}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
