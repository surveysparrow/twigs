import React from 'react';
import { IconProps } from '../types';

export const UserTransferIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_617)">
          <path
            d="M26.6711 17.3329C26.6711 23.2264 21.8935 28.004 16 28.004C10.1065 28.004 5.32886 23.2264 5.32886 17.3329C5.32886 11.4394 10.1065 6.66182 16 6.66182H25.3372"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.3372 6.66182L21.3355 2.66016"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.3372 6.66182L21.3355 10.6635"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.6644 22.6685C10.8195 22.2782 11.0602 21.9277 11.3687 21.6427C11.8885 21.1596 12.5718 20.8908 13.2815 20.8904H18.7171C19.4272 20.8909 20.1109 21.1596 20.6312 21.6427C20.939 21.9283 21.1796 22.2786 21.3355 22.6685"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 12.2935C14.5266 12.2935 13.3322 13.4879 13.3322 14.9613C13.3322 16.4347 14.5266 17.6291 16 17.6291C17.4733 17.6291 18.6677 16.4347 18.6677 14.9613C18.6677 13.4879 17.4733 12.2935 16 12.2935Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_617">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
