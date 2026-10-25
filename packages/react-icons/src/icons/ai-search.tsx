import React from 'react';
import { IconProps } from '../types';

export const AiSearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3183_23)">
          <path
            d="M6.66504 14.6657C6.66504 9.51085 10.8439 5.33203 15.9987 5.33203C21.1535 5.33203 25.3323 9.51085 25.3323 14.6657C25.3323 19.8205 21.1535 23.9993 15.9987 23.9993"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.9998 26.6652L22.5992 21.2646"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4.63859 22.8622L6.95039 23.7175L7.80571 26.0293C7.87497 26.2167 7.99998 26.3784 8.16391 26.4925C8.32784 26.6067 8.52283 26.668 8.72262 26.668C8.9224 26.668 9.11739 26.6067 9.28132 26.4925C9.44526 26.3784 9.57027 26.2167 9.63952 26.0293L10.4958 23.7175L12.8066 22.8622C12.994 22.7929 13.1557 22.6679 13.2699 22.504C13.3841 22.34 13.4453 22.145 13.4453 21.9453C13.4453 21.7455 13.3841 21.5505 13.2699 21.3865C13.1557 21.2226 12.994 21.0976 12.8066 21.0284L10.4958 20.173L9.63952 17.8612C9.57069 17.6734 9.44584 17.5112 9.28185 17.3967C9.11786 17.2821 8.92265 17.2207 8.72261 17.2207C8.52258 17.2207 8.32737 17.2821 8.16338 17.3967C7.99939 17.5112 7.87454 17.6734 7.80571 17.8612L6.95039 20.173L4.63859 21.0284C4.45119 21.0976 4.28951 21.2226 4.17532 21.3865C4.06113 21.5505 3.99992 21.7455 3.99992 21.9453C3.99992 22.145 4.06113 22.34 4.17532 22.504C4.28951 22.6679 4.45119 22.7929 4.63859 22.8622Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_3183_23">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
