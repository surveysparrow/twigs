import React from 'react';
import { IconProps } from '../types';

export const InboxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_493)">
          <path
            d="M3.61218 16.7671H9.5949C10.1197 16.7671 10.601 17.0602 10.8352 17.5249L11.456 18.7524C11.6915 19.217 12.1715 19.5114 12.6976 19.5114H19.3037C19.8285 19.5114 20.3085 19.2183 20.5427 18.7537L21.1635 17.5274C21.3991 17.0628 21.8791 16.7684 22.4051 16.7684H28.3891"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.60258 5.7962C8.44674 5.7962 7.41122 6.50532 7.00546 7.57668L3.8733 15.834C3.64034 16.4496 3.52002 17.1024 3.52002 17.7604V22.2532C3.52002 23.7674 4.76162 24.9962 6.29378 24.9962H25.7075C27.2397 24.9962 28.4813 23.7687 28.4813 22.2532V17.7616C28.4813 17.1037 28.3623 16.4509 28.128 15.8352L24.9959 7.5754C24.5901 6.50404 23.5546 5.79492 22.3987 5.79492L9.60258 5.7962Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_493">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
