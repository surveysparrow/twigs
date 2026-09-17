import React from 'react';
import { IconProps } from '../types';

export const AiSparkleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_4832_58)">
          <path
            d="M14.6509 27.0818C15.1337 28.3061 16.8663 28.3061 17.3491 27.0818L18.7155 23.6176C19.5999 21.375 21.375 19.5998 23.6176 18.7154L27.0819 17.3491C28.306 16.8662 28.306 15.1337 27.0819 14.6509L23.6176 13.2845C21.375 12.4001 19.5999 10.625 18.7155 8.38237L17.3491 4.91812C16.8663 3.69396 15.1337 3.69396 14.6509 4.91812L13.2846 8.38237C12.4002 10.625 10.625 12.4001 8.38241 13.2845L4.91817 14.6509C3.69394 15.1337 3.69394 16.8662 4.91817 17.3491L8.38241 18.7154C10.625 19.5998 12.4002 21.375 13.2846 23.6176L14.6509 27.0818Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_4832_58">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
