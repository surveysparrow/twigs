import React from 'react';
import { IconProps } from '../types';

export const ArrowsSortIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_457)">
          <path
            d="M14.4 11.146L9.99998 6.66602L5.59998 11.146"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.99985 8.35669L9.99985 19.5071"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.3999 20.8526L21.9999 25.3326L17.5999 20.8526"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.9998 23.642V12.4916"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.7833 22.5494C12.7833 24.0865 11.5371 25.3327 9.99995 25.3327C8.46278 25.3327 7.21665 24.0865 7.21665 22.5494C7.21665 21.0122 8.46278 19.7661 9.99995 19.7661C11.5371 19.7661 12.7833 21.0122 12.7833 22.5494Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.7832 9.44937C24.7832 7.91219 23.5371 6.66606 21.9999 6.66606C20.4627 6.66606 19.2166 7.91219 19.2166 9.44937C19.2166 10.9865 20.4627 12.2327 21.9999 12.2327C23.5371 12.2327 24.7832 10.9865 24.7832 9.44937Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_457">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
