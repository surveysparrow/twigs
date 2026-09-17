import React from 'react';
import { IconProps } from '../types';

export const PinIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1917_589)">
          <path
            d="M4.99993 27L10.9461 21.0538M13.704 12.5708L16.9708 9.30414C17.3224 8.95899 17.4975 8.47231 17.4463 7.98224L17.2086 5.89954C17.1697 5.55762 17.3517 5.22861 17.6619 5.07967C17.9721 4.93072 18.3426 4.9945 18.5851 5.23859L26.7614 13.4149C27.0055 13.6574 27.0693 14.0279 26.9203 14.3381C26.7714 14.6483 26.4424 14.8302 26.1004 14.7914L24.0178 14.5537C23.5277 14.5025 23.041 14.6775 22.6959 15.0292L19.4291 18.2959C19.1242 18.5983 18.953 19.0101 18.9536 19.4395V25.1598C18.9526 25.8138 18.5581 26.403 17.9538 26.6532C17.3495 26.9034 16.654 26.7653 16.191 26.3034L5.70376 15.8066C5.2418 15.3436 5.10378 14.6481 5.35394 14.0438C5.6041 13.4395 6.19329 13.045 6.84734 13.044H12.5676C12.9942 13.0433 13.403 12.8731 13.704 12.5708Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1917_589">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
